
$(function () {
  $('.propage li a .liulan span').each(function(index){
    $(this).hover(function(){
        $(this).stop(true,false).addClass('on')
       $(this).stop(true,false).find('.share').show(100)
    },function(){
        $(this).removeClass('on')
       $(this).find('.share').hide(100)
    })
  })
  
  



  if($('#tabBox1').length>0){
    TouchSlide( { slideCell:"#tabBox1",

        endFun:function(i){ //¸ß¶È×ÔÊÊÓ¦
          // $('#tabBox1-bd').parent().height($('#tabBox1-bd').children('.con').eq(i).height())
          var bd = document.getElementById("tabBox1-bd");
          bd.parentNode.style.height = bd.children[i].children[0].offsetHeight+"px";
          if(i>0)bd.parentNode.style.transition="200ms";//Ìí¼Ó¶¯»­Ð§¹û
        }

      } );
  }
  
  $('.search .txt1').focus(function(){
      if($(this).val()=="ÇëÊäÈë¹Ø¼ü×Ö"){
        $(this).val("")
      }
  });
  $('.search .txt1').blur(function(){
      if($(this).val()==""){
        $(this).val("ÇëÊäÈë¹Ø¼ü×Ö")
      }
  });
  $('.class-top .txt1').focus(function(){
      if($(this).val()=="ÇëÊäÈë¹Ø¼ü×Ö"){
        $(this).val("")
      }
  });
  $('.class-top .txt1').blur(function(){
      if($(this).val()==""){
        $(this).val("ÇëÊäÈë¹Ø¼ü×Ö")
      }
  });
  $('.carousel-inner>.item>a>img').each(function(index){
      var iB='<span>'+'<i>'+'0'+'</i>'+(index+1)+'</span>'+'<strong>'+'/'+'</strong>'+'<i>'+'0'+'</i>'+$('.carousel-inner>.item>a>img').length
      $('#myCarousel .carousel-inner .item em').eq(index).html(iB)
  })

$('#myCarousel1').carousel({
    interval: 5000
});
$(".classfiy").click(function(){
    if($(".navs").is(":hidden")){
      $(".navs").slideDown();
      $(this).html('分类 -')
      return false;
    }else{
      $(".navs").slideUp();
      $(this).html('分类 +')
      return false;
    } 
  });
(function(){
      $('.mtree>li>a').click(function(){
        $(this).parent('li').children('ul').toggle(100);
        $(this).parent('li').siblings('li').children('ul').slideUp();
        $(this).toggleClass('act_firstli');
        $(this).parent('li').siblings('li').children('a').removeClass('act_firstli')
      })
      $('.mtree>li>ul>li>a').click(function(){
        $(this).parent('li').children('ul').toggle(100);
        $(this).parent('li').siblings('li').children('ul').slideUp();
        $(this).toggleClass('act_secondli');
        $(this).parent('li').siblings('li').children('a').removeClass('act_secondli')
      })
  })();
 (function(){
      $('.nynav>ul>li>a').click(function(){
        $(this).parent('li').children('ul').toggle(100);
        $(this).parent('li').siblings('li').find('ul').slideUp();
        $(this).parent('li').addClass('current');
        $(this).parent('li').siblings('li').removeClass('current')
      })
      $('.nynav>ul>li>ul>li>a').click(function(){
        $(this).parent('li').find('ul').toggle(100);
        $(this).parent('li').siblings('li').find('ul').slideUp();
        $(this).parent('li').addClass('act_secondli');
        $(this).parent('li').siblings('li').removeClass('act_secondli')
      })
  })()
// alert($('.news_swiper .swiper-wrapper .swiper-slide').height())
  function windowWidth(){
        $('.section1 ul li.li2').height($('.section1 ul li.li1').height())
        if($(window).width()>974){
          $('.searchpage li a .info').height($('.searchpage li a i').height())
          if($('.section3 ul li a .img1').complete){
            $('.section3 ul li a').height($('.section3 ul li a .img1').height())
          } else{
            $('.section3 ul li a .img1').onload = function(){
              $('.section3 ul li a').height($('.section3 ul li a .img1').height())}
          };
          
          $('.prodetail_nr').height($('.prodetail_gd').height())
          var swiper = new Swiper('.news_swiper', {
              pagination: '.swiper-pagination',
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
              slidesPerView: 2,
              paginationClickable: true,
              spaceBetween: 30
          });
        } else{
          // alert(1)
          $('.searchpage li a .info').height('auto')
          $('.section3 ul li a').height($('.section3 ul li a .img2').height())
          $('.prodetail_nr').height('auto')
          var swiper = new Swiper('.news_swiper', {
              pagination: '.swiper-pagination',
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
              slidesPerView: 1,
              paginationClickable: true
              // spaceBetween: 30
          });
        }
    }

  windowWidth()

  jQuery(window).resize(function () {
    windowWidth();
  });






  $(".kz").each(function(){   
    var maxwidth=parseInt($(this).attr("data-limit"));
    if($(this).text().length>maxwidth){   
      $(this).text($(this).text().substring(0,maxwidth));    
      $(this).html($(this).html()+'...');   
    }    
  });


     //ÊÖ»úbanner¹ö¶¯
     var mySwiper1 = new Swiper('.swiper-banner',{
      loop:true,
      autoplay:3000,
      calculateHeight : true,
       nextButton: '.swiper-banner .swiper-button-next',
        prevButton: '.swiper-banner .swiper-button-prev',
      pagination : '.pagination',
       paginationClickable: true
     });
     

   $("#header .nav_box .yiji").hover(function () {
        $(this).find(".libox").stop(true, false).slideDown();
    },function () {
        $(this).find(".libox").slideUp();
    });
 

   //Òþ²Øµ¼º½¸úwrapµÄÇÐ»»
    $(".mol_navbutton,.navbtn,.navbtn1").click(function(){
      $(".class").removeClass("page-prev").addClass("page-in");
      $(".wrap").removeClass("page-active").addClass("page-next page-in")
      $(".opacity2").show()
      // pageSlideOver();
    })
     function xs(oDiv){
        oDiv.on('click touchstart',function(){
            $(".class").addClass("page-prev page-out")
            $(".wrap").removeClass("page-next").addClass(" page-out")
            $(".opacity2").hide()
            $(".newsclass").removeClass("show")
            // pageSlideOver();
            return false;
        });
     }
     xs($(".opacity2"))
     xs($(".close"))
    // $(".opacity2").on('click touchstart',function(){
    //   $(".class").addClass("page-prev page-out")
    //   $(".wrap").removeClass("page-next").addClass(" page-out")
    //   $(".opacity2").hide()
    //   $(".newsclass").removeClass("show")
    //   // pageSlideOver();
    //   return false;
    // });
    // ¶þ¼¶µ¼º½ÏÂÀ­
      $(".ericon").click(function(){
          $(this).toggleClass("xz").parents().siblings().find(".ericon").removeClass("xz");
          $(this).parents().siblings().find(".menu_body").hide(300);
          $(this).siblings(".menu_body").slideToggle()
              
      })
    // Èý¼¶ÏÂÀ­
      $(".thricon").click(function(){
          $(this).toggleClass("tz").parents().siblings().find(".thricon").removeClass("tz");
          $(this).parents().siblings().find(".thr_body").hide(300);
          $(this).siblings(".thr_body").slideToggle()
              
      })
    
    // ÄÚÒ³µ¼º½
    $(window).scroll(function () {
        var sT = $(window).scrollTop();
        if (sT >300) {
            $(".head_ny").addClass("head_on");
        } else {
            $(".head_ny").removeClass("head_on");
        }

    });
    
    
    // Êó±ê¹ö¶¯½¥Èë
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };




    $('.block').smoove({offset:'50%'});

    
    
});
!function(a, b, c) {
  a.fn.smoove = function(b) {
    return a.fn.smoove.init(this, a.extend({}, a.fn.smoove.defaults, b)), this
  }, a.fn.smoove.items = [], a.fn.smoove.loaded = !1, a.fn.smoove.defaults = {
    offset: 150,
    opacity: 0,
    transition: "all 1s ease, opacity 1.5s ease",
    transformStyle: "preserve-3d",
    transformOrigin: !1,
    perspective: 1e3
  }, a.fn.smoove.init = function(d, e) {
    function f(a, b, c) {
      function d(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
      }
      for (var e = ["webkit", "moz", "ms", "o"], f = {}, g = 0; g < e.length; g++) c && (b = b.replace(c, "-" + e[g] + "-" + c)), f[d(e[g]) + d(a)] = b;
      return f[a] = b, f
    }
    function g(c) {
      for (var d = 0; d < a.fn.smoove.items.length; d++) {
        var e = a.fn.smoove.items[d],
          g = e.params,
          h = a(b).height(),
          i = !c || "down" === c && "1" === e.css("opacity") ? 0 : g.offset,
          j = a(b).scrollTop() + h - e.data("top");
        if ("string" == typeof i && i.indexOf("%") && (i = parseInt(i) / 750 * h), i > j) {
          g.opacity !== !1 && e.css({
            opacity: g.opacity
          });
          for (var k = [], l = ["move", "move3D", "moveX", "moveY", "moveZ", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "skew", "skewX", "skewY"], m = 0; m < l.length; m++)"undefined" != typeof g[l[m]] && (k[l[m]] = g[l[m]]);
          var n = "";
          for (var o in k) n += o.replace("move", "translate") + "(" + k[o] + ") ";
          n && (e.css(f("transform", n)), e.parent().css(f("perspective", g.perspective)), g.transformOrigin && e.css(f("transformOrigin", g.transformOrigin)))
        } else e.css("opacity", 1).css(f("transform", ""))
      }
    }
    if (d.each(function() {
      var b = a(this),
        c = b.params = a.extend({}, e, b.data());
      b.params.opacity = b.params.opacity / 100, b.data("top", b.offset().top), c.transition = f("transition", c.transition, "transform"), b.css(c.transition), a.fn.smoove.items.push(b)
    }), !a.fn.smoove.loaded) {
      a.fn.smoove.loaded = !0;
      var h, i = !1,
        j = 0,
        k = a(b).height(),
        l = a(b).width(),
        m = a(c).height();
      a("body").width() === a(b).width() && a("body").css("overflow-x", "hidden"), a(b).resize(function() {
        clearTimeout(h), h = setTimeout(function() {
          var d = a(b).height(),
            e = a(b).width(),
            h = k > d ? h = "up" : "down",
            i = a.fn.smoove.items;
          if (k = d, l !== e) {
            for (var j = 0; j < i.length; j++) i[j].css(f("transform", "")).css(f("transition", ""));
            var n = setInterval(function() {
              var d = a(c).height();
              if (d === m) {
                b.clearInterval(n);
                for (var e = 0; e < i.length; e++) i[e].data("top", i[e].offset().top), i[e].css(i[e].params.transition);
                g(h)
              }
              m = d
            }, 500)
          } else g(h);
          l = e
        }, 500)
      }), a(b).on("load", function() {
        g(), a(b).scroll(function() {
          i = !0
        }), setInterval(function() {
          if (i) {
            i = !1;
            var c = a(b).scrollTop(),
              d = j > c ? d = "up" : "down";
            j = c, g(d)
          }
        }, 250)
      })
    }
  }
}(jQuery, window, document);