//bannder
//(function() {
//  var bannerimg = $('#hbannerimg li'), bannerbtn = $('#hbannerbtn li');
//  var n = 0, maxn = bannerimg.length - 1;
//  var timer = setInterval(nextf, 5000);
//  bannerbtn.eq(0).addClass('show');
//  bannerimg.eq(0).addClass("show");
//  bannerbtn.mouseenter(function() {
//      clearInterval(timer);
//      n = $(this).index();
//      bannerbtn.eq(n).addClass('show').siblings().removeClass('show');
//      bannerimg.eq(n).addClass("show").fadeIn(500).siblings().removeClass("show").stop(true, true).fadeOut(500);
//      timer = setInterval(nextf, 5000);
//  });
//  function nextf() {
//      n = n + 1 > maxn ? 0 : n + 1;
//      bannerbtn.eq(n).addClass('show').siblings().removeClass('show');
//      bannerimg.eq(n).addClass("show").fadeIn(500).siblings().removeClass("show").stop(true, true).fadeOut(500);
//  }
//})();





$(function() {
	$('nav#mmenu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		counters	: false,
		navbar 		: {
			title		: 'MENU',
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
});


$(function(){
	$(".sypro-wrapper ul li").hover(function(){
		$("img[src='images/syjt.png']").eq($(this).index()).attr('src','images/syjth.png');
	},function(){
		$("img[src='images/syjth.png']").attr('src','images/syjt.png');
	});
	
})











/*
		----------------------------------------------------------------------------------------
		濞村繗顫嶉崳銊у閺堫剚甯撮崣锟�
		娴ｈ法鏁ら敍锟� 
		if (getIEVersion() == "IE8") alert("yes!");
		----------------------------------------------------------------------------------------
	*/

	function getIEVersion(){

		if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0") { 
			return "IE6";
		} 

		else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") { 
			return "IE7";
		} 

		else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") { 
			return "IE8";
		} 

		else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") { 
			return "IE9";
		} 

	}




$(function(){
	$(".desctitle span").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".desc-con .desccon").eq($(this).index()).fadeIn().siblings().hide();
	})
})



$(function(){
	$(".nav ul li").hover(function(){
		$(this).find("ul").slideDown(250);
	},function(){
		$(this).find("ul").stop().slideUp(250);
	})
})









