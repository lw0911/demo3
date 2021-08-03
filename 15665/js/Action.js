$(window).load(function(){
	//首页最新资讯显示
	$(".btn-slide-open").click(function(){
		$(this).css({"height":"0","top":"70px"}).parents(".indexNews").animate({
			bottom:"0",
		})
	})
	$(".btn-slide-close").click(function(){
		$(this).parents(".indexNews").animate({
			bottom:"-510px"
		}).find(".btn-slide-open").animate({"height":"56px","top":"-148px"})
	})
	//导航
	nav();
	
	$(".control-group:odd").addClass("fr");
	//dot
	var w=$(".slick-dots").width()*0.5;
	$(".slick-dots").css("margin-left",-w);
})

//导航高亮
function nav(){
	var _nav = $("body").attr("cur");
	if (_nav != "" && (!isNaN(_nav))) {
		$(".nav>li").eq(_nav).addClass("current");
	}
}
//判断路径，给左边菜单加样式
function GetRequest() {
	var str=location.pathname;
	a=str.substr(str.lastIndexOf("/")+1);
	$(".sidebar a").each(function() {
		var a_h=$(this).attr("href");
		if(a==a_h){
			$(this).parents("li").addClass("active");
		}
	});
}
//产品页面条件筛选为选中的条件加样式
function initclass() {
	var id = getQueryStringByName("id");
	if (!isNaN(id)) {
		$(".Grouplist .job").eq(id).find(".job-bd").show().siblings(".job-hd").addClass("active");/*
		var url = "Group.html?id=" + id;
		$(".nav-pills li a[href='" + url + "']").parents("li").addClass("active").siblings("li").removeClass("active");*/
	}
}
//根据QueryString参数名称获取值
function getQueryStringByName(name) {
	var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
	if (result == null || result.length < 1) {
		return "";
	}
	return result[1];
}
//--输入框内提示-------------
function input(a){
$(a).each(function(){
	var thisVal=$(this).val();
	if(thisVal!=""){
		$(this).siblings("span").hide();
		}
	else{
		$(this).siblings("span").show();
		}
	$(this).focus(function(){
		$(this).siblings("span").hide();
	}).blur(function(){
		var val=$(this).val();
		if(val!=""){
			$(this).siblings("span").hide();
			}
		else{
			$(this).siblings("span").show();
			} 
	});
});
}		
//字数限制
function words_deal(){var a=$("#TextArea1").val().length;if(a>500){var b=$("#TextArea1").val().substr(0,500);$("#TextArea1").val(b),alert("\u8d85\u8fc7\u5b57\u6570\u9650\u5236\uff0c\u591a\u51fa\u7684\u5b57\u5c06\u88ab\u622a\u65ad\uff01")}else $("#textCount").text(500-$("#TextArea1").val().length)}
