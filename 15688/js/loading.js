$(document).ready(function() {
	$(".headerrighttop input").focus(function() {
		$(".headerrighttop input").attr("style", "text-align:left");
	});
	$(".headerrighttop input").blur(function() {
		$(".headerrighttop input").attr("style", "text-align:right");
	});
})