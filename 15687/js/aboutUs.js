/**
 * Created by 30947 on 2018/7/10.
 */
$(function(){
chageList();
    baiMap();
})

//栏目切换
function chageList(){
    $("#about_list li").click(function(){
        var ins=$(this).index();
        $(this).find("a").addClass("aboutActive").end();
        $(this).siblings().find("a").removeClass("aboutActive");
        $(".aboutRight_con .aboutRight_conChild").eq(ins).show().siblings().hide();

    })
}
function baiMap(){
    //加载百度地图
    var map=new BMap.Map("mapbox");
    //初始化地图,设置中心点坐标和地图级别
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));
    //设置地图显示的城市
    map.setCurrentCity("成都");
    //天启鼠标滚动，缩放
    map.enableScrollWheelZoom(true);
    //左上角添加比例尺
    var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
    map.addControl(top_left_control);
    //左上角添加默认的平移控件
    var top_left_navigation = new BMap.NavigationControl();
    map.addControl(top_left_navigation);
    //创建点
    var marker = new BMap.Marker(new BMap.Point(116.404, 39.915));
    map.addOverlay(marker);
    //添加窗口
    var sContent =
        "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>" +
        "<img style='float:right;margin:4px' id='imgDemo' src='../img/com.jpg' width='139' height='104' title='天安门'/>" +
        "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
        "</div>";
    //创建信息窗口对象
    var infoWindow = new BMap.InfoWindow(sContent);

    //点击坐标点，弹出窗口
    marker.addEventListener("click", function() {
        this.openInfoWindow(infoWindow);
        //图片加载完毕重绘infowindow
        document.getElementById('imgDemo').onload = function () {
            infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        }
    });
}