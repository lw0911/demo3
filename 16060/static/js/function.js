/**
 * @author LiHuYong
 * @date 2018/12/8
 * @Description: 通用方法
 *
*/

$(function(){
    setPlatform(); // 设置当前设备类型
    changeHeaderStatus(); // 防止刚进入页面导航条处于透明状态

    // 重置当前设备自适应类型
    $(window).resize(function(){
        setPlatform();
    });

    // 滑动到锚点
    $("[data-scrollstart]").click(function(){
        var _start = $(this).data("scrollstart");
        var _end = $("[data-scrollend='"+ _start +"']").offset().top;
        $("html,body").animate({"scrollTop":_end - 110}); // 除去顶部导航高度 避免被导航挡住
    });

    // 返回顶部
    $("[data-back2top]").click(function(){
        $("html,body").animate({"scrollTop": 0});
    });

    // tab切换mouseover事件 data-tabchange="test" && data-tabresult="test"
    $("[data-tabchange] li").mouseover(function(){
        var _tag = $(this).parent("[data-tabchange]").data("tabchange");
        $(this).addClass("active").siblings().removeClass("active");
        $("[data-tabresult='"+ _tag +"']").children("li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });

    // tab切换click事件 data-tabclick="test" && data-tabresult="test"
    $("[data-tabclick] li").click(function(){
        var _tag = $(this).parent("[data-tabclick]").data("tabclick");
        $(this).addClass("active").siblings().removeClass("active");
        $("[data-tabresult='"+ _tag +"']").children("li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });

    // PC端登录之后 导航箭头交互效果
    $("#login_status").click(function(){
        $("#login_status_switch").toggle();
        $(this).find(".icon-icon_xiala").toggleClass("rotate180deg");
    });

    // 导航背景颜色变化事件
    $(window).scroll(function(){
        debounce(changeHeaderStatus, window);
    });

    // 移动端导航展开收缩效果
    $("#mobile_nav_toggle").click(function(){
        $("#h_bottom").slideToggle();
    });
});


/**
 * @author LiHuYong
 * @date 2018/12/14
 * @Description: 变换header背景颜色（仅PC生效） header没有.head-without-bg的时候触发
*/
function changeHeaderStatus(){
    if(TESTIN_GLOBLE.PLATFORM === 3 && !$("header").hasClass("head-without-bg")){
        if($(window).scrollTop() > 50){
            $(".h-bottom").addClass("h-bottom-fixed fadeIn");
        }else{
            $(".h-bottom").removeClass("h-bottom-fixed fadeIn");
        }
    }
}


/**
 * @author LiHuYong
 * @date 2018/12/8
 * @Description: 函数去抖
*/
function debounce(method, context) {
    clearTimeout(method.tFunciton);
    method.tFunciton = setTimeout(function () {
        method.call(context);
    }, 100);
}

/**
 * @author LiHuYong
 * @date 2018/12/10
 * @Description: 根据可视区的宽度设置当前设备类型
*/
function setPlatform() {
    if (window.outerWidth > 1201) {
        TESTIN_GLOBLE.PLATFORM = 3; // 电脑
    } else if (window.outerWidth > 768 && window.outerWidth <= 1200) {
        TESTIN_GLOBLE.PLATFORM = 2; // 平板
    } else {
        TESTIN_GLOBLE.PLATFORM = 1; // 手机
    }
}

/**
 * @author LiHuYong
 * @date 2018/12/22
 * @Description: ajax
*/
function sendAjax(url, data, successFun, errorFun, type, dataType, async) {
    $.ajax({
        url: url,
        type: type || "POST",
        data: data,
        xhrFields: {
            withCredentials: true // 携带跨域cookie
        },
        dataType: dataType || "JSON",
        async: async || true,
        success: function (data) {
            if (successFun) {
                successFun(data);
            }
        },
        error: function (data) {
            if (errorFun) {
                errorFun(data);
            }
        }
    });
}

/**
 * @author LiHuYong
 * @date 2018/12/22
 * @Description: todo ...ajax promise
*/
// function ajaxPromise(){ ... }