(function ($) {
 "use strict";
$(document).ready(function(){
	  
		/*
		Jquery Mobile Menu
		============================*/
		$('#main-menu').meanmenu({
			meanScreenWidth: "767",
			meanMenuContainer: '.mobile-nav-menu',
		});	
		/*
		Testimonial Crousel
		============================*/ 	
		  $(".all-testimonial").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			items :1,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},				
				992:{
					items:2
				},				
				1000:{
					items:2
				}
			}			
		  });		  		
		
		/*
		Slider Crousel
		============================*/ 
		$(".all-slide").owlCarousel({
            items: 1,
            nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: true,
            autoplay: true,
            loop: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
            mouseDrag: false,
            touchDrag: false,
        });
        
        $(".all-slide").on("translate.owl.carousel", function(){
            $(".slider-text h1").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text ul li a").removeClass("animated fadeInDown").css("opacity", "0");
        });
        
        $(".all-slide").on("translated.owl.carousel", function(){
            $(".slider-text h1").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text ul li a").addClass("animated fadeInDown").css("opacity", "1");
        });
		/*
		Patner Crousel
		============================*/ 	
		  $(".all-patner").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:true, 
			dots:false, 
			items :4,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:2
				},
				768:{
					items:2
				},				
				992:{
					items:4
				},				
				1000:{
					items:4
				}
			}
		  }); 		
		/*
		All Service Crousel
		============================*/ 	
		  $(".all-service").owlCarousel({
			autoplay: true, 
			pagination:false,
			nav:false, 
			dots:true, 
			margin:30,
			items :4,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},				
				992:{
					items:3
				},				
				1000:{
					items:3
				}
			}
		  }); 	
		/*
		Magnific Popup
		============================*/ 		
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
        });		  		  
		/*
		scrollUp
		============================*/	
		$.scrollUp({
			scrollText: '<i class="fa fa-angle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});	
		/*
		Counter Js
		============================*/ 
        $('.counter').counterUp({
            delay: 10,
            time: 1000			
        }); 				
 		/*
		Stickey Header
		============================*/ 			
		$("#sticky_menu").sticky({topSpacing:0});	 
		
		/*
		Stikey Js
		============================*/ 
/* 		(function () {
			var nav = $('.mnmenu-sec');
			var scrolled = false;
			$(window).scroll(function () {
				if (120 < $(window).scrollTop() && !scrolled) {
					nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
					scrolled = true;
				}
				if (120 > $(window).scrollTop() && scrolled) {
					nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
					scrolled = false;
				}
			});
		}());	 */	
		/*
		Preeloader
		============================*/
		$(window).load(function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
		});
		
		/*
		Gallery Js
		============================*/	
		$(".gallery-container").imagesLoaded( function() {
			$(".gallery-container").isotope({
			itemSelector: '.filtr-item',
			layoutMode: 'fitRows',
			});
			$("ul.simplefilter li").on("click",function(){
			$("ul.simplefilter li").removeClass("active");
			$(this).addClass("active");
			 
			var selector = $(this).attr('data-filter');
			$(".gallery-container").isotope({
			filter: selector,
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
			}
			});
			return false;
			});
		});	
		/*
		Google map Js
		============================*/ 	
		google.maps.event.addDomListener(window, 'load', init);
	
		function init() {
			var mapOptions = {
				zoom: 11,
				center: new google.maps.LatLng(40.6700, -73.9400),
				styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
			};
			var mapElement = document.getElementById('map_id');
			var map = new google.maps.Map(mapElement, mapOptions);
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.6700, -73.9400),
				map: map,
				title: 'New York'
			});
		}	
		/*	
		Wow Js
		============================*/	
		new WOW().init();		
		
	});	
})(jQuery);

