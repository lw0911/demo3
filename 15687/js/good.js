/**
 * Created by 30947 on 2018/7/10.
 */
$(function(){
typeHover();
})
//产品类型页面
//鼠标悬停修图片路径
function typeHover(){
    $("#good_ul li").hover(function(){
        $(this).find("img").attr("src","img/pp_v1h.png");

    },function(){
        $(this).find("img").attr("src","img/pp_v1.png");

    })

}

function tail_open(id){
    layer.open({
        type: 2,
        title: '信息详情页面',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['1000px', '610px'],
        shadeClose: true,
        closeBtn: 1,
        content: 'good_tail.html'
    });
}
