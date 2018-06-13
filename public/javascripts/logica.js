function agregarPronosticoFaseFinal(button) {
  var inputs = $(button).closest('form').find('select');
  var golesEquipo1 = parseInt(inputs.eq(0).val());
  var golesEquipo2 = parseInt(inputs.eq(1).val());
  var equipos = $(button).closest('li').find('.equipo');
  var equipo1 = equipos.eq(0).text();
  var equipo2 = equipos.eq(1).text();
  $.post("/api/agregarPronosticoFaseFinal", {
      "equipo1": equipo1,
      "equipo2": equipo2,
      "golesEquipo1": golesEquipo1,
      "golesEquipo2": golesEquipo2
    },
    function(data, status) {
      if (status === 'success') {
        var goles = $(button).closest('li').find('.score');
        goles.eq(0).text(golesEquipo1);
        goles.eq(1).text(golesEquipo2);
        $(button).closest('.collapse').collapse('hide');
        $(button).closest('li').addClass('bg-success');
        $(button).closest('li').find('button').eq(0)
          .removeClass('btn-primary')
          .addClass('btn-danger')
          .removeAttr('data-toggle')
          .removeAttr('data-target')
          .attr("onclick", "borrarPronostico(this)")
          .text("Borrar pronóstico");
      }
    });
};

function agregarPronostico(button) {
  var inputs = $(button).closest('form').find('select');
  var golesEquipo1 = parseInt(inputs.eq(0).val());
  var golesEquipo2 = parseInt(inputs.eq(1).val());
  var equipos = $(button).closest('li').find('.equipo');
  var equipo1 = equipos.eq(0).text();
  var equipo2 = equipos.eq(1).text();
  $.post("/api/agregarPronostico", {
      "equipo1": equipo1,
      "equipo2": equipo2,
      "golesEquipo1": golesEquipo1,
      "golesEquipo2": golesEquipo2
    },
    function(data, status) {
      if (status === 'success') {
        var goles = $(button).closest('li').find('.score');
        goles.eq(0).text(golesEquipo1);
        goles.eq(1).text(golesEquipo2);
        $(button).closest('.collapse').collapse('hide');
        $(button).closest('li').addClass('bg-success');
        $(button).closest('li').find('button').eq(0)
          .removeClass('btn-primary')
          .addClass('btn-danger')
          .removeAttr('data-toggle')
          .removeAttr('data-target')
          .attr("onclick", "borrarPronostico(this)")
          .text("Borrar pronóstico");
      }
    });
};

function borrarPronostico(button) {
  var equipos = $(button).closest('li').find('.equipo');
  var equipo1 = equipos.eq(0).text();
  var equipo2 = equipos.eq(1).text();
  $.post("/api/borrarPronostico", {
      "equipo1": equipo1,
      "equipo2": equipo2
    },
    function(data, status) {
      if (status === 'success') {
        var goles = $(button).closest('li').find('.score');
        goles.eq(0).text("(-)");
        goles.eq(1).text("(-)");
        var idCollapse = $(button).closest('li').find('.collapse').attr('id');
        $(button)
          .removeClass('btn-danger')
          .removeAttr('onclick')
          .addClass("btn-primary")
          .attr('data-toggle', 'collapse')
          .attr('data-target', '#' + idCollapse)
          .text("Agregar pronóstico");
        $(button).closest('li').removeClass("bg-success");
      }
    });
};

function cargarModalEquipo(equipo) {
  $.get("/api/descripcion/"+equipo, function(data, status) {
        $('#modalEquipo').find('.modal-body').text(data);
    });
    $('#modalEquipo').find('.modal-title img').attr('src', "./images/banderas/"+equipo+".png");
    $('#modalEquipo').find('.modal-title span').text(equipo);
}
