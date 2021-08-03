jQuery(function($) {
	addStyle();

	//首页幻灯片轮播
	$(".home-page .ban").slide({
		effect : "leftLoop",
		autoPlay : true
	});

	//内页标签切换
	$(".content-tab").slide();

	//当前年份
	$(".current-year").text(new Date().getFullYear());
});

//使用jQuery选择器添加动态样式（因为CSS伪类选择符不支持IE9以下浏览器）
function addStyle() {
	$(".timeline li:first-child").css("background", "url(images/dsj_x1.jpg) left top no-repeat");
	$(".timeline li:last-child").css("background", "url(images/dsj_x2.jpg) left bottom no-repeat");
	$(".products-page .product-list li:last-child, .products-page .schemes li:last-child").css("margin-bottom", 0);
}

//打开屏幕居中的窗口
function openCenterWindow(url, name, width, heigh) {
	var top = (window.screen.availHeight - 30 - heigh) / 2;
	var left = (window.screen.availWidth - 10 - width) / 2;
	window.open(url, name, 'top=' + top + ', left=' + left + ', width=' + width + ', height=' + heigh + '');
}