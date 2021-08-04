//========================
//Main slider
//========================
$(document).ready(function (){
  var slideHeight = $(window).height();
  $('#slider .item').css('height',slideHeight);

  $(window).resize(function(){'use strict',
    $('#slider .item').css('height',slideHeight);
  });

});



//========================
//HAPPYNESS SECTION NUMBER ANIMATE START
//========================
$(document).ready(function () {

    $('#herobg').height($(window).height());
    
    $('#funFact').waypoint(function() {
        $({countNum: $('#fact-one').text()}).animate({countNum: $('#fact-one').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#fact-one').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#fact-one').text(this.countNum);
            }
        });

        $({countNum: $('#fact-two').text()}).animate({countNum: $('#fact-two').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#fact-two').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#fact-two').text(this.countNum);
            }
        });

        $({countNum: $('#fact-three').text()}).animate({countNum: $('#fact-three').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#fact-three').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#fact-three').text(this.countNum);
            }
        });

        $({countNum: $('#fact-four').text()}).animate({countNum: $('#fact-four').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#fact-four').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#fact-four').text(this.countNum);
            }
        });
    }, { offset: $(window).height()});

});


//========================
//CUSTOM SCROLLBAR
//========================
$(document).ready(
    function () {
        $("body").niceScroll({
            mousescrollstep: 70,
            cursorcolor: "gray",
            cursorwidth: "6px",
            cursorborderradius: "5px",
            cursorborder: "none",
        });
    }
);


//========================
//SMOOTHSCROLL
//========================
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//========================
//PARALLAX
//========================
$(document).ready(function () {
    // cache the window object
    $window = $(window);

    $('section[data-type="background"]').each(function () {
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function () {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards                             
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = '80% ' + yPos + 'px';

            // move the background
            $scroll.css({
                backgroundPosition: coords
            });
        }); // end window scroll
    }); // end section function
}); // close out script


document.createElement("section"); //FOR IE


//========================
//MIXITUP
//========================
$(function () {
    $('#Container').mixItUp();
});


//========================
//MAGNIFIC POPUP
//========================

// Image popups
$('.image-link').magnificPopup({
    delegate: 'a',
    type: 'image',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            // just a hack that adds mfp-anim class to markup 
            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});


//========================
//OWN CAROUSEL
//========================
$(document).ready(function () {

    $("#testimonial-carousel").owlCarousel({        
        paginationSpeed: 2000,
        singleItem: true,
        autoPlay: 8000 //change the value to change the speed.
    });
    
    $("#client-carousel").owlCarousel({
        paginationSpeed: 6000,
        singleItem: false,
        pagination: false,
        autoPlay: 8000 //change the value to change the speed.
    });
});


// Initializing WOW.js
new WOW().init();
