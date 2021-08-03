/**
 * Created by 30947 on 2018/7/10.
 */
$(function(){
getWidth();
    goLeftRight();
    getImg();
})
//获取ul的宽度
function getWidth(){
    var li=$(".tailList_ul li").outerWidth(true);
    var num=$(".tailList_ul li").length;
    var ul_w=li*num+"px";
     $(".tailList_ul").css("width",ul_w);
}
//向左向右
function goLeftRight(){
    var li=$(".tailList_ul li").width();
    var ul_w=$(".tailList_ul").width();
    var div_w=$(".tail_ul_div").outerWidth(true);
    var ins=150;


    $("#pre").click(function(){
        $(".tailList_ul").animate({marginLeft:"-="+ins+"px"});
        var mgLeft=parseFloat($(".tailList_ul").css("marginLeft"));
        var r=parseFloat($(".tailList_ul").css("marginRight"))
        var res=ul_w-div_w;
        console.log(res);




       if(Math.abs(mgLeft)>=(res-100)){
           $(".tailList_ul").animate({marginLeft:mgLeft+"px"});

       }



    })
    $("#next").click(function(){
        $(".tailList_ul").animate({marginLeft:"+="+ins+"px"});
        var mrgin_left=parseFloat($(".tailList_ul").css("margin-left"));


        if(Math.abs(mrgin_left)>=0){
            $(".tailList_ul").animate({marginLeft:"0px"});

        }



    })
}
//点击获取图片
function getImg(){
    $(".tailList_ul li").click(function(){
        var src=$(this).find("img").attr("src");
       $("#img").attr("src",src);
    })

}
//返回功能
function back(){
    var index=layer.open();
    parent.layer.close(index);
}