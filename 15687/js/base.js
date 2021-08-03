/**
 * Created by 30947 on 2018/7/3.
 */
//导航条子菜单显示与隐藏
function nav(){
    $(".nav>ul>li").hover(function(){
        $(this).find("ul").slideDown();
        return false;
    },function(){
        $(this).find("ul").slideUp();
        return false;
    })
}
//图片切换
function bigImg(){
    var timer=null;
    var len=$(".bigImg ul li").length;
    var i=0;
    setInterval(function(){
        if(i<len){
            $(".bigImg>ul>li").eq(i).fadeIn(1500).siblings().fadeOut(2000);
            $(".topIcon>span").eq(i).addClass("liActive").siblings().removeClass("liActive");
            i++
        }
        else{
            i=0;
        }

    },2000)






}
//图片滚动
function phSroll(){
   var li=$(".goodUl li");
    var li_wh=li.width();
    var timer=null;
    ul_widht=li.length*li.width();
    $(".goodUl").css("width",ul_widht+"px");
    var off=0;
    var scr_w=$(window).width();
    var off_w=li_wh*6-scr_w;


    clearInterval(timer);
    timer=setInterval(function(){
        off+=150;
        $(".goodUl").css('marginLeft',-off+"px");

        if(off>780){
            off=0;
        }
    },1000)

}


$(function(){
   nav();
    bigImg();
    phSroll();

})
