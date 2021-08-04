
//重写alert
window.alert = function(msg, callback){
	parent.layer.alert(msg, function(index){
		parent.layer.close(index);
		if(typeof(callback) === "function"){
			callback("ok");
		}
	});
};

//重写confirm式样框
window.confirm = function(msg, callback){
	parent.layer.confirm(msg, {btn: ['确定','取消']},
	function(){//确定事件
		if(typeof(callback) === "function"){
			callback("ok");
		}
	});
};

//选择一条记录
function getSelectedRow(name) {
	var selection = $("#" + name).bootstrapTable('getSelections');
	if(selection.length == 1){
		return selection[0].Id
	}else{
		alert("请选择一条数据！")
	}
}

//选择多条记录
function getSelectedRows(name) {
	var selection = $("#" + name).bootstrapTable('getSelections');
	if(selection.length >= 1){
		var ids=[];
		for(var i=0;i<selection.length;i++){
			ids.push(selection[i].id)
		}
		return JSON.stringify(ids);
	}else{
		alert("请至少选择一条数据！")
	}
}