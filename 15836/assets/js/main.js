(function ($) {
  "user strict";
  // Preloader Js
  $(window).on('load', function () {
    $('.overlayer').fadeOut(1000);
    var img = $('.bg_img');
    img.css('background-image', function () {
      var bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });
    var $gallery = $(".gallery-area");
    $gallery.isotope({
      itemSelector: '.gallery-item',
      masonry: {
        columnWidth: 1,
      }
    });
     // filter functions
     var $grid = $(".project-area");
     var filterFns = {};
     $grid.isotope({
       itemSelector: '.project-item',
       masonry: {
         columnWidth: 0,
       }
     });
     // bind filter button click
     $('ul.filter').on('click', 'li', function () {
       var filterValue = $(this).attr('data-check');
       // use filterFn if matches value
       filterValue = filterFns[filterValue] || filterValue;
       $grid.isotope({
         filter: filterValue
       });
     });
     // change is-checked class on buttons
     $('ul.filter').each(function (i, buttonGroup) {
       var $buttonGroup = $(buttonGroup);
       $buttonGroup.on('click', 'li', function () {
         $buttonGroup.find('.active').removeClass('active');
         $(this).addClass('active');
       });
     });
  });
  $(document).ready(function () {
    $('.select-bar').niceSelect();
    // PoPuP 
    $('.popup').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      disableOn: 300
    });
    $("body").each(function () {
      $(this).find(".img-pop").magnificPopup({
        type: "image",
        gallery: {
          enabled: true
        }
      });
    });
    // aos js active
    new WOW().init()
    //Faq
    $('.faq-wrapper .faq-title, .faq-wrapper-two .faq-title-two').on('click', function (e) {
      var element = $(this).parent('.faq-item, .faq-item-two');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faq-content, .faq-content-two').removeClass('open');
        element.find('.faq-content, .faq-content-two').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('.faq-content, .faq-content-two').slideDown(300, "swing");
        element.siblings('.faq-item, .faq-item-two').children('.faq-content, .faq-content-two').slideUp(300, "swing");
        element.siblings('.faq-item, .faq-item-two').removeClass('open');
        element.siblings('.faq-item, .faq-item-two').find('.faq-title, .faq-title-two').removeClass('open');
        element.siblings('.faq-item, .faq-item-two').find('.faq-content, .faq-content-two').slideUp(300, "swing");
      }
    });
    //Menu Dropdown Icon Adding
    $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').hover(function () {
      var menu = $(this).find("ul");
      var menupos = $(menu).offset();
      if (menupos.left + menu.width() > $(window).width()) {
        var newpos = -$(menu).width();
        menu.css({
          left: newpos
        });
      }
    });
    $('.menu li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    $('.widget-tags ul li a').on('click', function (e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp(300, "swing");
      } else {
        element.addClass('open');
        element.children('ul').slideDown(300, "swing");
        element.siblings('li').children('ul').slideUp(300, "swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp(300, "swing");
      }
    })
    // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
      } else {
        scrollTop.addClass("active");
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
    // Header Bar
    $('.header-bar').on('click', function () {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu').toggleClass('active');
    })
    // Header Bar
    $('.header-bar2').on('click', function () {
      $(this).toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.header-wrapper').toggleClass('active');
    })
    //Header Bar
    $('.overlay').on('click', function () {
      $(this).removeClass('active');
      $('.header-bar').removeClass('active');
      $('.header-bar2').removeClass('active');
      $('.header-wrapper').removeClass('active');
      $('.menu').removeClass('active');
    })
    //MenuBar
    $('.search-bar').on('click', function () {
      $(".search-form-area").addClass("active");
    });
    $('.hide-form').on('click', function () {
        $(".search-form-area").removeClass("active");
    });
    //Header
    var fixed_top = $("header");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1) {
        fixed_top.addClass("active animated fadeInUp");
      } else {
        fixed_top.removeClass("active animated fadeInUp");
      }
    });
    //Odometer
    $(".counter-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    }); 
    //Tab Section
    // $('.tab ul.tab-menu').addClass('active').find('> li:eq(0)').addClass('active');
    $('.tab ul.tab-menu li').on('click', function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();
      tab.find('li').siblings('li').removeClass('active');
      $(this).closest('li').addClass('active');
      tab.find('.tab-area').find('div.tab-item').not('div.tab-item:eq(' + index + ')').slideUp(600);
      tab.find('.tab-area').find('div.tab-item:eq(' + index + ')').slideDown(600);
      g.preventDefault();
    });
     //Sponsor Slider 
     $('.sponsor-slider').owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      nav: false,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:2,
          },
          480:{
              items:3,
          },
          768:{
              items:4,
          },
          992:{
              items:5,
          }
      }
    })
    //Company Slider
    $('.company-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay:false,
      margin: 30,
      responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        }
    }
    });
    var owlC = $('.company-slider');
    owlC.owlCarousel();
    // Go to the next item
    $('.slider-prev').on('click', function() {
        owlC.trigger('prev.owl.carousel');
    })
    $('.slider-next').on('click', function() {
        owlC.trigger('next.owl.carousel');
    })
    //Company Slider
    $('.client-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay:false,
      margin: 30,
      responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        }
    }
    });
    var owlCl = $('.client-slider');
    owlCl.owlCarousel();
    // Go to the next item
    $('.slider-prev').on('click', function() {
        owlCl.trigger('prev.owl.carousel');
    })
    $('.slider-next').on('click', function() {
        owlCl.trigger('next.owl.carousel');
    })
    //Service Slider
    $('.service-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay:false,
      margin: 30,
      center: true,
      responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        }
    }
    });
    var owlService = $('.service-slider');
    owlService.owlCarousel();
    // Go to the next item
    $('.slider-prev').on('click', function() {
        owlService.trigger('prev.owl.carousel');
    })
    $('.slider-next').on('click', function() {
        owlService.trigger('next.owl.carousel');
    })
    //Widget Slider
    $('.banner-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: true,
      items:1,
      autoplay:true,
      margin: 0,
      autoplayTimeout: 3000,
      autoHeight: true,
      // mouseDrag: false,
      // touchDrag: false,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      animateOut: 'slideOutUp',
      animateIn: 'slideInDown',
    });
    //Service Slider
    $('.feature-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay:false,
      margin: 30,
      responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        }
    }
    });
    $('#view-pass-01').on('click', function () {
      var x = document.getElementById("pass01");
      if (x.type === "password") {
        x.type = "text";
        $('#view-pass-01 .fa-eye').addClass('fas fa-eye-slash');
        $('#view-pass-01 .fa-eye').removeClass('far fa-eye');
      } else {
        x.type = "password";
        $('#view-pass-01 .fa-eye-slash').addClass('far fa-eye');
        $('#view-pass-01 .fa-eye-slash').removeClass('fas fa-eye-slash');
      }
    });
    $('#view-pass-02').on('click', function () {
      var x = document.getElementById("pass02");
      if (x.type === "password") {
        x.type = "text";
        $('#view-pass-02 .fa-eye').addClass('fas fa-eye-slash');
        $('#view-pass-02 .fa-eye').removeClass('far fa-eye');
      } else {
        x.type = "password";
        $('#view-pass-02 .fa-eye-slash').addClass('far fa-eye');
        $('#view-pass-02 .fa-eye-slash').removeClass('fas fa-eye-slash');
      }
    });
    // shop cart + - start here
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    // reference for main items
    var slider = $('#slider');
    // reference for thumbnail items
    var thumbnailSlider = $('#thumbnailSlider');
    //transition time in ms
    var duration = 500;

    // carousel function for main slider
    slider.owlCarousel({
    loop:false,
    nav:false,
    items:1
    }).on('changed.owl.carousel', function (e) {
    //On change of main item to trigger thumbnail item
    thumbnailSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
    });
    // carousel function for thumbnail slider
    thumbnailSlider.owlCarousel({
    loop:false,
    center:true,
    nav:false,
    margin: 30,
    responsive:{
      0:{
      items:1
      },
      320:{
      items:2
      },
      500:{
      items:3
      }
    }
    }).on('click', '.owl-item', function () {
    // On click of thumbnail items to trigger same main item
    slider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    }).on('changed.owl.carousel', function (e) {
    // On change of thumbnail item to trigger main item
    slider.trigger('to.owl.carousel', [e.item.index, duration, true]);
    });
    // $('.header-bar').on('click', function (e) {
    //   var headerBar = $('.header-bar');
    //   var menu = $('.menu');
    //   if (headerBar.hasClass('active')) {
    //     headerBar.removeClass('active');
    //     menu.slideUp(300, "swing");
    //   } else {
    //     headerBar.addClass('active');
    //     menu.slideDown(300, "swing");
    //   }
    // });
    // $('.header-bar2').on('click', function (e) {
    //   var headerBar2 = $('.header-bar2');
    //   var menu2 = $('.header-wrapper');
    //   if (headerBar2.hasClass('active')) {
    //     headerBar2.removeClass('active');
    //     menu2.slideUp(300, "swing");
    //   } else {
    //     headerBar2.addClass('active');
    //     menu2.slideDown(300, "swing");
    //   }
    // });
  });
})(jQuery);
