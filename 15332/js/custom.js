/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR iFIXFAST                   |||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
URL: http://www.bootstrapmb.com
01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/

"use strict";



//====Main menu===
function mainmenu() {
	//Submenu Dropdown Toggle
	if($('.main-menu li.dropdown ul').length){
		$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}
}

//===Language switcher===
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'slide',
            animSpeed: 500,
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
                }

        });
    };
}

//===Header Sticky===
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    };
}

function headerStyle() {
    if($('.header-area.style-four .header-bottom').length){
        var windowpos = $(window).scrollTop();
        var siteHeader = $('.header-area.style-four .header-bottom');
        var scrollLink = $('.scroll-to-top');
        if (windowpos > 1) {
            siteHeader.addClass('fixed-header');
            scrollLink.fadeIn(300);
        } else {
            siteHeader.removeClass('fixed-header');
            scrollLink.fadeOut(300);
        }
    }
}

//===Search box ===
function searchbox() {
	//Search Box Toggle
	if($('.seach-toggle').length){
		//Dropdown Button
		$('.seach-toggle').on('click', function() {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}
}

//  scoll to Top
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}

// ===Prealoder===
function prealoader() {
    if($('.preloader').length){
        $('.preloader').delay(2000).fadeOut(500);
    }
}

//  Fact counter
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}

function singleProductTab () {
    if($('.tabs-box').length){
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')){
                return false;
            }else{
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }
}



//=== Thm scroll anim===
function thmScrollAnim() {
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    };
}



//  Price Filter
function priceFilter() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 10,
            max: 200,
            values: [11, 99],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}



//Accordion Box
function accordion() {
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.accord-btn', function() {

            if($(this).hasClass('active')!==true){
            $('.accordion .accord-btn').removeClass('active');

            }

            if ($(this).next('.accord-content').is(':visible')){
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            }else{
                $(this).addClass('active');
                $('.accordion .accord-content').slideUp(500);
                $(this).next('.accord-content').slideDown(500);	
            }
        });	
    }
}





//Accordions
if($('.accordion-holder').length){
    $('.accordion-holder .acc-btn').on('click', function() {
    if($(this).hasClass('active')!==true){
            $('.accordion-holder .acc-btn').removeClass('active');
        }

    if ($(this).next('.acc-content').is(':visible')){
            $(this).removeClass('active');
            $(this).next('.acc-content').slideUp(500);
        }
    else{
            $(this).addClass('active');
            $('.accordion-holder .acc-content').slideUp(500);
            $(this).next('.acc-content').slideDown(500);	
        }
    });
}
	


// Cart Touch Spin
function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}



// Date picker
function datepicker () {
    if ($('#datepicker').length) {
        $('#datepicker').datepicker();
    };
}



// Time picker
function timepicker () {
    $('input[name="time"]').ptTimeSelect();
}



//=== Tool tip ===
function tooltip () {
	if ($('.tool_tip').length) {
			$('.tool_tip').tooltip();
		};
	$
}



// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }
    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');
            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;
        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');
        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;
            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };  
}



//=== CountDownTimer===
function countDownTimer () {
	if ($('.time-countdown').length) {
		$('.time-countdown').each(function () {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date

			Self.countdown(countDate, function(event) {
	     		$(this).html('<h2>'+ event.strftime('%D : %H : %M : %S') +'</h2>');
	   		});
		});
	};
    
	if ($('.time-countdown-two').length) {
		$('.time-countdown-two').each(function () {
			var Self = $(this);
			var countDate = Self.data('countdown-time'); // getting date

			Self.countdown(countDate, function(event) {
	     		$(this).html('<li> <div class="box"> <span class="days">'+ event.strftime('%D') +'</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">'+ event.strftime('%H') +'</span> <span class="timeRef clr-1">hrs</span> </div> </li> <li> <div class="box"> <span class="minutes">'+ event.strftime('%M') +'</span> <span class="timeRef clr-2">mins</span> </div> </li> <li> <div class="box"> <span class="seconds">'+ event.strftime('%S') +'</span> <span class="timeRef clr-3">secs</span> </div> </li>');
	   		});
		});
	};
}



function countryInfo() {
    if ($('.area_select').length) {
        $('.area_select').change(function() {
            var val = $(this).val();
            if (val) {
                $('.state:not(#value' + val + ')').slideUp();
                $('#value' + val).slideDown();
            } else {
                $('.state').slideDown();
            }
        });
    }
}



// Select menu 
function selectDropdown() {
    if ($(".selectmenu").length) {
        $(".selectmenu").selectmenu();

        var changeSelectMenu = function(event, item) {
            $(this).trigger('change', item);
        };
        $(".selectmenu").selectmenu({ change: changeSelectMenu });
    };
}



//=== Repair Carousel ===
function repairCarousel () {
    if ($('.repair-carousel').length) {
        $('.repair-carousel').owlCarousel({
            dots: false,
            loop:true,
            margin:0,
            nav:false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:3
                },
                1100:{
                    items:4
                },
                1200:{
                    items:4
                }
            }
        });    		
    }
}



