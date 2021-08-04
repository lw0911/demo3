/**
 * Created by Administrator on 2018/9/11.
 */
var week=[],month=[];
$(function(){
    $("body").click(function(){
        $(".week-list").hide();
        $(".month-list").hide()
    });
    weekList();
    monthList();
});
function selectChange(){
    var number = $("#extract-select").val();
    $("#extract-date>div").eq(number).show().siblings("div").hide();
}
function cancel() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}
function extractWeek(e){
    e.stopPropagation();
    $(".week-list").show();
}
function extractMonth(e){
    e.stopPropagation();
    $(".month-list").show();
}
function weekList(){
    $(".week-list li").each(function(){
        $(this).click(function(e){
            e.stopPropagation();
            if($(this).hasClass("week-list-active")){
                $(this).removeClass("week-list-active");
                $(this).find("span").hide();
                week.splice($.inArray($(this).find('p').html(),week),1);
                $("#week").val(week.join(";"))
            }else{
                $(this).addClass("week-list-active");
                $(this).find("span").show();
                week.push($(this).find('p').html());
                $("#week").val(week.join(";"))
            }
        })
    });
}
function monthList(){
    $(".month-list li").each(function(){
        $(this).click(function(e){
            e.stopPropagation();
            if($(this).hasClass("month-list-active")){
                $(this).removeClass("month-list-active");
                $(this).find("span").hide();
                month.splice($.inArray($(this).find('p').html(),month),1);
                $("#month").val(month.join(";"))
            }else{
                $(this).addClass("month-list-active");
                $(this).find("span").show();
                month.push($(this).find('p').html());
                $("#month").val(month.join(";"))
            }
        })
    });
}