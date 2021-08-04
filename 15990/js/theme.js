/**
 *
 * This file contains all theme JS functions
 *
 * @package 
 */
 

/*======== Preloader =======*/

function fixelo_loader()
{
  $( window ).on('load', function()  { 

    $('.status').fadeOut();

    $('.preloader').delay(350).fadeOut('slow'); 

  }); 
}

/* ===== Menu =====*/

function fixelo_menu()
{
  "use strict";
   var menu = $("#menu");
   var toggle = $("#tgt-menu-box-toggle");
   var submenu = $(".has-submenu > a");

    toggle.on("click", function(e) {
        toggle.toggleClass("active");
        menu.toggleClass("active");
    });    

    submenu.on("click", function(e) {
          e.preventDefault();
         $(this).toggleClass("active").next("ul").toggleClass("active");
         
    });    
}

/*======== Owl Carousel ========*/

function fixelo_owlCarousel_slider()
{

    $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,      
      autoplayTimeout: 9000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
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


    $(".owl-testiomonal").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,      
      autoplayTimeout: 9000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
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

    $(".owl-testiomonal2").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,      
      autoplayTimeout: 9000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
          },
        600: {
            items: 1,
            nav: false,
        },
        768: {
            items: 1,
            nav: true,
        },
        1100: {
            items: 2,
            nav: true,
            dots: false,
        }
      }
    });

    $(".owl-client").owlCarousel({
          loop: true,
          items: 1,
          dots: false,
          nav: false,      
          autoplayTimeout: 9000,
          smartSpeed: 2000,
          autoHeight: false,
          touchDrag: true,
          mouseDrag: true,
          margin: 10,
          autoplay: true,
          slideSpeed: 600,
          responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            768: {
                items: 3,
            },
            1100: {
                items: 3,
            }
          }
        });    

    $(".owl-client2").owlCarousel({
          loop: true,
          items: 1,
          dots: false,
          nav: false,      
          autoplayTimeout: 9000,
          smartSpeed: 2000,
          autoHeight: false,
          touchDrag: true,
          mouseDrag: true,
          margin: 0,
          autoplay: true,
          slideSpeed: 600,
          responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 2,
            },
            768: {
                items: 4,
            },
            1100: {
                items: 5,
            }
          }
        });  
}

/*======== Project Slider and Filter Carousel ========*/
function fixelo_project_slider_filter()
{
  var owlproject = $(".owl-project").owlCarousel({
      loop: false,
      items: 2,
      dots: false,
      nav: false,      
      autoplayTimeout: 9000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
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
            items: 2,
            nav: false,
            dots: false,
        },
        1100: {
            items: 2,
            nav: false,
            dots: false,
        }
      }
    });

    // Projects Filter
    $(function() {
        var selectedClass = "";
        $(".fil-category").on('click', function() {
            selectedClass = $(this).attr("data-rel");
            $("#projects-gallery").fadeTo(100, 0.1);
            $("#projects-gallery .projects-gallery-block").not("." + selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass('scale-anm');
                $("#projects-gallery").fadeTo(300, 1);
            }, 300);
        });
    });


  $('.project-filter' ).on( 'click', '.fil-cat', function() {

      var $item = $(this);
      var filter = $item.data( 'owl-filter' )

      owlproject.owlcarousel2_filter( filter );

  } );
}



/* ===== Sticky =====*/

function fixelo_sticky()
{
   "use strict";
  if ($('.tgt-header').length) {
      $(window).scroll(function() {

        var scroll_to = 100,$back_header = $(".tgt-header-sticky");
        ($(this).scrollTop() > scroll_to) ? $back_header.addClass('sticky-top-header',3000): $back_header.removeClass('sticky-top-header',3000);
      });
  }
}

/* ===== Youtube popup =====*/

function fixelo_popup_youtube()
{
  if ($('.popup-youtube').length) {

      $('.popup-youtube').magnificPopup({
          type: 'iframe',
          iframe: {
              patterns: {
                 youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
                }
              }
          }
        });
  }

}


/* ===== Back to top =====*/

function fixelo_back_to_top()
{
    "use strict";
      // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 400,

        //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.tgt-top');

      //hide or show the "back to top" link
      $(window).scroll(function() {
          ($(this).scrollTop() > offset) ? $back_to_top.addClass('tgt-top-is-visible',3000): $back_to_top.removeClass('tgt-top-is-visible',3000);
      });

      //smooth scroll to top
      $back_to_top.on('click', function(event) {
          event.preventDefault();
          $('body,html').animate({
              scrollTop: 0,
          }, scroll_top_duration);
     });

}

/* ---------------------------------------------
 Document ready function
 --------------------------------------------- */
$(document).on('ready', function() {

    "use strict";
    fixelo_loader();
    fixelo_menu();
    fixelo_owlCarousel_slider();
    fixelo_project_slider_filter();
    fixelo_sticky();
    fixelo_popup_youtube();
    fixelo_back_to_top();
});