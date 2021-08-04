/**
 * Created by Administrator on 2018/9/5.
 */
var count =true;
$(function(){
    $("body").click(function(){
        timeClose();
        listClose();
    });
    list();
    tabs();
    timeChoose();
    table();
});

/************************list功能函数****************************/
function list(){
    $("#list li").each(function(index){
        $(this).click(function(){
            $(this).addClass("list-active").siblings("li").removeClass("list-active");
            rightShow();
        });
        $(this).mousedown(function(e){
            stop();
            if(e.which === 3){
                $("#list-btn").show().css({"left":event.offsetX,"top":event.offsetY +index*36 })
            }else if(e.which === 1){
                listClose()
            }
        })

    })
}
/************************connection-right部分显示****************************/
function rightShow(){
    $(".connection-right").show()
}
/************************阻止右键默认事件****************************/
function stop(){
    document.oncontextmenu = function(e){
        return false;
    };
}
/************************list-btn按钮消失****************************/
function listClose(){
    $("#list-btn").hide()
}
/************************添加连接界面****************************/
function add(){
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
/************************tab选项卡功能****************************/
function tabs(){
    $(".connection-right-tabs ul li").each(function(index){
        $(this).click(function(){
            $(this).addClass("tabs-active").siblings("li").removeClass("tabs-active");
            $(".connection-right-content .right-content-items").eq(index).show().siblings("div").hide()
        })
    })
}
/************************时间开起功能****************************/
function timeOpen(e){
    e.stopPropagation();
    if(count){
        $(".list-ul").slideDown();
        count = false;
    }else{
        timeClose();
        count = true;
    }
}
/************************时间关闭功能****************************/
function timeClose(){
    $(".list-ul").hide()
}
/************************时间选择功能****************************/
function timeChoose(){
    $(".list-ul ul li").each(function(){
        $(this).click(function(){
            count = true;
            $(".time-text").text($(this).text());
            if($(this).attr("name") == 1){
                $(".base-items-time").show()
            }else{
                $(".base-items-time").hide()
            }
        })
    })
}
/************************界面表格功能****************************/
function table(){
    $(".table-btn ul li").each(function(index){
        $(this).click(function(){
            $(this).addClass("table-btn-active").siblings("li").removeClass("table-btn-active");
            $(".table-content>div").eq(index).show().siblings("div").hide()
        })
    });
    $('#table-old').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/table-old.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 8,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
        columns: [
            {
                title: "表名",
                field: 'id',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '是否抽取',
                field: 'title',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '状态',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '操作',
                field: 'opear',
                width:200,
                align: 'center',
                formatter: function (value, row) {
                    var e = '<button  href="javascript:void(0)"  class="btn btn-xs btn-primary" onclick="extract(\'' + row.id + '\')">抽取设置</button> ';
                    var d = '<button  href="javascript:void(0)"  class="btn btn-xs btn-success" onclick="implement(\'' + row.id + '\')">立即执行</button> ';
                    var f = '<button  href="javascript:void(0)"  class="btn btn-xs btn-danger" onclick="tableDel(\'' + row.id + '\')">删除</button> ';
                    return e+d+f ;
                }
            }
        ]
    });
    $('#table-myself').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/log.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 8,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
        columns: [
            {
                title: "ID",
                field: 'id',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '表名',
                field: 'title',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '类型',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '创建人',
                field: 'type',
                align: 'center'
            },
            {
                title: '创建时间',
                field: 'date',
                align: 'center'
            },
            {
                title: '是否抽取',
                field: 'oper',
                align: 'center'
            },
            {
                title: '状态',
                field: 'date',
                align: 'center'
            },
            {
                title: '操作',
                field: 'oper',
                align: 'center'
            }
        ]
    });
    $('#table-person').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/table-person.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 8,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
        columns: [
            {
                title: "数据模型名称/报告名称",
                field: 'id',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '创建者',
                field: 'title',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '创建时间',
                field: 'date',
                align: 'center',
                valign: 'middle'
            }
        ]
    });
    $('#table-log').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/table-log.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 8,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
        columns: [
            {
                title: "操作时间",
                field: 'date',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '操作者',
                field: 'title',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '帐号',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '操作类型',
                field: 'id',
                align: 'center'
            }
            //{
            //    title: '执行结果',
            //    field: 'result',
            //    align: 'center',
            //    formatter: function (cellval, row) {
            //        if (cellval =='失败'){
            //            return '<div  style="color:red">'+cellval+'</div>';
            //        } else  if (cellval =='成功'){
            //            return '<div  style="color:green">'+cellval+'</div>';
            //        }else {
            //            return cellval;
            //        }}
            //}
        ]
    });
    $('#table-extract').bootstrapTable({
        method: "get",
        striped: true,
        singleSelect: false,
        url: "json/table-extract.json",
        dataType: "json",
        pagination: true, //分页
        pageSize: 8,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
        columns: [
            {
                title: "序号",
                field: 'id',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '任务频率',
                field: 'title',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '任务日期',
                field: 'person',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '任务时间',
                field: 'type',
                align: 'center'
            },
            {
                title: '开始日期',
                field: 'date',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '终止日期',
                field: 'date',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '操作',
                field: 'opear',
                width:200,
                align: 'center',
                formatter: function (value, row) {
                    var e = '<button  href="javascript:void(0)"  class="btn btn-xs btn-primary" onclick="extract(\'' + row.id + '\')">编辑</button> ';
                    var f = '<button  href="javascript:void(0)"  class="btn btn-xs btn-danger" onclick="tableDel(\'' + row.id + '\')">删除</button> ';
                    return e+f ;
                }
            }
            //{
            //    title: '执行结果',
            //    field: 'result',
            //    align: 'center',
            //    formatter: function (cellval, row) {
            //        if (cellval =='失败'){
            //            return '<div  style="color:red">'+cellval+'</div>';
            //        } else  if (cellval =='成功'){
            //            return '<div  style="color:green">'+cellval+'</div>';
            //        }else {
            //            return cellval;
            //        }}
            //}
        ]
    });
}
/************************界面表格抽取设置****************************/
function extract(id){
    $(".connection-right-extract").show().siblings('div').hide();
}
function extractBack(){
    $(".connection-right-base").show().siblings('div').hide();
}
/************************界面新增抽取设置时间设置****************************/
function addExtract(){
    layer.open({
        type: 2,
        title: '添加定时任务',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['500px', '450px'],
        shadeClose: true,
        closeBtn: 2,
        content: 'add-extract.html'
    })
}
/************************设置调取界面****************************/
function sett(){
    return 0
}
