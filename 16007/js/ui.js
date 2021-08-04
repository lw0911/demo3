$(window).on('load', function(){
    //Preloader
    setTimeout(function(){
        $('.preloader-anim').removeClass("la-animate");
    }, 600);

    setTimeout(function(){
        $('.preloader').fadeOut(500);
    }, 800);
});

var originalText = $(".loading-anim").text(),
    i  = 0;
setInterval(function() {

    $(".loading-anim").append(".");
    i++;

    if(i == 4)
    {
        $(".loading-anim").html(originalText);
        i = 0;
    }

}, 400);

function id(identifier) {
    return document.getElementById(identifier);
};

var wrap_content =      id('wrap-content'),
    overlay =           id('overlay'),

    wrap_menu =         id('wrap-menu'),
    menu_btn_open =     id('menu-btn-open'),
    menu_btn_close =    id('menu-btn-close'),
    menu =              id('menu'),
    menu_span =         menu.querySelectorAll('span'),
    menu_li =           menu.querySelectorAll('li'),
    menu_btn_back =     id('menu-btn-back'),

    backet =            id('backet'),
    backet_btn =        id('backet-btn'),

    email_btn =         id('email-btn'),
    email_content =     id('email-content'),

    message_btn =         id('message-btn'),
    message_content =     id('message-content');

var ui = {
    menu: {
        active: function() {
            wrap_content.classList.add('menu-active');
            wrap_menu.classList.add('active');
        },
        passive: function() {
            wrap_content.classList.remove('menu-active');
            wrap_menu.classList.remove('active');
        },
        sub: {
            active: function() {
//                wrap_content.classList.add('menu-active');
//                wrap_menu.classList.add('active');
            },
            passive: function() {
//                wrap_content.classList.remove('menu-active');
//                wrap_menu.classList.remove('active');
            }
        }
    },
    backet: {
        toggle: function() {
            backet.classList.toggle('active');
        },
        passive: function() {
            backet.classList.remove('active');
        }
    },
    email: {
        toggle: function() {
            email_btn.classList.toggle('active');
            email_content.classList.toggle('active');
          $(".mail-content .unit img").toggleClass("animated bounceIn");
          $(".mail-content .unit p").toggleClass("animated slideInRight");
        },
        passive: function() {
            email_btn.classList.remove('active');
            email_content.classList.remove('active');
        }
    },
    message: {
        toggle: function() {
            message_btn.classList.toggle('active');
            message_content.classList.toggle('active');
          $(".message-content .unit span").toggleClass("animated bounceIn");
          $(".message-content .unit p").toggleClass("animated slideInRight");
        },
        passive: function() {
            message_btn.classList.remove('active');
            message_content.classList.remove('active');
        }
    },
    overlay: {
        active: function() {
            overlay.classList.add('active');
        },
        passive: function() {
            overlay.classList.remove('active');
        }
    }
};

