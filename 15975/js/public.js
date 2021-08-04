$(function() {

	$(".nav ul li a:last").css("border","none");
	$('nav#mmenu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		counters	: false,
		navbar 		: {
			title		: '菜单',
		},
		navbars		: [
			 {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}, {
				position	: 'bottom',
				content		: [
					''
				]
			} 
		]
	});
	/*index*/
	
    $('.banner').slick({
		dots: true,
        autoplay:true,
        arrows:false, 
        autoplaySpeed:3000,
    });
     $('.banner_x').slick({
		dots: true,
        autoplay:true,
        arrows:false, 
        autoplaySpeed:3000,
    });
		

		$(".links").hover(function(){
			$(".links ul").slideDown(500)
			
		},
		function(){
				$(".links ul").slideUp(500)
		})
		
			
});

var width_b = $(window).width();
var li_h = $(".pro_ul li");
	if(width_b>768){
		li_h.hover(function(){
			$(this).find(".a_right").addClass("hh").find("img").css("left","0");
			$(this).find(".right_hide").fadeIn()
		},function(){
		$(this).find(".right_hide").fadeOut()
		$(this).find(".a_right").removeClass("hh").find("img").css("left","-50%");
		});
		
		li_h.hover(function(){
			$(this).find(".a_right2").addClass("hh").find("img").css("left","0");
			$(this).find(".right_hide").fadeIn()
		},function(){
		$(this).find(".right_hide").fadeOut()
		$(this).find(".a_right2").removeClass("hh").find("img").css("left","-50%");
		});
		
	}
	
var qie_top = $(".top_qie ul li");
var qie_ma = $(".main_qie .main");

qie_top.hover(function(){
	$(this).addClass("active").siblings().removeClass("active");
	qie_ma.eq($(this).index()).show().siblings().hide();
	
	
},function(){
	
})


if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	new WOW().init();
};	

	$(".datu").slick({
			fade: true,
			useTransform: true,
			arrows: false,
			asNavFor:".xiaotu"
		})	
		$('.xiaotu').slick({
		  slidesToShow: 4,	
		  slidesToScroll: 1,
		  arrows:true,	  
		  focusOnSelect: true,
		 useTransform: true,
		 asNavFor:".datu",
		 autoplay:true,
         autoplaySpeed:3000,
		 
	
		});
		
	var left_img = $(".left_t img").attr("src");
		$(".right_t li").hover(function(){
			var img_src = $(this).find("img").attr("src");
			$(".left_t img").attr("src",img_src);
		},function(){
		
		})
		
$(".top_head .right").click(function(){
	$(".show_w").toggle();
})
