/**
 * Created by 30947 on 2018/7/10.
 */
$(function(){
chageList();
    page();

})

//栏目切换
function chageList(){
    $("#about_list li").click(function(){
        var ins=$(this).index();
        $(this).find("a").addClass("aboutActive").end();
        $(this).siblings().find("a").removeClass("aboutActive");
        $(".aboutRight_con .aboutRight_conChild").eq(ins).show().siblings().hide();

    })}
    function page(){
        $(".page").Page({
            totalPages: 2,//分页总数
            liNums: 7,//分页的数字按钮数(建议取奇数)
            activeClass: 'activP', //active 类样式定义
            callBack : function(page){
                //console.log(page)
            }
        });

    }
