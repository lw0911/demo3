$(function(){
	var index;
	var dd = $(".header-main .menub b");
	$(".header-main li.ho").each(function(){
		if ($(this).hasClass("on")) {
			index = $(this).index();
			    dd.stop(true,true).css({"left":( index*(55+34) + 17 ) +"px"})
		};
	})
	$(".header-main li.ho").hover(function(){
        if($(this).index()==6){
            index = $(this).index();
            dd.stop(true,true).animate({"left":( index*(55+34) + 17 ) +"px"})
        }
        else{
            $(".header .bg").stop(true,true).slideDown(300);
            $(this).find(".subnav").stop(true,true).slideDown();
            index = $(this).index();
            dd.stop(true,true).animate({"left":( index*(55+34) + 17 ) +"px"})
        }
	},function(){
		$(".header .bg").stop(true,true).slideUp();
		$(this).find(".subnav").stop(true,true).slideUp();
	})	
});
function dd(length){
    var dd = $(".header-main .menub b");
    dd.css({"left":( length*(55+34) + 17 ) +"px"})
}
function banner(){
        $(".bannertxt .txt1").stop().animate({"opacity": "1", "left": "159px", "top": "345px"}, 1200)
        $(".bannertxt .txt2").stop().animate({"opacity": "1"}, 1200)
        $(".bannertxt .txt3").stop().animate({"opacity": "1", "left": "302px", "top": "507px"}, 1200, function () {
            delayURL()
        })

}
function delayURL(){
    var delay = $(".banner .wdn span").html();
		var t = setTimeout("delayURL()", 70);
    if (delay <= 21) {
        delay++;
        $(".banner .wdn span").stop().html(delay);
        $(".banner .wbb .kd").stop().css({"height":delay*4+"px"})
    } else {
 		clearTimeout(t); 
    }       
} 
function deboxIn(){
    var bodytop=document.body.scrollTop;
    var boxEl = $('.an-i');
    if(bodytop==boxEl.eq(0).offset().top){
       // box.
    }
    else
        return false;
}
function index(){
	//产品系列
    $(".cpxt").hover(function(){
        $(this).find(".tit").stop().animate({"paddingTop": "60px"},800)
        $(this).find(".entit").stop().animate({"marginTop": "100px"},800)
    },function(){
        $(this).find(".tit").stop().animate({"paddingTop": "120px"},800)
        $(this).find(".entit").stop().animate({"marginTop": "9px"},800)
    })
    $(".cpxl ul li").hover(function(){
        $(this).find(".lstit").stop().animate({"paddingTop": "380px"},800)
        $(this).find(".ltit").stop().animate({"paddinTop": "80px"},800)
    },function(){
        $(this).find(".lstit").stop().animate({"paddingTop": "317px"},800)
        $(this).find(".ltit").stop().animate({"paddinTop": "15px"},800)
    })
	$(".cpxl").hover(function(){
        $(this).find(".tit").stop().animate({"paddingTop": "60px"},800)
        $(this).find(".entit").stop().animate({"marginTop": "100px"},800)
        $(".i-fib .le ul").stop().animate({"opacity":"1","left":"250px"},600)
	},function(){
        $(this).find(".tit").stop().animate({"paddingTop": "120px"},800)
        $(this).find(".entit").stop().animate({"marginTop": "9px"},800)
		$(".i-fib .le ul").stop().animate({"opacity":"1","left":"-500px"},600)
	})
	$(".i-fob li").hover(function(){
       // $(this).find(".btit").addClass("animated hinge");
		$(this).find(".bg").stop().animate({"opacity":"0.5"},600)
		$(this).find(".con").stop().fadeIn(600);
        //$(this).css("background","120%")
	},function(){
       // $(this).find(".btit").removeClass("animated hinge")
		$(this).find(".bg").stop().animate({"opacity":"0"},600)
		$(this).find(".con").stop().fadeOut(400);
        //$(this).css("background","100%")
	})
}
function prozc(){
	$(".bannertxt .txt1").stop().animate({"opacity":"1","top":"267px"},1200)
	$(".bannertxt .txt5").stop().animate({"opacity":"1","top":"411px"},1200)
	// alert($(window).scrollTop());
    $(".in-banner .bannertxt .btn").click(function(){
         $('body,html').animate({scrollTop:765},500,function(){
             $(".right-list").stop().animate({"marginTop":"31px","opacity":"1"},500)
         });
         return false;
    })

}
function profilescroll(){
	var hei = $(window).scrollTop();
    if (hei > 108) {
        $(".pro-se .le").stop().animate({"opacity":"1","margin-left":"0px"},800)
		$(".pro-se .ri").stop().animate({"opacity":"1","margin-right":"0px"},800)
    }
    if (hei > 756) {
		$(".pro-se-th .li").eq(0).animate({"opacity":"1","margin-right":"126px"},800)
		setTimeout(function(){
			$(".pro-se-th .li").eq(1).animate({"opacity":"1","margin-right":"126px"},800)
		},200)
		setTimeout(function(){
			$(".pro-se-th .li").eq(2).animate({"opacity":"1","margin-right":"126px"},800)
		},400)
		setTimeout(function(){
			$(".pro-se-th .li").eq(3).animate({"opacity":"1","margin-right":"126px"},800)
		},600)
	}
}

