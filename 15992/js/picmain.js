$(document).ready(function(){ 
  if($("#imgs").width() > 815){ 
    $("#imgs").attr("width", 815); 
  } 
  if($('.sub_right .art .text ').find('img')){ 
    $('.sub_right .art .text ').find('img').each(function(index, element){ 
      if($(this).width() > 815){ 
        $(this).attr("width", 815); 
      } 
    }); 
  } 
}); 