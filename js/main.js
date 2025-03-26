/* Olio Theme Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

             
/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("navbar-fixed-top");
			} else {
				header.removeClass("navbar-fixed-top");
			}

		});
	});

/*=========================================================================
        textrotator
=========================================================================*/
    $(".rotate").textrotator({
      animation: "flip", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: "|", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 3000 // How many milliseconds until the next word show.
    }); 

/*=========================================================================
        Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });
             
/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img-popup').venobox({
		numeratio: true,
		infinigall: true
	});              
                          
             
/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
	 
/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init(); 

/*=========================================================================
    Google Map Settings
=========================================================================*/
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapContainer = document.getElementById('google-map');
        var iframe = document.createElement('iframe');
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.7531426471885!2d-37.06227853146847!3d-10.950355768440698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab374986dd47b%3A0x46cd2d61940052d7!2sTrianon%20Jardins!5e0!3m2!1spt-BR!2sbr!4v1742566449479!5m2!1spt-BR!2sbr";
        iframe.width = "880";
        iframe.height = "500";
        iframe.style.border = "0";
        iframe.allowFullscreen = "";
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        
        mapContainer.appendChild(iframe);  // Adiciona o iframe ao container
    } 


})(jQuery);

/*=========================================================================
    WhatssApp
=========================================================================*/

// Seleciona os elementos
var popup = document.getElementById("whatsappPopup");
var button = document.getElementById("whatsappButton");

// Função para alternar a visibilidade do popup
function toggleWhatsAppPopup() {
    popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

// Evento de clique no botão do WhatsApp
button.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que o clique feche o popup imediatamente
    toggleWhatsAppPopup();
});

// Fecha o popup ao clicar fora
document.addEventListener("click", function(event) {
    if (popup.style.display === "block" && !popup.contains(event.target) && !button.contains(event.target)) {
        popup.style.display = "none";
    }
});