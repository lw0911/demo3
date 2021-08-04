$(function() {
  "use strict";

  //------- Sticky Header -------//
  $(".sticky-header").sticky();

  //------- video popup -------//
  $(".hero-banner__video, .video-play-button").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();


  if ($('.testi_slider').length) {
    $('.testi_slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: true,
        responsiveClass: true
    })
  }
  
});


