$(document).ready(function(){ 
  if($("#imgs").width() > 850){ 
    $("#imgs").attr("width", 850); 
  } 
  if($('.cen_text').find('img')){ 
    $('.cen_text').find('img').each(function(index, element){ 
      if($(this).width() > 850){ 
        $(this).attr("width", 850); 
      } 
    }); 
  } 
}); 