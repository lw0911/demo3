	
	
	
	//INITIALIZW MAIN MENU
	$(document).ready(function() { 
		$('.sf-menu').superfish({ 
			delay:       700,                            // one second delay on mouseout 
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
			speed:       'fast',                          // faster animation speed
			autoArrows:  false,                           // disable generation of arrow mark-up 
			dropShadows: false                            // disable drop shadows 
		}); 
	  /*hack for a bug in Chrome with the background when the dropdown is animated*/
		if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
			$('.sf-menu').superfish({ 
				delay:       700,
				animation:   {opacity:'show',height:'show'},
				speed:       0,
				autoArrows:  false,
				dropShadows: false
			}); 
		}
	});
	
	//INITIALIZW TESTIMONIAL QUOTES
	$(document).ready(function() {
		$('blockquote').quovolver();		
	});
	
	
	//INITIALIZW TOOLTIP JQUERY
	$(document).ready(function() {
		$('a.tipsy').tipsy({	
			delayIn: 100,      // delay before showing tooltip (ms)
			delayOut: 500,     // delay before hiding tooltip (ms)
			fade: true,     // fade tooltips in/out?
			fallback: '',    // fallback text to use when no tooltip text
			gravity: 's',    // gravity
			html: true,     // is tooltip content HTML?
			live: false,     // use live event support?
			offset: 15,       // pixel offset of tooltip from element
			opacity: 0.8,    // opacity of tooltip
			title: 'title',  // attribute/callback containing tooltip text
			trigger: 'hover' // how tooltip is triggered - hover | focus | manual	
		});
	});
	
	//PORTFOLIO ITEM HOVER
	jQuery(document).ready(function($) {
		/*Image hover*/
		$('.hover-img').hover(function() {
			$(this).find('i').stop().animate({
				opacity: 0.5
			}, 'fast');
			$(this).find('a').stop().animate({
				"top": "50%"
			});
		}, function() {
			$(this).find('i').stop().animate({
				opacity: 0
			}, 'fast');
			$(this).find('a').stop().animate({
				"top": "-30px"
			});
			
		}); 
	});
	
	//PORTFOLIO ZOOM ICON HOVER
	$(document).ready(function(){
		$(".fade-img").css({"opacity": "0.5"});
		$(".fade-img").hover(function() {
			//$(this).stop().animate({top: "-10px"}, 300);
			//$(this).stop().animate({"opacity": "1"},  "medium");
			$(this).stop().animate({opacity: 1}, 'fast' );
		},
		function() {
			//$(this).stop().animate({top: "0px"}, 300);		  
			//$(this).stop().animate({"opacity": "0.5"},  "slow");
			$(this).stop().animate({opacity: 0.7}, 'fast' );
		});
	});
	
	//INITIALIZES LIGHTBOX PLUGIN
	$(document).ready(function() {
		$("a[rel^='prettyPhoto']").prettyPhoto({
			opacity:0.80,
			default_width:500,
			default_height:344,
			theme:'dark_rounded',
			hideflash:false,
			modal:false,
			showTitle: false,
		});
	});
	//INITIALIZES TWITTER FEED PLUGIN
	$(document).ready(function() { 
		$(".tweet").tweet({
			username: "seaofclouds",//Change with your own twitter id
			//join_text: "auto",
			//avatar_size: 32,
			count: 3,
			//auto_join_text_default: "we said,",
			//auto_join_text_ed: "we",
			//auto_join_text_ing: "we were",
			//auto_join_text_reply: "we replied to",
			//auto_join_text_url: "we were checking out",
			loading_text: "loading tweets..."
		});		
	});
	
	//INITIALIZES BACK TO TOP
	$(document).ready(function(){
		// hide #back-top first
		$("#back-top").hide();		
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});	
			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});	
	});
	$(document).ready(function(){
		/* tabs
		-------------------------------*/
		$('.tabs').each(function(){
			$(this).find('.tabs-control a:first').addClass('active');
			$(this).find('.tabs-tabs .tabs-tab:first').addClass('active');
		});
		
		$('.tabs .tabs-control a').click(function(){
			var $tabs=$(this).parents('.tabs');
			if(!$tabs.length)
				return false;
				
			var tabname=$(this).attr('href').replace('#','');
			
			$tabs.find('.tabs-control a').removeClass('active');
			$(this).addClass('active');

			$tabs.find('.tabs-tabs .tabs-tab.active').hide().removeClass('active');
			$tabs.find('.tabs-tabs .tabs-tab.'+tabname).addClass('active').fadeIn(300);
			
			
			return false;
		});
		
		/* toggle
		-------------------------------*/
		$(".toggle-title").each(function(){
			if(!$(this).parent().hasClass("active")){
				$(this).next().hide();
			}
			$(this).click(function(){
					$(this).next().slideToggle(Math.min(600 , Math.max(300 , $(this).next().height())));
					$(this).parent().toggleClass("active");
					return false;
			});
		});
		
		/* accordion
		-------------------------------*/
		$(".accordion-panel-title").each(function(){
			if(!$(this).parent().hasClass("active")){
				$(this).next().hide();
			}
			
			$(this).click(function(){
				if($(this).next().is(":hidden")){
					$(this).parent().parent().find(".accordion-panel-title").next().slideUp(Math.min(600 , Math.max(300 , $(this).next().height()))).parent().removeClass("active");
					$(this).next().slideDown(Math.min(600 , Math.max(300 , $(this).next().height()))).parent().toggleClass("active");
				}
				
				return false;
			});
		});
	});
	