$(document).ready(function() {
    //nicescroll
    //$("html").niceScroll();



    //menu
    menu_btn_open.onclick = function(){
        ui.menu.active();
        ui.overlay.active();
    };
    menu_btn_close.onclick = function(){
        ui.menu.passive();
        ui.overlay.passive();
    };

    //alert(menu_span.toArray);
    for (var i=0; i<menu_span.length; i++) {
        menu_span[i].addEventListener('click', function(){
            menu.classList.add('sub-active');
            this.parentNode.classList.add('active');
        });
    };

    menu_btn_back.onclick = function() {
        menu.classList.remove('sub-active');
        for (var i=0; i<menu_li.length; i++) {
            menu_li[i].classList.remove('active');
        }
    };

    //email
    email_btn.onclick = function(){
        ui.email.toggle();
        ui.message.passive();
        ui.backet.passive();
    }

    //message
    message_btn.onclick = function(){
        ui.message.toggle();
        ui.email.passive();
        ui.backet.passive();
    }

    //backet
    backet_btn.onclick = function(){
        ui.backet.toggle();
        ui.email.passive();
        ui.message.passive();
    }

    $("#backet .btn-close").on('click', function () {
        var thiss = $(this);
        swal({
                title: "Are you sure?",
                type: "warning",
                showCancelButton: true,
                //confirmButtonClass: "btn-danger",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function(isConfirm) {
                if (isConfirm) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    deleteProduct();
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            });
      function deleteProduct() {
        thiss.parent().remove();
      }
    });







    //overlay
    overlay.onclick = function(){
        ui.overlay.passive();
        ui.menu.passive();
    };

    $(".message-content .clear-all").click(function(){
        $(".message-content .unit").addClass("animated fadeOutRight");
        setTimeout(function(){
          $(".check-ok").fadeIn(200);
        }, 1000)
    });
    //btn follow

    $(".id-btn-follow").click(function() {
        if ($(this).hasClass('checked')) {
            $(this).removeClass('checked').addClass('unchecked').text('Unfollow');
        } else if ($(this).hasClass('unchecked')) {
            $(this).removeClass('unchecked').text('Follow');
        } else {
            $(this).addClass('checked').text('Followed');
        }
    });

    //btn toggle
    $(".toggle").click(function(){
        $(this).toggleClass("toggle-left, toggle-right");
    });

    //btn setting / btn popup
    $(".setting-btn").click(function(){
        $(this).next(".setting-popup").toggleClass("active");
    });

    // col height

    if ($(document).width() >= 992) {
        $('.row[data-height]').each(function (i, e) {
            var h = 0;
            var col = $(e).find('[data-height-col]');

            setTimeout(function () {
                $(col).each(function (ii, ee) {
                    if (h < $(ee).innerHeight()) {
                        h = $(ee).innerHeight();
                    }
                });
                $(col).each(function (i3, e3) {
                    $(e3).innerHeight(h);
                });
            }, 10);
        });
    }
});

// input core
(function() {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
                return this.replace(rtrim, '');
            };
        })();
    }

    [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
        // in case the input is already filled..
        if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
        }

        // events:
        inputEl.addEventListener( 'focus', onInputFocus );
        inputEl.addEventListener( 'blur', onInputBlur );
    } );

    function onInputFocus( ev ) {
        classie.add( ev.target.parentNode, 'input--filled' );
    }

    function onInputBlur( ev ) {
        if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
        }
    }
})();

// slider core
(function($){
    jQuery.fn.slider = function (config){
        config = $.extend({
            //active:1,
            //swipeSupport : false,
            // navigation: true,
            // array: false
        },config);

        var doSlider = function(){
            var $this = $(this);

        };
        return this.each(doSlider);
    }

  })(jQuery);

  if($(window).width() < 481){
    $("body").addClass("mobile-view");
  }
  else{
    $("body").removeClass("mobile-view");
  }
$(window).resize(function(){
  if($(window).width() < 481){
    $("body").addClass("mobile-view");
  }
  else{
    $("body").removeClass("mobile-view");
  }
});


  $(".morphsearch-content").css("height", $(document).height() + "px");

  $(".toggle-fixed").click(function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      $("body").removeClass("fixed");
      if (localStorageSupport) {
        localStorage.setItem("fixNav",'off');
      }
    }else{
      $(this).addClass("active");
      $("body").addClass("fixed");
      if (localStorageSupport) {
        localStorage.setItem("fixNav",'on');
      }
    }
  });



  $('[data-toggle="tooltip"]').tooltip();


    if (localStorageSupport) {

        var fixNav = localStorage.getItem("fixNav");

        if (fixNav == 'on') {
          $('body').addClass("fixed");
          $('.toggle-fixed').addClass("active");
        }

        if (fixNav == 'off') {
          $('body').removeClass("fixed");
          $('.toggle-fixed').removeClass("active");
        }
    }

    // check if browser support HTML5 local storage
    function localStorageSupport() {
        return (('localStorage' in window) && window['localStorage'] !== null)
    }


if($("body").hasClass("fixed")){
      $(".backet-title").empty();
    }
