(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

//swal-fire
document.getElementById('suscribirseBtn').addEventListener('click', function() {
    Swal.fire({
        title: 'Genial!',
        text: 'Te has suscrito correctamente',
        imageUrl: 'https://www.rismedia.com/wp-content/uploads/2019/01/6_subscription_service_483177730.jpg',
        imageWidth: 400,
        imageHeight: 200,
        animation: false
    });
});


//cODIGO PARA VALIDAR EL FORMULARIO

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    var successMessage = document.getElementById("success-message");
    var errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtén los valores del formulario
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Aquí deberías hacer una solicitud AJAX al servidor para enviar los datos del formulario
        // Por simplicidad, simplemente mostraremos el mensaje de éxito
        successMessage.style.display = "block";
        errorMessage.style.display = "none";

        // Muestra el mensaje de éxito y oculta el formulario después de un tiempo
        setTimeout(function() {
            successMessage.style.display = "none";
            form.reset(); // Limpia el formulario después de mostrar el mensaje de éxito
        }, 3000); // Cambia 3000 a la cantidad de milisegundos que deseas que el mensaje permanezca visible
    });
});


//BOTON PARA ENVIAR INFORMACION AL CLIENTE 

$(document).ready(function(){
    // Cuando se hace clic en el botón "Obtener Información"
    $("#obtener-informacion-btn").click(function(){
        // Muestra un cuadro de diálogo solicitando el correo electrónico
        Swal.fire({
            title: 'Introduzca su correo electrónico',
            input: 'email',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Enviar',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            preConfirm: (email) => {
                // Información a incluir en el correo electrónico
                let informacion = "En este correo electrónico encontrarás toda la información sobre los proyectos y posibles dudas que puedas tener. Un cordial saludo y muchas gracias por tu comprensión.";

                // Simulación de envío de correo electrónico (no se enviará realmente)
                setTimeout(() => {
                    // Muestra un mensaje de éxito
                    Swal.fire({
                        title: '¡Correo enviado!',
                        html: 'Se ha enviado la siguiente información a su dirección de correo electrónico:<br>' + informacion,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });
                }, 1000); // Tiempo de espera simulado de 1 segundos
            },
            allowOutsideClick: () => !Swal.isLoading()
        });
    });
});