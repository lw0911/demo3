(function($){
	var goTo = $(".article");
	var guide = $(".sideGuide");
	var guideLi = $(".sideGuide .activesss");
	var curBg = $(".sideGuide .curBg");

	var index=0;
	var direct=0; 

	//设置宽高
	var resetFun = function(){ goTo.each(function(){  $(this).height( $(window).height() ),  $(this).width( $(window).width()+20 ) }); }
	resetFun();
	//当前页面刷新重置动画
			$(".index_logo").delay(0).animate({ left:"34px", opacity:"1"},800);
			$(".index_line").delay(0).animate({ top:"0px", opacity:"1"},800,"easeOutBounce");
			$(".index_search").delay(0).animate({ right:"9%", opacity:"1"},800);
			$(".index_dh").delay(300).animate({ right:"3%", opacity:"1"},800);
			$(".index_right").delay(0).animate({ right:"0px", opacity:"1"},800);
			$(".index_left").delay(0).animate({ left:"34px", opacity:"1"},800);
			$(".index_foot").delay(0).animate({ left:"34px", bottom:"30px", opacity:"1"},800);
			$(".index_qq").delay(0).animate({ right:"2.5%", bottom:"30px", opacity:"1"},800);
			$(".div_index1 .div1 .p1").stop().css({ right:"-150px", opacity:"0"}).delay(500).animate({right:"0px", opacity:"1"},800 );
			$(".div_index1 .div1 .p2").stop().css({ top:"150px", opacity:"0"}).delay(500).animate({top:"0px", opacity:"1"},800 );
			$(".div_index1 .div1 .p3").stop().css({ left:"-150px", opacity:"0"}).delay(500).animate({left:"0px", opacity:"1"},800 );
			$(".div_index1 .div1 .p4 .img").stop().css({ bottom:"0", width:"0", opacity:"0"}).delay(1000).animate({bottom:"0px", width:"100%", opacity:"1"},800);
			$(".div_index1 .div1 .p5").stop().css({ opacity:"0"}).delay(1500).animate({opacity:"1"},800 );
			$(".div_index1 .div1 .p6").stop().css({ opacity:"0"}).delay(1500).animate({opacity:"1"},800 );
			
			$(".div_index2 .div_bg .div1").stop().css({left:"0", opacity:"1"}).delay(0).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div2").stop().css({height:"100%",top:"0",right:"0", opacity:"1"}).delay(0).animate({height:"100%",top:"0",right:"0", opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div4 .img1").stop().css({top:"-100%",opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div4 .img2").stop().css({bottom:"-100%",opacity:"0"}).delay(500).animate({bottom:"0",opacity:"1"}, 1000);
			
			$(".div_index3 .div_bg .div1").stop().css({left:"0%", opacity:"1"}).delay(0).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div2").stop().css({height:"100%",top:"0%",right:"0", opacity:"1"}).delay(0).animate({height:"100%",top:"0",right:"0", opacity:"1"}, 1000);	
			$(".div_index3 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div4 .img1").stop().css({top:"-100%",opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div4 .img2").stop().css({bottom:"-100%",opacity:"0"}).delay(500).animate({bottom:"0",opacity:"1"}, 1000);
			
			$(".div_index4 .div_bg .div1").stop().css({left:"0%", opacity:"1"}).delay(0).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div2").stop().css({height:"100%",top:"0%",right:"0", opacity:"1"}).delay(0).animate({height:"100%",top:"0",right:"0", opacity:"1"}, 1000);	
			$(".div_index4 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div4 .img1").stop().css({right:"-100%",opacity:"1"}).delay(500).animate({right:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div4 .img2").stop().css({left:"-100%",opacity:"1"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			
			$(".div_index5 .div_bg .div1").stop().css({left:"-100%", opacity:"1"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div2").stop().css({right:"-100%", opacity:"1"}).delay(500).animate({right:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(1000).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(1000).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(1000).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(1000).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div4 .img1").stop().css({top:"-100%",opacity:"0"}).delay(1000).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div4 .img2").stop().css({bottom:"-100%",opacity:"0"}).delay(1000).animate({bottom:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div5").stop().css({top:"100%"}).delay(1000).animate({top:"0px"}, 800);
			
			$(".div_index6 .div_bg .div1").stop().css({left:"0%", opacity:"1"}).delay(0).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div2").stop().css({height:"100%",top:"0%",right:"0", opacity:"1"}).delay(0).animate({height:"100%",top:"0",right:"0", opacity:"1"}, 1000);	
			$(".div_index6 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div4 .img1").stop().css({right:"-100%",opacity:"1"}).delay(500).animate({right:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div4 .img2").stop().css({left:"-100%",opacity:"1"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			
			$(".div_index7 .div1 .lf").stop().css({left:"-150px",opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index7 .div1 .rg").stop().css({right:"-150px",opacity:"0"}).delay(500).animate({right:"0px",opacity:"1"}, 1000);
			$(".div_index7 .div_bg").stop().css({left:"-100%",opacity:"0"}).delay(0).animate({left:"-200px",opacity:"1"}, 1000);

	
	//屏幕动画
	var dh = function(qs){
	  if (qs==0) {
	    //alert ("第一屏动画");
	  		$(".div_index1 .div1 .p1").stop().css({ right:"-150px", opacity:"0"}).delay(500).animate({right:"0px", opacity:"1"},800 );
			$(".div_index1 .div1 .p2").stop().css({ top:"150px", opacity:"0"}).delay(500).animate({top:"0px", opacity:"1"},800 );
			$(".div_index1 .div1 .p3").stop().css({ left:"-150px", opacity:"0"}).delay(500).animate({left:"0px", opacity:"1"},800 );
			$(".div_index1 .div1 .p4 .img").stop().css({width:"0", bottom:"0px", opacity:"0"}).delay(1000).animate({bottom:"0px", width:"100%", opacity:"1"},800 );
			$(".div_index1 .div1 .p5").stop().css({ opacity:"0"}).delay(1500).animate({opacity:"1"},800 );
			$(".div_index1 .div1 .p6").stop().css({ opacity:"0"}).delay(1500).animate({opacity:"1"},800 );
	  }else if (qs==1) {
	    //alert ("第二屏动画");
	  		$(".div_index2 .div_bg .div1").stop().css({left:"0", opacity:"1"}).delay(0).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div2").stop().css({height:"100%",top:"0",right:"0", opacity:"1"}).delay(0).animate({height:"100%",top:"0",right:"0", opacity:"1"}, 1000);	
			$(".div_index2 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div4 .img1").stop().css({top:"-100%",opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index2 .div_bg .div4 .img2").stop().css({bottom:"-100%",opacity:"0"}).delay(500).animate({bottom:"0",opacity:"1"}, 1000);
	  }else if (qs==2) {
	    	$(".div_index3 .div_bg .div1").stop().css({left:"0%", opacity:"1"}).delay(0).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div2").stop().css({height:"100%",top:"0%",right:"0", opacity:"1"}).delay(0).animate({height:"100%",top:"0",right:"0", opacity:"1"}, 1000);	
			$(".div_index3 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div4 .img1").stop().css({top:"-100%",opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index3 .div_bg .div4 .img2").stop().css({bottom:"-100%",opacity:"0"}).delay(500).animate({bottom:"0",opacity:"1"}, 1000);
	   		
	  }else if (qs==3) {
	    	$(".div_index4 .div_bg .div1").stop().css({left:"0%", opacity:"1"}).delay(0).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div2").stop().css({height:"100%",top:"0%",right:"0", opacity:"1"}).delay(0).animate({height:"100%",top:"0",right:"0", opacity:"1"}, 1000);	
			$(".div_index4 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div4 .img1").stop().css({right:"-100%",opacity:"1"}).delay(500).animate({right:"0",opacity:"1"}, 1000);
			$(".div_index4 .div_bg .div4 .img2").stop().css({left:"-100%",opacity:"1"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
	    	
	  }
	  else if (qs==4) {
	   		$(".div_index5 .div_bg .div1").stop().css({left:"0%", opacity:"1"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div2").stop().css({right:"0%", opacity:"1"}).delay(500).animate({right:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(1000).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(1000).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(1000).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(1000).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div4 .img1").stop().css({top:"-100%",opacity:"0"}).delay(1000).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div4 .img2").stop().css({bottom:"-100%",opacity:"0"}).delay(1000).animate({bottom:"0",opacity:"1"}, 1000);
			$(".div_index5 .div_bg .div5").stop().css({top:"100%"}).delay(1000).animate({top:"0px"}, 800);
	  }
	   else if (qs==5) {
	    	$(".div_index6 .div_bg .div1").stop().css({left:"0%", opacity:"1"}).delay(0).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div2").stop().css({height:"100%",top:"0%",right:"0", opacity:"1"}).delay(0).animate({height:"100%",top:"0",right:"0", opacity:"1"}, 1000);	
			$(".div_index6 .div_bg .div3 .p1").stop().css({left:"-150px", opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div3 .p2").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div3 .p3").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div3 .p4").stop().css({top:"50px", opacity:"0"}).delay(500).animate({top:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div4 .img1").stop().css({right:"-100%",opacity:"1"}).delay(500).animate({right:"0",opacity:"1"}, 1000);
			$(".div_index6 .div_bg .div4 .img2").stop().css({left:"-100%",opacity:"1"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
	  }
	   else if (qs==6) {
	    	$(".div_index7 .div1 .lf").stop().css({left:"-150px",opacity:"0"}).delay(500).animate({left:"0",opacity:"1"}, 1000);
			$(".div_index7 .div1 .rg").stop().css({right:"-150px",opacity:"0"}).delay(500).animate({right:"0px",opacity:"1"}, 1000);
			$(".div_index7 .div_bg").stop().css({left:"-100%",opacity:"0"}).delay(0).animate({left:"-200px",opacity:"1"}, 1000);
	  }
	};
	
	//屏幕滚动
	var goToFun = function(){
	  direct=0; 
		if(index<0){  index=guideLi.size()-1 }
		if(index>=guideLi.size()){ index=0 }
		
		curBg.stop().animate({ left:curBg.width()*index },300,"swing"); //菜单上选中背景色移位
		guideLi.removeClass("on").eq(index).addClass("on"); //菜单样式改变
		$("html,body").stop().animate({ scrollLeft:( ($(window).width()+20) *index ) },1000,"swing",function(){ direct=0;}); //移动一屏位置
		dh(index);//调用每屏动画函数
	}
	
	guideLi.each(function(i){
		$(this).hover( function(){ index=guideLi.index( $(this) ); goToFun(); },function(){} );
	});

	$(window).resize(function(){ resetFun() });

	/* 滚轮事件 */ 
	var scrollFunc=function(e){ 
		e=e || window.event; 
		if(e.wheelDelta){ direct+= (-e.wheelDelta/120); }else if(e.detail){ direct+=e.detail/3;} 
		if( direct>=8 ){ goToFun( index++ ) }
		if( direct<=-8 ){ goToFun( index-- ) }
	} 
	if( document.addEventListener){ document.addEventListener('DOMMouseScroll',scrollFunc,false); }
	 window.onmousewheel=document.onmousewheel=scrollFunc; 

})(jQuery);