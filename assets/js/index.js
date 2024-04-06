
//Popover en subtítulo "destacados", sección tarjetas de imágenes
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});


//Modal en sección formulario
$('#contacto').click(function () {
    $('#exampleModal').modal('show');
});


//Tooltip en botón "enviar" de formulario
$('[data-toggle="tooltip"]').tooltip();

//Smooth scroll de barra de navegación
$("a").on("click", funtion(event) {
    if(this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top
    }, 800, function () {

        window.location.hash = hash;
    });
}
});


