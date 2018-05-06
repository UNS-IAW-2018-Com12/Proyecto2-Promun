function cambiarEstilo(estilo) {
    $("#pagestyle").attr('href', estilo);
    localStorage.setItem('tema', estilo);
};

function verificarEstilo() {
    var estilo = localStorage.getItem('tema');
    if (estilo === null)
        $('#pagestyle').attr("href", "stylesheets/bootstrap-darkly.css");
    else
        $('#pagestyle').attr("href", estilo);
};
