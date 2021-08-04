/**
 * Created by Administrator on 2018/9/5.
 */
var count =true;
$(function(){
    $("body").click(function(){
        listClose();
    });
    radio();
    dimension();
    measure();

});
function cSett(){
    var Name = "抽取设置";
    var Href = "cSett.html";
    var data_id = $("#add").attr('data-id');
    window.parent.$.learuntab.myAddTab(Name, Href, data_id);
}
function radio(){
    $(".model-right-tabs input[type='radio']").each(function(){
        $(this).click(function(){
            if($(this).val() == 1){
                $("#cSett").show()
            }else{
                $("#cSett").hide()
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
/************************自定义SQL视图****************************/
function addSQL(){
    layer.open({
        type: 2,
        title: '自定义SQL视图',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['80%', '500px'],
        shadeClose: true,
        closeBtn: 2,
        content: 'SQL.html'
    })
}

function listClose(){
    $("#rename").hide();
    $("#ignore").hide();
    $("#dRename").hide();
    $("#dRgnore").hide();
}
function ignore(e){
    e.stopPropagation();
    $("#ignore").show();
    $("#rename").hide();
}
function rename(e){
    e.stopPropagation();
    $("#rename").show();
    $("#ignore").hide();
}
function dRgnore(e){
    e.stopPropagation();
    $("#dRgnore").show();
    $("#dRename").hide();
}
function dRename(e){
    e.stopPropagation();
    $("#dRename").show();
    $("#dRgnore").hide();
}
function addWD(){
    layer.open({
        type: 2,
        title: '添加字段计算（维度）',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['80%', '520px'],
        shadeClose: true,
        closeBtn: 2,
        content: 'dimension.html'
    })
}

function rederName(){
    layer.open({
        type: 2,
        title: '字段重命名',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['400px', '200px'],
        shadeClose: true,
        closeBtn: 2,
        content: 'rename.html'
    })
}
function neglect(){
    layer.open({
        type: 2,
        title: '勾选需要忽略的字段',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['600px', '540px'],
        shadeClose: true,
        closeBtn: 2,
        content: 'neglect.html'
    })
}