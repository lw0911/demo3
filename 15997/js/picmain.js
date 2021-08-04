$(document).ready(function(){ 
  if($("#imgs").width() > 900){ 
    $("#imgs").attr("width", 900); 
  } 
  if($('.xwnymmain').find('img')){ 
    $('.xwnymmain').find('img').each(function(index, element){ 
      if($(this).width() > 900){ 
        $(this).attr("width", 900); 
      } 
    }); 
  } 
}); 