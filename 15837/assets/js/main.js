/*
  Theme Name: Archipix | Architecture & Interior HTML Template
  Author: Capricorn_Theme
  Creation Date: 15 Sept 2020
  Version: 1.0
*/

/* [Table of Contents]

* 01. Mobile Menu 

  02. Owl Caserol
        - Hero Area Slider
        - Testimonial Slider
        - Testimonial Slider#2
		- Service Slider 
		- Portfolio Slider
  03. Isotope 
  04. Counter Up 
  05. Wow Animation 
  06. Sticky Area 
  07. Scroll to the Top
  08. Active & Remove Class
  09. Menu Active Color
  10. Preloader 

*/

(function ($) {
	"use strict";

	// 01. Mobile Menu

	$(".navbar-toggler").on("click", function () {
		$(this).toggleClass("active");
	});

	$(".navbar-nav li a").on("click", function () {
		$(".sub-nav-toggler").removeClass("active");
	});

	var subMenu = $(".navbar-nav .sub-menu");

	if (subMenu.length) {
		subMenu
			.parent("li")
			.children("a")
			.append(function () {
				return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
			});

		var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

		subMenuToggler.on("click", function () {
			$(this).parent().parent().children(".sub-menu").slideToggle();
			return false;
		});
	}

	//Hero Area Slider

	$('.homepage-slides').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 2000,
		slideSpeed: 600,
		navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: false,
			},
			600: {
				items: 1,
				nav: false,
				dots: false,
			},
			768: {
				items: 1,
				nav: false,
				dots: false,
			},
			1100: {
				items: 1,
				nav: true,
				dots: false,
			}
		}
	});


	$(".homepage-slides").on("translate.owl.carousel", function () {
		$(".single-slide-item h1").removeClass("animated fadeInUp").css("opacity", "1");
		$(".single-slide-item h6").removeClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item p").removeClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item a.main-btn").removeClass("animated fadeInDown").css("opacity", "1");
	});

	$(".homepage-slides").on("translated.owl.carousel", function () {
		$(".single-slide-item h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".single-slide-item h6").addClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item a.main-btn").addClass("animated fadeInDown").css("opacity", "1");
	});


	// Testimonial Carousel # 01

	$(".team-carousel").owlCarousel({
		items: 1,
		margin: 30,
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			575: {
				items: 1,
				nav: false,
				dots: false,
			},

			767: {
				items: 2,
				nav: false,
			},

			990: {
				items: 2,
				loop: true,
			},
			1200: {
				items: 3,
				dots: true,
				loop: true,
			},
		},
	});

	// Testimonial Carousel # 02

	$(".testimonial-carousel").owlCarousel({
		items: 1,
		margin: 30,
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		smartSpeed: 3000,
		slideSpeed: 600,
		responsiveClass: true,
		responsive: {
			575: {
				items: 1,
				nav: false,
				dots: false,
			},

			767: {
				items: 1,
				nav: false,
			},

			990: {
				items: 1,
				loop: true,
			},
			1200: {
				items: 1,
				dots: true,
				loop: true,
			},
		},
	});

	// Service Slider    
	$(".service-slider").owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: false,
		smartSpeed: 3000,
		autoHeight: false,
		touchDrag: true,
		mouseDrag: true,
		margin: 30,
		autoplay: true,
		slideSpeed: 600,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: false,
			},
			600: {
				items: 1,
				nav: false,
				dots: false,
			},
			768: {
				items: 1,
				nav: false,
				dots: false,
			},
			1100: {
				items: 1,
				nav: false,
				dots: true,
			}
		}
	});

	// Project Slider
	$(".project-slider").owlCarousel({
		loop: true,
		items: 1,
		dots: false,
		nav: true,
		smartSpeed: 3000,
		autoHeight: false,
		touchDrag: true,
		mouseDrag: true,
		margin: 30,
		autoplay: true,
		slideSpeed: 600,
		navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: false,
			},
			600: {
				items: 1,
				nav: false,
				dots: false,
			},
			768: {
				items: 1,
				nav: false,
				dots: false,
			},
			1100: {
				items: 1,
				nav: true,
				dots: false,
			},
		},
	});

	// Clients Slider
	$("#clients-slider").owlCarousel({
		loop: true,
		items: 5,
		dots: false,
		nav: false,
		smartSpeed: 700,
		autoHeight: false,
		touchDrag: true,
		mouseDrag: true,
		margin: 30,
		autoplay: true,
		slideSpeed: 600,
		responsive: {
			0: {
				items: 2,
				nav: false,
				dots: false,
			},
			600: {
				items: 2,
				nav: false,
				dots: false,
			},
			768: {
				items: 3,
				nav: false,
				dots: false,
			},
			1100: {
				items: 5,
				nav: false,
				dots: false,
			},
		},
	});


	//Isotope Filter

	$(".port-menu li").on("click", function () {
		var selector = $(this).attr("data-filter");

		$(".port-menu li").removeClass("active");

		$(this).addClass("active");

		$(".portfolio-list").isotope({
			filter: selector,
			percentPosition: true,
		});
	});

	//Counter Up

	$(".counter-number span").counterUp({
		delay: 10,
		time: 1000,

	});

	//Wow Animation  
	new WOW().init(

	);

	//Sticky Area 
	$('.sticky-area').sticky({
		topSpacing: 0,
	});

	// SCROLLTO THE TOP

	// Show or hide the sticky footer button
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 6000) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});


	// Animate the scroll to top
	$('.go-top').on("click", function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 1500);
	});


	// Active & Remove Class 

	$(".single-price-item").on("mouseover", function () {
		$(".single-price-item").removeClass("active");
		$(this).addClass("active");
	});


	// Menu Active Color 

	$(".main-menu .navbar-nav .nav-link").on("mouseover", function () {
		$(".main-menu .navbar-nav .nav-link").removeClass("active");
		$(this).addClass("active");
	});


	// Preloader
	setTimeout(function () {
		$("#loader").fadeOut(200);
	}, 200);


	$(window).on('load', function () {
		$(".portfolio-list").isotope({
			layoutMode: "masonry",
		});
	});

	jQuery(window).on("load", function () {
		jQuery(".site-preloader-wrap, .slide-preloader-wrap").fadeOut(1000);
	});

}(jQuery));
