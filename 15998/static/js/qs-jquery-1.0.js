//Blood_Wolf JQ插件包，支持开源，如有使用或二次开发，请标明出处，谢谢合作！
//#ff8a00; 翰臣科技有限公司VI色系
//本站由杭州翰臣科技有限公司进行全程策划/页面设计/程序开发完成. 24小时技术支持——翰臣科技：http://www.68hanchen.com

$(function(){	    
	proNavanimate();
  });

function proNavanimate(){
	$(".index_qq a").hover(
		function(){
			$(this).find("img").stop(true,false).animate({opacity:"1",width:"144px"}, 300)
		},
		function(){
			$(this).find("img").stop(true,false).animate({opacity:"0",width:"0"}, 300)
		}
	)
	
	$(".ul_js li").hover(
		function(){
			$(this).stop(true,false).animate({top:"-5px"}, 300)
		},
		function(){
			$(this).stop(true,false).animate({top:"0px"}, 300)
		}
	)
	$(".index_dh").click(
		function(){
			$(".div_js_txt").stop(true,false).delay(0).animate({width:"100%",height:"100%"}, 0);
			$(".div_js_bg").stop(true,false).delay(0).animate({opacity:"1"}, 500);
			$(".div_js_lf").stop(true,false).delay(0).animate({left:"0"}, 500);
			$(".div_js_rg").stop(true,false).delay(500).animate({opacity:"1"}, 2000);
			$(".div_js_close").stop(true,false).delay(500).animate({opacity:"1"}, 2000);
		}
	)
	$(".main_dh").click(
		function(){
			$(".div_js_txt").stop(true,false).delay(0).animate({width:"100%",height:"100%"}, 0);
			$(".div_js_bg").stop(true,false).delay(0).animate({opacity:"1"}, 500);
			$(".div_js_lf").stop(true,false).delay(0).animate({left:"0"}, 500);
			$(".div_js_rg").stop(true,false).delay(500).animate({opacity:"1"}, 2000);
			$(".div_js_close").stop(true,false).delay(500).animate({opacity:"1"}, 2000);
		}
	)
	$(".div_js_close").click(
		function(){
			$(".div_js_txt").stop(true,false).delay(500).animate({width:"0",height:"0"}, 0);
			$(".div_js_bg").stop(true,false).delay(0).animate({opacity:"0"}, 800);
			$(".div_js_lf").stop(true,false).delay(0).animate({left:"-100%"}, 800);
			$(".div_js_rg").stop(true,false).delay(0).animate({opacity:"0"}, 2000);
			$(".div_js_close").stop(true,false).delay(0).animate({opacity:"0"}, 2000);
		}
	)
	
	$(".div_index5 .div_bg .div2").hover(
		function(){
			$(this).find(".div5").stop(true,false).delay(0).animate({top:"100%"}, 1400);
		},
		function(){
			$(this).find(".div5").stop(true,false).delay(0).animate({top:"0px"}, 800);
		}
	)
	$(".ul_list li ").hover(
		function(){
			$(this).find(".div2").stop(true,false).delay(0).animate({bottom:"7%",opacity:"1"}, 500);
		},
		function(){
			$(this).find(".div2").stop(true,false).delay(0).animate({bottom:"-100%",opacity:"0"}, 500);
		}
	)
	$(".div_abo2 ul li").hover(
		function(){
			$(this).find(".div4").stop(true,false).delay(0).animate({top:"0",opacity:"1"}, 500);
		},
		function(){
			$(this).find(".div4").stop(true,false).delay(0).animate({top:"20px",opacity:"0"}, 500);
		}
	)
	
	
	$(".div_abo .div2").delay(0).animate({ bottom:"0px", opacity:"1"},1000);
	$(".div_abo .div3").delay(400).animate({ bottom:"0px", opacity:"1"},1000);
	$(".div_abo .div4").delay(800).animate({ bottom:"0px", opacity:"1"},1000);
	$(".div_abo .div5").delay(1200).animate({ bottom:"0px", opacity:"1"},1000);
	$(".div_abo .div6").delay(2000).animate({ bottom:"0px", opacity:"1"},1000);
	$(".div_abo .div7").delay(2800).animate({ bottom:"0px", opacity:"1"},1000);
	
}
