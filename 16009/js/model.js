/**
 * Created by Administrator on 2018/9/5.
 */
var count =true;
$(function(){
    $("body").click(function(){
        listClose();
    });
    list();
    listUl();
    dimension();
    measure();
});

/************************list功能函数****************************/
function list(){
    $("#list>li").each(function(index){
        $(this).click(function(){
            if($(this).hasClass("list-active")){
                $(this).removeClass("list-active").find(".list-item-ul").slideUp();
            }else{
                $(".list-item-ul").slideUp().parent().removeClass("list-active");
                $(this).addClass("list-active").find(".list-item-ul").slideDown();
            }
        });
        $(this).mousedown(function(e){
            stop();
            if(e.which === 3){
                $("#list-btn-ul").hide();
                $("#list-btn").show().css({"left":event.offsetX,"top":event.offsetY +index*36 })
            }else if(e.which === 1){
                listClose()
            }
        })
    })
}
/************************纬度list功能函数****************************/
function dimension(){
    $(".dimension-nav").each(function(){
        $(this).click(function(){
            if($(this).hasClass("dimension-active")){
                $(this).removeClass("dimension-active").siblings(".dimension-content").slideDown();
            }else{
                $(this).addClass("dimension-active").siblings(".dimension-content").slideUp();
            }
        });
    });
    $(".dimension-content ul li").each(function(){
        $(this).click(function(){
            $(this).addClass("dimension-content-active").siblings("li").removeClass("dimension-content-active");
        })
    })
}
/************************度量list功能函数****************************/
function measure(){
    $(".measure-nav").each(function(){
        $(this).click(function(){
            if($(this).hasClass("measure-active")){
                $(this).removeClass("measure-active").siblings(".measure-content").slideDown();
            }else{
                $(this).addClass("measure-active").siblings(".measure-content").slideUp();
            }
        });
    });
    $(".measure-content ul li").each(function(){
        $(this).click(function(){
            $(this).addClass("measure-content-active").siblings("li").removeClass("measure-content-active");
        })
    })
}
/************************list-item-ul功能函数****************************/
function listUl(){
    $(".list-item-ul ul li").each(function(index){
        $(this).click(function(e){
            e.stopPropagation();
            $(".list-item-ul ul li").removeClass("list-item-ul-active");
            $(this).addClass("list-item-ul-active");
            rightShow();
        });
        $(this).mousedown(function(e){
            e.stopPropagation();
            stop();
            if(e.which === 3){
                $("#list-btn").hide();
                $("#list-btn-ul").show().css({"left":event.offsetX,"top":event.offsetY +(index+1)*36 })
            }else if(e.which === 1){
                listClose()
            }
        })
    })
}
/************************connection-right部分显示****************************/
function rightShow(){
    $(".model-right").show()
}
/************************阻止右键默认事件****************************/
function stop(){
    document.oncontextmenu = function(e){
        return false;
    };
}
/************************list-btn按钮消失****************************/
function listClose(){
    $("#list-btn").hide();
    $("#list-btn-ul").hide();
    $("#add-model").hide()
}
/************************添加模型界面****************************/
function add(e){
    e.stopPropagation();
    $("#add-model").show();
}
/************************新建模型****************************/
function built(){
    layer.open({
        type: 2,
        title: '新建模型',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['500px', '400px'],
        shadeClose: true,
        closeBtn: 2,
        content: 'built.html'
    })
}
/************************新建文件夹****************************/
function book(){
    layer.open({
        type: 2,
        title: '新建文件夹',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['500px', '200px'],
        shadeClose: true,
        closeBtn: 2,
        content: 'book.html'
    })
}
/************************数据连接界面****************************/
function addData(){
    layer.open({
        type: 2,
        title: '选择数据连接',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['500px', '400px'],
        shadeClose: true,
        closeBtn: 2,
        content: 'data.html'
    })
}

/************************新建数据连接界面****************************/
function newBuiltData(){
    layer.open({
        type: 2,
        title: '添加数据连接',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['600px', '200px'],
        shadeClose: true,
        closeBtn: 2,
        content: 'add-connection.html'
    })
}

/************************设置调取界面****************************/
function sett(){
    return 1
}
/************************模型新建界面****************************/
function addModel(){
    var Name = "新增模型";
    var Href = "addModel.html";
    var data_id = $("#add").attr('data-id');
    window.parent.$.learuntab.myAddTab(Name, Href, data_id);
}