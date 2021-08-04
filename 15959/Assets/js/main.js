$(function(){
	var w_w=$(window).width();
	var m_l=(1920-w_w)/2;
	//$('.fw .fw_bg img').css('margin-left','-'+m_l+'px');
	
	$('.nav_m .n_icon').click(function(){
		$(this).siblings('ul').slideToggle();
	});
	
	$('.box_m li:last-child').css('margin-right',0+'px');
	$('.scd_l .scd_lm ul li:last-child').css('border',0+'px');
	
	$('.scd_l .scd_lm ul .now ul').siblings('.li_m').css('border-bottom','1px solid #D1E5FF');
	$('.scd_l .scd_lm ul li').click(function(){
		$(this).siblings('li').removeClass('now');
		$(this).addClass('now');
		
		$('.scd_l .scd_lm ul li ul').siblings('.li_m').css('border-bottom',0+'px');
		$('.scd_l .scd_lm ul .now ul').siblings('.li_m').css('border-bottom','1px solid #D1E5FF');
	});
	
	$('.alfx li:nth-child(3n)').css('margin-right',0+'px');
	
})
function b(){	
	t = parseInt(x.css('top'));
	y.css('top','19px');	
	x.animate({top: t - 19 + 'px'},'slow');	//19为每个li的高度
	if(Math.abs(t) == h-19){ //19为每个li的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
}
$(document).ready(function(){
	$('.swap').html($('.news_li').html());
	x = $('.news_li');
	y = $('.swap');
	h = $('.news_li li').length * 19; //19为每个li的高度
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
	
})