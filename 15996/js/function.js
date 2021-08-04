

$(function(){
		$('.nav ul li').hover(function(){
						
			$(this).children('.nav%20ul%20li%20.line').toggle();
			$(this).children('.s_nav1').toggle();
			
		})

			$('.page ul li').eq(0).hide();
		
		$(".fad_list ul li").click( function (){  
			
			if($(this).find('.fad_main').is(":visible")){
					$(this).find('.fad_main').slideUp();
					$(this).find('.fad_main').slideUp();
					$(this).find('.fad_btn').css('background-image','url(public/home/images/img_57.jpg)')
					$(this).find('span i').css('font-size','12px')
					$(this).css('background-color','#bbb')
				}else{
					$('.fad_main').slideUp();
					$('.fad_btn').css('background-image','url(public/home/images/img_57.jpg)')
					$('span i').css('font-size','12px')
					$('.fad_list ul li').css('background-color','#bbb')
					$(this).find('.fad_main').slideToggle();
					$(this).find('.fad_btn').css('background-image','url(public/home/images/img_58.jpg)')
					$(this).find('span i').css('font-size','15px')
					$(this).css('background-color','#7eb093')
				}
			})
	
		 
		 $('.f_link img').click(function(){
			 	$(this).next("div").toggle();
			 })
			 
		$('#nav li').hover(function(){
			 	
				$(this).find('.xl').toggle();
			})
		
	})

function getAttributeValue(o, key) {
	if (!o.attributes) return null;
	var attr = o.attributes;
	for (var i = 0; i < attr.length; i++){
	if (key.toLowerCase() == attr[i].name.toLowerCase())
	return attr[i].value;
	}
	return null;
	}
	function focusInputEle(o) {
	if (o.value == getAttributeValue(o, 'defaultVal')){
	o.value = '';
	o.style.color = "#3b8dd0";
	}
	}
	function blurInputEle(o) {
	if (o.value == '') {
	o.value = getAttributeValue(o, 'defaultVal');
	o.style.color = "#3b8dd0";
	}
}





                $(function(){
                    jQuery(".ind_03 .picScroll-left1,.ind_03 .picScroll-left2,.ind_03 .picScroll-left3").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:4,trigger:"click"});
                    $('.ind_03 .xhd span').click(function(){
                        var x=$(this).index();
                        $(this).addClass('on').siblings().removeClass('on');
                        $('.xbd .picScroll-left').eq(x).show().siblings('.picScroll-left').hide();
                    });
                });



