 (function ($) {
     "use strict";

     var $constrom_window = $(window);
     var THE = {};
     var plugin_track = 'static/plugin/';

     // :: Preloader Active Code
     $constrom_window.on('load', function () {
         $('#preloader').fadeOut('slow', function () {
             $(this).remove();
         });
     });

     // ****************************
     // :: TOP Menu Active Code
     // ****************************

     $(window).on('scroll', function () {
         var scroll = $(window).scrollTop();
         if (scroll < 400) {
             $("#sticky-header").removeClass("sticky");
             $('#back-top').fadeIn(700);
         } else {
             $("#sticky-header").addClass("sticky");
             $('#back-top').fadeIn(700);
         }
     });

     // ****************************
     // :: Mobile Menu Active Code
     // ****************************

     $(window).on('scroll', function () {
         var scroll = $(window).scrollTop();
         if (scroll >= 30) {
             $(".sticky").addClass("stickyadd")
         } else {
             $(".sticky").removeClass("stickyadd")
         }
     });
     $('.navbar-nav a, .scroll_down a').on('click', function (event) {
         var $anchor = $(this);
         $('html, body').stop().animate({
             scrollTop: $($anchor.attr('href')).offset().top - 0
         }, 1500, 'easeInOutExpo');
         event.preventDefault()
     });
     $("#navbarCollapse").scrollspy({
         offset: 50
     });

     $('.js-site-nav-toggle').on('click', function (e) {

         var $this = $(this);
         e.preventDefault();



         if ($('body').hasClass('menu-open')) {
             $this.removeClass('active');
             $('.site-menu .site-menu-inner > ul > li').each(function (i) {

                 var that = $(this);
                 setTimeout(function () {
                     that.removeClass('is-show');
                 }, i * 100);

                 // $(this).removeClass('is-show');
             });

             setTimeout(function () {
                 // $('.site-menu').fadeOut(400);
                 $('.site-menu').removeClass('site-menu-show');
             }, 800);

             $('body').removeClass('menu-open');
         } else {

             // $('.site-menu').fadeIn(400);
             $('.site-menu').addClass('site-menu-show');

             $this.addClass('active');
             $('body').addClass('menu-open');

             setTimeout(function () {
                 $('.site-menu .site-menu-inner > ul > li').each(function (i) {
                     var that = $(this);
                     setTimeout(function () {
                         that.addClass('is-show');
                     }, i * 100);

                 });
             }, 500);
         }
     });


     $(document).ready(function () {

         // ********************************
         // :: One Page Nav Active Code
         // ********************************

         if ($.fn.onePageNav) {
             $('#navigation, .list-unstyled').onePageNav({
                 currentClass: 'active',
                 scrollSpeed: 1500,
                 easing: 'easeOutQuad'
             });
         }


         // *******************************
         // :: Animated Headline Active Code
         // ********************************
         if ($.fn.animatedHeadline) {
             $('.anima-headline').animatedHeadline({
                 animationType: "scale",
                 animationDelay: 2000,
                 barAnimationDelay: 3000,
                 barWaiting: 800,
                 lettersDelay: 50,
                 typeLettersDelay: 150,
                 selectionDuration: 500,
                 typeAnimationDelay: 1000,
                 revealDuration: 600,
                 revealAnimationDelay: 1500
             });
         }

         // ***********************
         // :: Scrollup Active Code
         // ***********************

         if ($.fn.scrollUp) {
             $constrom_window.scrollUp({
                 scrollSpeed: 1000,
                 scrollText: '<i class="bx bx-chevron-up"></i>'
             });
         }

         // ************************************
         // :: Hero Slides Active Code
         // ************************************
         if ($.fn.owlCarousel) {
             var heroslider = $('.hero-slider');
             heroslider.owlCarousel({
                 items: 1,
                 loop: true,
                 autoplay: true,
                 smartSpeed: 2000,
                 autoplayTimeout: 4000,
                 nav: false
             })
         }

         // ************************************
         // :: CLient Slides Active Code
         // ************************************

         if ($.fn.owlCarousel) {
             var clientArea2 = $('.client-silder-2');
             clientArea2.owlCarousel({
                 items: 3,
                 loop: true,
                 autoplay: true,
                 smartSpeed: 1500,
                 margin: 30,
                 nav: true,
                 navText: ["<i class='ti-angle-left'</i>", "<i class='ti-angle-right'</i>"],
                 dots: true,
                 responsive: {
                     0: {
                         items: 1
                     },
                     768: {
                         items: 2
                     },
                     992: {
                         items: 2
                     },
                     1200: {
                         items: 3
                     }
                 }
             });
         }

         // ************************************
         // :: Partner Slides Active Code
         // ************************************

         if ($.fn.owlCarousel) {
             var parnetArea = $('.partner-carousel');
             parnetArea.owlCarousel({
                 items: 5,
                 loop: true,
                 autoplay: true,
                 smartSpeed: 1500,
                 margin: 30,
                 dots: false,
                 responsive: {
                     0: {
                         items: 1
                     },
                     480: {
                         items: 2
                     },
                     576: {
                         items: 2
                     },
                     768: {
                         items: 3
                     },
                     992: {
                         items: 5
                     },
                 }
             });
         }


         // ****************************
         // :: Init Isotope Active Code
         // ****************************

         var $grid = $('.grid').isotope({
             itemSelector: '.grid-item',
             percentPosition: true,
             masonry: {
                 columnWidth: 1
             }
         });

         // Filter items on button click
         $('.portfolio-menu').on('click', 'button', function () {
             var filterValue = $(this).attr('data-filter');
             $grid.isotope({
                 filter: filterValue
             });
         });

         // For menu active class
         $('.portfolio-menu button').on('click', function (event) {
             $(this).siblings('.active').removeClass('active');
             $(this).addClass('active');
             event.preventDefault();
         });

         // ***************************************
         // :: 11.0 Masonary Gallery Active Code
         // ****************************************

         if ($.fn.imagesLoaded) {
             $('.reen-portfolio').imagesLoaded(function () {
                 // filter items on button click
                 $('.portfolio-menu').on('click', 'button', function () {
                     var filterValue = $(this).attr('data-filter');
                     $grid.isotope({
                         filter: filterValue
                     });
                 });
                 // init Isotope
                 var $grid = $('.reen-portfolio').isotope({
                     itemSelector: '.single_gallery_item',
                     percentPosition: true,
                     masonry: {
                         columnWidth: '.single_gallery_item'
                     }
                 });
             });
         }

         // :: allery Menu Style Active Code
         $('.portfolio-menu button.btn').on('click', function () {
             $('.portfolio-menu button.btn').removeClass('active');
             $(this).addClass('active');
         })

         // **********************
         // :: Wow js Active Code
         // **********************

         if ($constrom_window.width() > 767) {
             new WOW().init();
         }

         // *************************
         // :: Counter Up Active Code
         // *************************

         if ($.fn.counterUp) {
             $('.counter').counterUp({
                 delay: 10,
                 time: 1500
             });
         }

         // *************************
         // :: Wow Aos Active Code
         // *************************
         if ($.fn.init) {
             AOS.init();
         }

         // *************************************
         // :: MagnificPopup img view Active Code
         // *************************************

         if ($.fn.magnificPopup) {
             $('.popup-image').magnificPopup({
                 type: 'image',
                 gallery: {
                     enabled: true
                 }
             });
         }


         // *************************************
         // :: magnificPopup img view Active Code
         // *************************************

         if ($.fn.magnificPopup) {
             $('.img-pop-up').magnificPopup({
                 type: 'image',
                 gallery: {
                     enabled: true
                 }
             });
         }

         // ***************************************
         // :: 10.0 Magnific-popup Video Active Code
         // ****************************************

         if ($.fn.magnificPopup) {
             $('#videobtn').magnificPopup({
                 type: 'iframe'
             });
             $('.gallery_img').magnificPopup({
                 type: 'image',
                 gallery: {
                     enabled: true
                 },
                 removalDelay: 300,
                 mainClass: 'mfp-fade',
                 preloader: true
             });
         }

         if ($.fn.magnificPopup) {
             $('#videobtn2').magnificPopup({
                 type: 'iframe'
             });
         }
         // ****************************
         // :: Brand Slider Active Code
         // ***************************

         $('.brand-active').owlCarousel({
             loop: true,
             margin: 30,
             items: 1,
             autoplay: true,
             nav: false,
             dots: false,
             autoplayHoverPause: true,
             autoplaySpeed: 500,
             responsive: {
                 0: {
                     items: 1,
                     nav: false

                 },
                 576: {
                     items: 3
                 },
                 768: {
                     items: 4
                 },
                 992: {
                     items: 6
                 }
             }
         });

         // ******************************
         // :: Project  Slider Active Code
         // ******************************

         $('.project-active').owlCarousel({
             loop: true,
             autoplay: true,
             margin: 30,
             items: 1,
             autoplay: true,
             navText: ['<i class="Flaticon flaticon-left-arrow"></i>', '<i class="Flaticon flaticon-right-arrow"></i>'],
             nav: true,
             dots: false,
             responsive: {
                 0: {
                     items: 1,
                     nav: false

                 },
                 767: {
                     items: 1,
                     nav: false
                 },
                 992: {
                     items: 2,
                     nav: false
                 }
             }
         });
     });

     // ****************************
     // :: Jarallax Active Code
     // ****************************
     if ($.fn.jarallax) {
         $('.jarallax').jarallax({
             speed: 0.5
         });
     }

     // ****************************
     // :: Countdown Active Code
     // ****************************
     if ($.fn.countdown) {
         $("#clock").countdown("2021/06/10", function (event) {
             $(this).html(event.strftime("<div>%D <span>Day</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Mins</span></div> <div>%S <span>Secs</span></div>"));
         });
     }

     // **************************
     // :: Nice Delect Active Code
     // **************************

     if (document.getElementById('default-select')) {
         $('select').niceSelect();
     }

     // **************************
     // :: Typed Active Code
     // **************************

     $(".element").each(function () {
         var e = $(this);
         e.typed({
             strings: e.attr("data-elements").split(","),
             typeSpeed: 100,
             backDelay: 3e3
         })
     })

     // *********************************
     // :: Prevent Default 'a' Click
     // *********************************
     $('a[href="#"]').on('click', function ($) {
         $.preventDefault();
     });


 })(jQuery);