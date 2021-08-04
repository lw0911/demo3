$(function(){
	//banner();
    $(".loading").fadeOut("slow",function(){
        $(this).remove()
        $(".bannertxt .txt1").stop().animate({"opacity": "1", "left": "159px", "top": "345px"}, 1200)
        $(".bannertxt .txt2").stop().animate({"opacity": "1"}, 1200)
        $(".bannertxt .txt3").stop().animate({"opacity": "1", "left": "302px", "top": "507px"}, 1200, function () {
            setTimeout(function(){delayURL()},400)
        })
        $(".banner ul li").eq(0).css("display","block").fadeIn(600);
        $(".banner .number span").bind("mousedown",function(){
            reanimate()
            var index=$(this).index();
            if(index==0){
                setTimeout(function(){delayURL()},800)
            }
            else{
                $(".banner .wbb .kd").css({"height":"0px"})
                $(".banner .wdn span").html(0);
            }
            $(this).addClass("current").siblings().removeClass("current")
            $(".banner ul li").eq(index).fadeIn("slow").siblings().fadeOut("slow");
            setTimeout(function(){newanimate(index)},500)
        });
        function fl(){
            reanimate()
            var oldpos=$(".current").index();
            var last=$(".jslist li:last").index();
            var newpos=oldpos==last?0:oldpos+1;
            //console.log(newpos,oldpos)

            if(newpos!=0){
                $(".banner .wbb .kd").css({"height":"0px"})
                $(".banner .wdn span").html(0);
            }
            else{
                setTimeout(function(){delayURL()},800)
            }
            $(".number").find("span").eq(newpos).addClass("current").siblings().removeClass("current");
            $(".banner li").eq(newpos).fadeIn("slow").siblings().fadeOut("slow");

            setTimeout(function(){ newanimate(newpos)},500)

        }
        var fun=setInterval(fl,4000)
        $(".banner").mouseover(function(){
            clearInterval(fun)
        })
        $(".banner").mouseout(function(){
            fun=setInterval(fl,4000);
        })
        function reanimate(){
            $(".bannertxt .txt1").stop().css({"opacity": "0", "top": "245px"}, 1)
            $(".bannertxt .txt2").stop().css({"opacity": "0"}, 1)
            $(".bannertxt .txt3").stop().css({"opacity": "0","top":"607px"}, 1)
        }
        function newanimate(index){
            $(".banner ul li").eq(index).find(".bannertxt .txt1").animate({
                "opacity":"1",
                "top": "345px"
            },1000);
            $(".banner ul li").eq(index).find(".bannertxt .txt2").animate({
                "opacity":"1"
            },1000);
            $(".banner ul li").eq(index).find(".bannertxt .txt3").animate({
                "opacity":"1",
                "top": "507px"
            },1000);
        }
    })

	/*
	function myShow(){
        var div='<div class="wbb"> <div class="kd"></div> </div> <div class="wdn"><span>0</span>℃</div>'
        if(i!=0){
          
            $(".wbb").remove();
            $(".wdn").remove();
        }
        else{
            $(".ret").html(div)
       
			delayURL()
            
        }
		$(".banner ul li").eq(i).stop(true,true).fadeIn(2000).siblings("li").fadeOut(2000);
		$(".banner .number span").eq(i).addClass("on").siblings("span").removeClass("on");
	}
	
	//滑入停止动画，滑出开始动画
	
		  $(".bannertxt .txt1").stop().animate({"opacity": "0", "top": "245px"}, 1)
            $(".bannertxt .txt2").stop().animate({"opacity": "0"}, 1)
            $(".bannertxt .txt3").stop().animate({"opacity": "0","top":"607px"}, 1,function(){
                $(".bannertxt .txt1").stop().animate({"opacity": "1", "left": "159px", "top": "345px"}, 1000)
                $(".bannertxt .txt2").stop().animate({"opacity": "1"}, 1000)
                $(".bannertxt .txt3").stop().animate({"opacity": "1", "left": "302px", "top": "507px"}, 1000)
            })
	$(".banner").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow(sw)
		  sw++;
		  if(sw==listN){sw=0;}
		} ,3000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw)
	   sw++;
	   if(sw==listN){sw=0;}
	} , 3000);


	$(".banner .hd .prev").click(function(){
		 $('.banner .number span').each(function(i){
		 	if ($(this).hasClass("on")) {
		 		var sw = i;
		 	};
		 });
		 // alert(sw);
		 if(sw<=0){sw = listN-1;}else{sw = sw-1;}

 		myShow(sw);
	})
	$(".banner .hd .next").click(function(){
		 $('.banner .number span').each(function(i){
		 	if ($(this).hasClass("on")) {
		 		var sw = i;
		 	};
		 });
		 // alert(sw);
		 if( sw == listN-1){sw=0;}else{sw = sw+1;}
 		myShow(sw);
	})*/

})