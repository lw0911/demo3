jQuery(function ($) {

    'use strict';

    //Initiat WOW JS
    new WOW().init();
    

});


// Tweetie  //

// $('.tweet-feed .tweet').twittie({
//     dateFormat: '%b. %d, %Y',
//     template: ' <p><div class="avatar">{{avatar}} </div><div class="screen-name">{{screen_name}} </div> {{tweet}} <div class="url-s"> </div> </p> <div class="date">{{date}}</div>',
//     count: 3,
//     apiPath: 'js/api/tweet.php',
//     loadingText: 'Loading.....'
// });


// Revolution Slider  //
jQuery(document).ready(function() {
              
    jQuery('.tp-banner').show().revolution( {
        startwidth:1170,
        startheight:700,
        hideThumbs:200,

        
    });



// Header Search  //

$(".nav .tr-glass").click(function(){
        $(".nav .tr-glass").hide();
        $(".nav .tr-cross").fadeIn();
        $(".tr-search").slideDown();
    });

    $(".nav .tr-cross").click(function(){
        $(".nav .tr-cross").hide();
        $(".nav .tr-glass").fadeIn();
        $(".tr-search").slideUp();
    });
});



// Information Section  //

$(document).ready(function(){

	var height = this;
	
    $(".info-back").css({"height": $(".info-container").height()+94});

});


// mmenu  //

$(function() {
				var $menu = $('nav#menu'),
					$html = $('html, body');

				$menu.mmenu({
					dragOpen: true
				});

				$menu.find( 'li > a' ).on(
					'click',
					function( e )
					{
						var href = $(this).attr( 'href' );

						//	if the clicked link is linked to an anchor, scroll the page to that anchor 
						if ( href.slice( 0, 1 ) == '#' )
						{
							$menu.one(
								'closed.mm',
								function()
								{
									setTimeout(
										function()
										{
											$html.animate({
												scrollTop: $( href ).offset().top
											});	
										}, 10
									);	
								}
							);
						}
					}
				);
			});


// NAVBAR DROPDOWN ANIMATION

$('.navbar .dropdown').hover(function() {

$(this).find('.dropdown-menu').addClass("dropdown-animation");
}, function() {
    $(this).find('.dropdown-menu').removeClass("dropdown-animation");
});

//Add new menu
$(window).scroll(function(){ 
  if ($(this).scrollTop() > 100){      
    $('.tr-navbar-position').addClass("small-menu");
  } else{
    $('.tr-navbar-position').removeClass("small-menu");
  }
});



// TEAM //

$(document).ready(function(){
        $("#t-s-1").click(function(){
            $("#t-b-2").hide();
            $("#t-b-3").hide();
            $("#t-b-4").hide();
            $("#t-b-5").hide();
            $("#t-b-6").hide();
            $("#t-b-1").fadeIn();

        });
        $("#t-s-2").click(function(){
            $("#t-b-1").hide();
            $("#t-b-3").hide();
            $("#t-b-4").hide();
            $("#t-b-5").hide();
            $("#t-b-6").hide();
            $("#t-b-2").fadeIn();

        });
        $("#t-s-3").click(function(){
            $("#t-b-2").hide();
            $("#t-b-1").hide();
            $("#t-b-4").hide();
            $("#t-b-5").hide();
            $("#t-b-6").hide();
            $("#t-b-3").fadeIn();

        });
        $("#t-s-4").click(function(){
            $("#t-b-2").hide();
            $("#t-b-3").hide();
            $("#t-b-1").hide();
            $("#t-b-5").hide();
            $("#t-b-6").hide();
            $("#t-b-4").fadeIn();

        });
        $("#t-s-5").click(function(){
            $("#t-b-2").hide();
            $("#t-b-3").hide();
            $("#t-b-4").hide();
            $("#t-b-1").hide();
            $("#t-b-6").hide();
            $("#t-b-5").fadeIn();

        });
        $("#t-s-6").click(function(){
            $("#t-b-2").hide();
            $("#t-b-3").hide();
            $("#t-b-4").hide();
            $("#t-b-5").hide();
            $("#t-b-1").hide();
            $("#t-b-6").fadeIn();

        });
    });


// SCROLLER //

$('#top-nav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 1200
    });

// COUNTER UP //
(function () {
        $('.counter').counterUp({
            delay: 2,
            time: 3000
        });
    })();


// SMOOTH SCROLL //

smoothScroll.init({
        speed: 1000,
        easing: 'easeInOutCubic',
        offset: 0,
        updateURL: true,
        callbackBefore: function ( toggle, anchor ) {},
        callbackAfter: function ( toggle, anchor ) {}
    });


//////// -- loader -- /////////

setTimeout(function(){ $('.loader').fadeOut(); }, 3000);
