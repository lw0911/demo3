/*JS Document
*author:cyy
*/


(function($){
	function waterFallFlow(opts){
		if(!(opts instanceof Object)) var opts={};
		var oneCell = opts.oneCell || ".waterfallflow-list li",
			colspan = opts.colspan || 4,
			marginX = opts.marginX || 15,
			marginY = opts.marginY || 15;
			
		return this.each(function(){
			
			var $wrap = $(this),
				$tar = $(oneCell,$wrap),
				$parent = $tar.parent(),
				$imgs = $tar.find("img");
			var exec = function(){
				$parent.css({paddingRight:marginX});
				var parent_pos = $parent.css("position");
				if(parent_pos != "absolute" && (parent_pos != "relative") && (parent_pos != "fixed")){
					$parent.css({position:"relative"});
				}
				var parent_w = $parent.width(),
					li_w = parent_w/colspan-marginX,
					allh_arr = [],lineh_arr = [],h_min,h_max,n;
				$tar.css({width:li_w});
				for(var i=0;i<$tar.length;i++){
					allh_arr[i] = $tar.eq(i).outerHeight();
					if(i <= colspan-1){
						lineh_arr.push(allh_arr[i]+marginY);
						$tar.eq(i).css({position:"absolute",top:marginY,left:li_w*i+marginX*(i+1)});
					}else{
						h_min = Math.min.apply(null,lineh_arr);
						/*indexOf方法兼容IE9以下*/
						if(!Array.indexOf){
						    Array.prototype.indexOf = function(el){
								for(var i=0,n=this.length; i<n; i++){
								  	if (this[i] === el) return i;
								}
								return -1;
							} 
						}
						n = lineh_arr.indexOf(h_min);
						lineh_arr[n] += allh_arr[i] + marginY;
						$tar.eq(i).css({position:"absolute",top:h_min+marginY,left:li_w*n+marginX*(n+1)});	
					}
				}
				h_max = Math.max.apply(null,lineh_arr);
				$tar.parent().css({height:h_max+marginY});
			}
			exec();
			$imgs.on("load",function(){
				exec();
			})
		})
		
	}
	
	$.fn.waterFallFlow = waterFallFlow;
	
}(jQuery));


$(function(){
	
	$(".sidebar-nav-list li").click(function(){
		var $this = $(this);
		var _current = $this.hasClass("on");
		if(!_current){
			$this.parent().children("li").removeClass("on");
			$this.addClass("on");
		}else{
			$this.removeClass("on");
		}
		
	});
	
	
	/*瀑布流*/
	$(".pics-auto-list").waterFallFlow({oneCell:"li",colspan:3,marginX:50,marginY:50});
	$(".apply-list").waterFallFlow({oneCell:"li",colspan:2,marginX:50,marginY:50});



});


















