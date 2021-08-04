/**
 * Created by Administrator on 2016/8/4.
 */
// 加载数据
var SerID;
function LOan() {
    $("#table").bootstrapTable({
        method:"get",//请求方式
        url:"",
        striped:true,//是否显示行间隔色
        cache:false,//是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性
        pagination:true,//是否显示分页（*）
        sortable:false,//是否启用排序
        pageSize:10,
        pageNumber:1,
        search:false,
        contentType: "application/x-www-form-urlencoded",//用request.form 方式
        queryParams:dataParams,
        sidePagination: "server", //服务端请求
        uniqueId: "id",   //每一行的唯一标识，一般为主键列
        cardView: false,   //是否显示详细视图
        detailView: false,   //是否显示父子表
        columns:[
            {
                checkbox:"true",
                field:"check",
                align:"center",
                valign:"middle"
            }
        ]




    })
    
}