function culscroll(){
	var hei = $(window).scrollTop();
    
    if (hei > 108) {
        $(".cul-se .le").stop().animate({"opacity":"1","margin-left":"0px"},800)
		$(".cul-se .ri").stop().animate({"opacity":"1","margin-right":"38px"},800)
    }
    if (hei > 964) {
        $(".cul-se .le1").stop().animate({"opacity":"1","margin-left":"20px"},800)
		$(".cul-se .ri1").stop().animate({"opacity":"1","margin-right":"0px"},800)
    }
    if (hei > 1836) {
        $(".cul-se .ri2").stop().animate({"opacity":"1","margin-top":"100px"},800)
    }
    if (hei > 2970) {
        $(".cul-se .le3").stop().animate({"opacity":"1","margin-left":"0px"},800)
		$(".cul-se .ri3").stop().animate({"opacity":"1","margin-right":"0px"},800)
    }
}
function coursescroll(){
	var hei = $(window).scrollTop();
	if (hei > $(".pr1").offset().top - 800) { $(".pr1").stop().animate({"opacity":"1","margin-right":"0px"},600) }

	if (hei > $(".pl1").offset().top - 800) { $(".pl1").stop().animate({"opacity":"1","margin-left":"0px"},600) }

	if (hei > $(".pr2").offset().top - 800) { $(".pr2").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	if (hei > $(".pl2").offset().top - 800) { $(".pl2").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	if (hei > $(".pr3").offset().top - 800) { $(".pr3").stop().animate({"opacity":"1","margin-right":"0px"},600) }

	if (hei > $(".pl3").offset().top - 800) { $(".pl3").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	if (hei > $(".pr4").offset().top - 800) { $(".pr4").stop().animate({"opacity":"1","margin-right":"0px"},600) }


	if (hei > $(".pr3").offset().top - 800) { $(".pr3").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	if (hei > $(".pr5").offset().top - 800) { $(".pr5").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	if (hei > $(".pl4").offset().top - 800) { $(".pl4").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	if (hei > $(".pr6").offset().top - 800) { $(".pr6").stop().animate({"opacity":"1","margin-right":"0px"},600) }	

	if (hei > $(".pl5").offset().top - 800) { $(".pl5").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	if (hei > $(".pr7").offset().top - 800) { $(".pr7").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	if (hei > $(".pl6").offset().top - 800) { $(".pl6").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	if (hei > $(".pr8").offset().top - 800) { $(".pr8").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	if (hei > $(".pr9").offset().top - 800) { $(".pr9").stop().animate({"opacity":"1","margin-right":"0px"},600) }

	if (hei > $(".pl7").offset().top - 800) { $(".pl7").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	// if (hei > 500) { $(".pr1").stop().animate({"opacity":"1","margin-right":"0px"},600) }

	// if (hei > 700) { $(".pl1").stop().animate({"opacity":"1","margin-left":"0px"},600) }

	// if (hei > 900) { $(".pr2").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	// if (hei > 1100) { $(".pl2").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	// if (hei > 1300) { $(".pr3").stop().animate({"opacity":"1","margin-right":"0px"},600) }

	// if (hei > 1700) { $(".pl3").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	// if (hei > 1800) { $(".pr4").stop().animate({"opacity":"1","margin-right":"0px"},600) }


	// if (hei > 1900) { $(".pr3").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	// if (hei > 2000) { $(".pr5").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	// if (hei > 2100) { $(".pl4").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	// if (hei > 2200) { $(".pr6").stop().animate({"opacity":"1","margin-right":"0px"},600) }	

	// if (hei > 2300) { $(".pl5").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	// if (hei > 2400) { $(".pr7").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	// if (hei > 2500) { $(".pl6").stop().animate({"opacity":"1","margin-left":"0px"},600) }
	// if (hei > 2600) { $(".pr8").stop().animate({"opacity":"1","margin-right":"0px"},600) }
	// if (hei > 2700) { $(".pr9").stop().animate({"opacity":"1","margin-right":"0px"},600) }

	// if (hei > 2800) { $(".pl7").stop().animate({"opacity":"1","margin-left":"0px"},600) }

}

function honor(){
	var hei = $(window).scrollTop();
	if (hei > 925) {
		$(".tal-th .li").eq(0).animate({"opacity":"1","margin-right":"92px"},800)
		setTimeout(function(){
			$(".tal-th .li").eq(1).animate({"opacity":"1","margin-right":"92px"},800)
		},200)
		setTimeout(function(){
			$(".tal-th .li").eq(2).animate({"opacity":"1","margin-right":"92px"},800)
		},400)
		
	}
}

function proscroll(){
	var wH = $(window).height();
	var wW = $(window).width();
	var W = wW/3;
	var H = (wH-85-200-25);
	$(".product-fi li").stop().css({"width":W});
	$(".product-fi .img").stop().css({"width":W,"height":H});
}

function prolistscroll(){
	var wW = $(window).width();
	if (wW > 1800) {
		$(".prolist-fi .wrap").stop().css({"width":"1800px"})
	}else if (wW > 1500) {
		$(".prolist-fi .wrap").stop().css({"width":"1500px"})
	}else if (wW > 1200) {
		$(".prolist-fi .wrap").stop().css({"width":"1200px"})
	}else if (wW > 900) {
		$(".prolist-fi .wrap").stop().css({"width":"900px"})
	};
}


function casescroll(){
	var wH = $(window).height();
	var wW = $(window).width();
	var W = wW/3;
	var H = (wH-85);
	$(".list-list li").stop().css({"width":W,"height":H});
}
function scrollanimate(){
    var hei =document.documentElement.scrollTop || document.body.scrollTop;
    var window_height=document.documentElement.clientHeight + hei;
    var $an_i=$(".an-i");
    var i_th=$(".i-thb li"), i_fob=$(".i-fob li");
    if(window_height>=$an_i.eq(0).offset().top+800){
        $(".i-fib .le").animate({"left":"0px","opacity":"1"},1200)
        $(".i-fib .ri").animate({"left":"0px","opacity":"1"},1500)
    }
    if(window_height>=i_th.offset().top-200){
        i_th.eq(0).animate({"top":"0px","opacity":"1"},800,function(){
            i_th.eq(1).animate({"bottom":"0px","opacity":"1"},800,function(){
                i_th.eq(2).animate({"top":"0px","opacity":"1"},800)
            })
        })

    }
	if(window_height>=$(".i-seb").offset().top+400){
		$(".i-seb .le").animate({"marginLeft":"0px","opacity":"1"},800)
		$(".i-seb .ri").animate({"marginRight":"0px","opacity":"1"},800)
	}
    if(window_height>=$(".i-fob").offset().top+300){
        i_fob.animate({left:"0px","opacity":"1"},1500)
    }


}
function jm(){  //产品优势
    var hei =document.documentElement.scrollTop || document.body.scrollTop;
    var window_height=document.documentElement.clientHeight + hei;
    if(window_height>=$(".ad-gai").offset().top+400){
        //$(".ad-gai").addClass("animated fadeInLeft").css("animationDelay","1s")
        $(".ad-gai").animate({"marginLeft":"0px",opacity:1},1000,function(){
            boxanimate()
        })
    }
    if(window_height>=$(".sence").offset().top+600){
        var li=$(".sence li");
        li.animate({"marginLeft":"0px","opacity":1},1000)

    }
    if(window_height>=$(".adven-list").offset().top+500){
        li=$(".bz-list li")
        li.eq(0).animate({"opacity":1,"marginLeft":"0px"},800,function(){
            li.eq(1).animate({"opacity":1,"marginRight":"0px"},800,function(){
                li.eq(2).animate({"opacity":1,"marginLeft":"0px"},800,function(){
                    li.eq(3).animate({"opacity":1,"marginRight":"0px"},800,function(){
                        li.eq(4).animate({"opacity":1,"marginLeft":"0px"},800,function(){
                            li.eq(5).animate({"opacity":1,"marginRight":"0px"},800)
                        })
                    })
                })
            })
        })
    }
    if(window_height>=$(".smallbox").offset().top){
        $(".smallbox").animate({"opacity":"0.8","marginTop":"190px"},1200)
    }
    if(window_height>=$(".adven-liensr").offset().top+400){
        $(".adven-liensr").animate({"opacity":1,"marginLeft":"0px"},1500)
    }
    if(window_height>=$(".newadven-liensr").offset().top+400) {
        $(".newadven-liensr").animate({"opacity":1,"marginLeft":"0px"},1500)
    }
    if(window_height>=$(".adven-bot").offset().top+400) {
        $(".adven-bot img").animate({
            "marginTop":"0px",
            "opacity":1
        },1000,function(){
            $(".p-ins").fadeIn("slow")
            for(var i=0;i<3;i++) {
                $(".rowsli li").eq(i).animate({
                    "marginTop":"0px",
                    "opacity":"1"
                },2000)
            }
        })

    }
}
function news(){
    var hei =document.documentElement.scrollTop || document.body.scrollTop;
    var window_height=document.documentElement.clientHeight + hei;
    var li=$(".manage li");
    for(var i=0;i<li.length;i++){
        if(window_height>=li.eq(i).offset().top){
            li.eq(i).stop().animate({"opacity":"1","marginTop":"0px"},1000)
        }
    }

}//新闻中心
function boxanimate() {//产品优势积木
    var box= $(".animate div");
    box.eq(0).animate({top: "0px", "left":"0px",opacity: 1}, 300, function () {
        $(this).find("i").addClass("num-io").fadeIn("slow");
        box.eq(1).animate({top: "0px", "left":"0px", opacity: 1}, 300, function () {
            $(this).find("i").addClass("num-it").fadeIn("slow");
            box.eq(2).animate({top: "0px", "left":"0px", opacity: 1}, 300, function () {
                $(this).find("i").addClass("num-th").fadeIn("slow");
                box.eq(3).animate({top: "0px", "left":"0px", opacity: 1}, 300, function () {
                    $(this).find("i").addClass("num-fo").fadeIn("slow");
                    box.eq(4).animate({top: "0px", "left":"0px", opacity: 1}, 300, function () {
                        $(this).find("i").addClass("num-fi").fadeIn("slow");
                        box.eq(5).animate({top: "0px", "left":"0px", opacity: 1}, 300, function () {
                            $(this).find("i").addClass("num-si").fadeIn("slow");
                            box.eq(6).animate({top: "0px", "left":"0px", opacity: 1}, 300, function () {
                                $(this).find("i").addClass("num-se").fadeIn("slow");
                            })
                        })
                    })
                })
            })
        })
    })
}
var rushlist=[
    {
        "tit":"加盟优势",
        "p":"Advantage",
        "div":'mobel'
    },
    {
        "tit":"体验中心展示",
        "p":"Center",
        "div":'sclider'
    },
    {
        "tit":"加盟流程",
        "p":"Process",
        "div":'jm'
    },
    {
        "tit":"申请加盟",
        "p":"Application",
        "div":'sqj'
    }
]
function rush(){
    var hei =document.documentElement.scrollTop || document.body.scrollTop;
    //console.log(numtop)
    var tit=$(".rush-title h6"),p= $(".rush-title p"),sd= $(".spansolid");
    $(".map-rush a").click(function(){
        var num=$(this).parent().index();
        //$(".rush-title").animate({"top":25+60*num+"px"},100)
        //sd.animate({"top":25+60*num+"px"},100)
        tit.html(rushlist[num].tit);
        p.html(rushlist[num].p);
        $('body,html').animate({scrollTop:$("."+rushlist[num].div).offset().top},500,function(){
            setTimeout(function(){
                tit.html(rushlist[num].tit).removeClass("animated fadeInUp");
                p.html(rushlist[num].p).removeClass();
                lc(sd.stop())
            },500)
        })
    })
}
function lc(){
    var hei =document.documentElement.scrollTop || document.body.scrollTop;
    var window_height=document.documentElement.clientHeight + hei;
    var numtop=Math.round(hei/(document.body.clientHeight-780)*100);
    var tit=$(".rush-title h6"),p= $(".rush-title p");

    //$(".rush").fadeIn("slow",function(){rush(hei)})
    //var potop=$(".spansolid").position().top;
     if(hei>700){
         $(".rush").fadeIn("slow")
         $(".spansolid").animate({"top":3*numtop-51+"px"},10)
         if(hei>720){
             tit.html(rushlist[0].tit)
             p.html(rushlist[0].p)
         }
         if(hei>1449){
             tit.html(rushlist[1].tit)
             p.html(rushlist[1].p)

         }
         if(hei>=2085){
             tit.html(rushlist[2].tit)
             p.html(rushlist[2].p)
         }
         if(hei>2696){
             tit.html(rushlist[3].tit)
             p.html(rushlist[3].p)

         }
         $(".rush-title").animate({"top":3*numtop-51+"px"},10)
     }
     else if(hei<700){
         $(".rush").fadeOut("slow")
     }
     else{$(".rush").fadeOut("slow")}
    if(window_height>2585){
        jmlc()
    }

}
//加盟流程
var advenlist=[
    {
        "tit":"服务理念",
        "p":"profile",
        "div":'design'
    },
    {
        "tit":"服务支持",
        "p":"support",
        "div":'fuzc'
    },
    {
        "tit":"家具顾问",
        "p":"home",
        "div":"jsth"
    }
]
function advsh(){
    var hei =document.documentElement.scrollTop || document.body.scrollTop;
    //console.log(numtop)
    var tit=$(".rush-title h6"),p= $(".rush-title p"),sd= $(".spansolid");
    $(".map-rush a").click(function(){
        var num=$(this).parent().index();
        //$(".rush-title").animate({"top":25+60*num+"px"},100)
        //sd.animate({"top":25+60*num+"px"},100)
        tit.html(advenlist[num].tit);
        p.html(advenlist[num].p);
        $('body,html').animate({scrollTop:$("."+advenlist[num].div).offset().top},500,function(){
            setTimeout(function(){
                tit.html(advenlist[num].tit).removeClass("animated fadeInUp");
                p.html(advenlist[num].p).removeClass();
                adven(sd.stop())
            },500)
        })
    })
}
function adven(){
    var hei =document.documentElement.scrollTop || document.body.scrollTop;
    var window_height=document.documentElement.clientHeight + hei;
    var numtop=Math.round(hei/(document.body.clientHeight-780)*100);
    var tit=$(".rush-title h6"),p= $(".rush-title p");
    //$(".rush").fadeIn("slow",function(){rush(hei)})
    //var potop=$(".spansolid").position().top;
    if(hei>700){
        $(".rush").fadeIn("slow")

        if(hei>720){
            tit.html(advenlist[0].tit)
            p.html(advenlist[0].p)
        }
        if(hei>1449){
            tit.html(advenlist[1].tit)
            p.html(advenlist[1].p)
        }
        if(hei>=2085){
            tit.html(advenlist[2].tit)
            p.html(advenlist[2].p)
        }
        $(".rush-title").animate({"top":3*numtop-9+"px"},10)
        $(".spansolid").animate({"top":3*numtop-9+"px"},10)
    }
    else if(hei<700){
        $(".rush").fadeOut("slow")
    }
    else{$(".rush").fadeOut("slow")}
}

function jmlc(){
    var li=$(".lens li");
    var animateList=[
        function(){ li.eq(0).find("a").delay(100).animate({"opacity":1,"marginLeft":"0px"},300,queueList);  },
        function(){ li.eq(1).find("a").delay(100).animate({"opacity":1,"marginLeft":"0px"},300,queueList);  },
        function(){ li.eq(2).find("a").delay(100).animate({"opacity":1,"marginLeft":"0px"},300,queueList);  },
        function(){ li.eq(3).find("a").delay(100).animate({"opacity":1,"marginLeft":"0px"},300,queueList);  },
        function(){ li.eq(4).find("a").delay(100).animate({"opacity":1,"marginLeft":"0px"},300,queueList);  },
        function(){ li.eq(5).find("a").delay(100).animate({"opacity":1,"marginTop":"0px"},300,queueList);  },
        function(){ li.eq(6).find("a").delay(100).animate({"opacity":1,"marginLeft":"0px"},300,queueList);  },
        function(){ li.eq(7).find("a").delay(100).animate({"opacity":1,"marginLeft":"0px"},300,queueList);  },
        function(){ li.eq(8).find("a").delay(100).animate({"opacity":1,"marginLeft":"0px"},300);}
    ];
    $(document).queue('_queueList',animateList);
    var queueList=function(){
        $(document).dequeue('_queueList');
    };
    queueList();
}
function lsjn(i,j){
    var tit1=$(".right-list").eq(i),img=$(".lefttit").eq(j).find("img");
    function ai(se,q){
        /* tit1.find("p").eq(se).animate({"paddingTop":"0px","opacity":1},400,function(){
         img.eq(se).animate({"marginTop":"0px","opacity":1},400,q)
         });*/
        img.eq(se).animate({"marginTop":"0px","opacity":1},200,function(){
            tit1.find("p").eq(se).animate({"paddingTop":"0px","opacity":1},200,q)
        })
    }
    var animateList=[
        function(){ai(0,queueList);},
        function(){ai(1,queueList); },
        function(){ai(2,queueList);},
        function(){ai(3,queueList);},
        function(){ai(4,queueList);},
        function(){ai(5,queueList);},
        function(){ai(6,queueList);},
        function(){ai(7,queueList);},
        function(){ai(8,queueList);},
        function(){ai(9,queueList);},
        function(){ai(10,queueList);},
        function(){ai(11,queueList);},
        function(){ai(12);  }
    ];
    $(document).queue('_queueList',animateList);
    var queueList=function(){
        $(document).dequeue('_queueList');
    };
    queueList();
}
function Hover(obj, calssName) {
	obj.hover(function(){
		$(this).addClass(calssName);
	},function(){
		$(this).removeClass(calssName);
	})
}