function cargarResultado(button) {
  var inputs = $(button).closest('form').find('select');
  var golesEquipo1 = parseInt(inputs.eq(0).val());
  var golesEquipo2 = parseInt(inputs.eq(1).val());
  var equipos = $(button).closest('li').find('.equipo');
  var equipo1 = equipos.eq(0).text();
  var equipo2 = equipos.eq(1).text();
  $.post("/api/cargarResultado", {
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
          .attr("onclick", "borrarResultado(this)")
          .text("Borrar resultado");
      }
    });
};

function cerrarPartido(button) {
  var equipos = $(button).closest('li').find('.equipo');
  var equipo1 = equipos.eq(0).text();
  var equipo2 = equipos.eq(1).text();
  $.post("/api/cerrarPartido", {
      "equipo1": equipo1,
      "equipo2": equipo2
    },
    function(data, status) {
      if (status === 'success') {
        $(button).closest('li').addClass('bg-danger');
        var idCollapse = $(button).closest('li').find('.collapse').attr('id');
        $(button)
          .removeAttr('onclick')
          .attr('data-toggle', 'collapse')
          .attr('data-target', '#' + idCollapse)
          .text("Cargar resultado");
      }
    });
}
