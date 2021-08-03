/**
 * Created by 30947 on 2018/7/10.
 */
$(function(){
openCon();

})

//打开内容
function openCon(){
    $(".enter_table td").click(function(){

        $(this).parent().next(".contr_tr").toggle();
        $(this).parent().siblings("tr").next(".contr_tr").hide();



    })
}