//=== latest Blog Carousel ===
function latestBlogCarousel () {
    if ($('.latest-blog-carousel').length) {
        $('.latest-blog-carousel').owlCarousel({
            dots: true,
            loop:true,
            margin:30,
            nav:false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1100:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });    		
    }
}



//=== Testimonial Carousel===
function singleitemTestimonialcarousel () {
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            dots: false,
            loop:true,
            margin:135,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}



//=== About Content Carousel===
function aboutContentCarousel () {
    if ($('.about-content-carousel').length) {
        $('.about-content-carousel').owlCarousel({
            dots: true,
            loop:true,
            margin:135,
            nav:false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1100:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });    		
    }
}
















// Product Carousel Slider
if ($('.history-carousel .content-carousel').length && $('.history-carousel .thumbs-carousel').length) {

    var $sync3 = $(".history-carousel .content-carousel"),
        $sync4 = $(".history-carousel .thumbs-carousel"),
        flags = false,
        durations = 500;

        $sync3
            .owlCarousel({
                loop:true,
                items: 1,
                margin: 0,
                nav: false,
                navText: [ '<span class="icon flaticon-left-arrow-1"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000
            })
            .on('changed.owl.carousel', function (e) {
                if (!flags) {
                    flags = false;
                    $sync4.trigger('to.owl.carousel', [e.item.index, durations, true]);
                    flags = false;
                }
            });

        $sync4
            .owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav: false,
                navText: [ '<span class="icon flaticon-left-arrow-1"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
                dots: false,
                center: false,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0:{
                        items:1,
                        autoWidth: false
                    },
                    400:{
                        items:1,
                        autoWidth: false
                    },
                    600:{
                        items:1,
                        autoWidth: false
                    },
                    900:{
                        items:1,
                        autoWidth: false
                    },
                    1000:{
                        items:1,
                        autoWidth: false
                    }
                },
            })

    .on('click', '.owl-item', function () {
        $sync3.trigger('to.owl.carousel', [$(this).index(), durations, true]);
    })
    .on('changed.owl.carousel', function (e) {
        if (!flags) {
            flags = true;		
            $sync3.trigger('to.owl.carousel', [e.item.index, durations, true]);
            flags = false;
        }
    });

}





//Hidden Sidebar
if ($('.hidden-bar').length) {
    var hiddenBar = $('.hidden-bar');
    var hiddenBarOpener = $('.hidden-bar-opener');
    var hiddenBarCloser = $('.hidden-bar-closer');
    var navToggler = $('.nav-toggler');
    $('.hidden-bar-wrapper').mCustomScrollbar();

    //Show Sidebar
    hiddenBarOpener.on('click', function () {
        hiddenBar.toggleClass('visible-sidebar');
        navToggler.toggleClass('open');
    });

    //Hide Sidebar
    hiddenBarCloser.on('click', function () {
        hiddenBar.toggleClass('visible-sidebar');
        navToggler.toggleClass('open');
    });
}
    
    
	
if ($('.client-box').length) {
    $('.client-box').owlCarousel({
        loop:true,
        margin:25,
        dots:false,
        nav:true,
        smartSpeed: 500,
        center: true,
        autoplay: 4000,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            900:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });    		
}



if ($('.single-service-slider .bxslider').length) {
	$('.single-service-slider .bxslider').bxSlider({
        nextSelector: '.single-service-slider #slider-next',
        prevSelector: '.single-service-slider #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '7000',
        pagerCustom: '.single-service-slider .slider-pager .thumb-box'
    });
};


//LightBox / Fancybox
if($('.lightbox-image').length) {
    $('.lightbox-image').fancybox({
        openEffect  : 'fade',
        closeEffect : 'fade',
        helpers : {
            media : {}
        }
    });
}




//Contact Form Validation
if($("#contact-form").length){
    $("#contact-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}


// Add Comment Form Validation
if($("#add-comment-form").length){
    $("#add-comment-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}



// Appoinment Form Validation
if($("#appoinment-form").length){
    $("#appoinment-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}



	


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
        mainmenu ();
        languageSwitcher ();
        searchbox ();
        scrollToTop ();
        CounterNumberChanger ();
        singleProductTab ();
        thmScrollAnim ();
        priceFilter ();
        accordion ();
        cartTouchSpin ();
        selectDropdown ();
        datepicker ();
        timepicker ();
        tooltip ();
        countDownTimer ();
        projectMasonaryLayout ();
        countryInfo ();
        
        repairCarousel ();
        latestBlogCarousel ();
        singleitemTestimonialcarousel ();
        aboutContentCarousel ();
       

  
        
        
   
 
	})(jQuery);
});



jQuery(window).on('scroll', function(){
	(function ($) {
	stickyHeader ();
    headerStyle ()  
    
	})(jQuery);
});



// Instance Of Fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        prealoader ();
        
    })(jQuery);
});

