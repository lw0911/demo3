$(document).ready(function(){ 
  if($("#imgs").width() > 820){ 
    $("#imgs").attr("width", 820); 
  } 
  if($(".ab_text").find("img")){ 
    $(".ab_text").find("img").each(function(index, element){ 
      if($(this).width() > 820){ 
        $(this).attr("width", 820); 
      } 
    }); 
  } 
}); 