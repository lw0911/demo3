function isMobile(ua) {
  if (!ua && typeof navigator != "undefined") ua = navigator.userAgent;
  if (ua && ua.headers && typeof ua.headers["user-agent"] == "string") {
    ua = ua.headers["user-agent"];
  }
  if (typeof ua != "string") return false;

  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      ua
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      ua.substr(0, 4)
    )
  );
}
function isContains(e, i) {
  return e.indexOf(i) >= 0;
}
function bodyScroll(e) {
  e.preventDefault();
}
$(function() {
  var e = window.location.pathname;
  if (
    ("/product" == e ||
    "/table" == e ||
    "/chair" == e ||
    "/sofa" == e ||
    "/dinette" == e ||
    "/tops-base" == e ||
    "/noshery" == e ||
    "/western-restaurant" == e ||
    "/tea-restaurant" == e ||
    "/hotpot" == e ||
    "/canteen" == e
      ? ($(".nav ul")
          .children("li")
          .removeClass("cur"),
        $(".nav ul")
          .children("li")
          .eq(1)
          .addClass("cur"))
      : "/case" == e ||
      isContains(e,'/case-') ||
        "/noshery-case" == e ||
        "/tea-restaurant-case" == e ||
        "/western-restaurant-case" == e ||
        "/canteen-case" == e ||
        "/other-case" == e
      ? ($(".nav ul")
          .children("li")
          .removeClass("cur"),
        $(".nav ul")
          .children("li")
          .eq(2)
          .addClass("cur"))
      : "/about" == e ||
        "/profile" == e ||
        "/qualification" == e ||
        "/culture" == e ||
        "/customers" == e ||
        "/company-news" == e ||
        "/news" == e ||
        "/industry-news" == e ||
        "/furniture-knowledge" == e ||
        "/restaurant-chain" == e ||
        "/question" == e
      ? ($(".nav ul")
          .children("li")
          .removeClass("cur"),
        $(".nav ul")
          .children("li")
          .eq(3)
          .addClass("cur"))
      : "/contact" == e
      ? ($(".nav ul")
          .children("li")
          .removeClass("cur"),
        $(".nav ul")
          .children("li")
          .eq(4)
          .addClass("cur"))
      : isContains(e, "/goods-")
      ? ($(".nav ul")
          .children("li")
          .removeClass("cur"),
        $(".nav ul")
          .children("li")
          .eq(1)
          .addClass("cur"))
      : isContains(e, "/news-") &&
        ($(".nav ul")
          .children("li")
          .removeClass("cur"),
        $(".nav ul")
          .children("li")
          .eq(3)
          .addClass("cur")),
    $(".search-text").keydown(function(e) {
      13 == e.keyCode && $("#searchAll").trigger("click");
    }),
    $(".subcompany-bd a").on("click", function() {
      var e = $(this)
        .parent()
        .index();
      $(this)
        .addClass("cur")
        .parent()
        .siblings()
        .find("a")
        .removeClass("cur"),
        $(".subcompany-switch-wrap .subcompany")
          .eq(e)
          .show()
          .siblings(".subcompany")
          .hide();
    }),

    
    $(".language").click(function() {
      if (isMobile()) {
        $(".languageList").css("top", 60 - $(document).scrollTop());
        if (
          $(".languageList").is(":hidden") == true ||
          $(".languageList").css("display") == "none"
        ) {
          $(".headeritem").hide();
          $(this)
            .find(".languageList")
            .slideDown()
           
        } else {
          $(this)
            .find(".languageList")
            .slideUp();
        }
      }
    }),
    $(".language").hover(function() {
      if (!isMobile()) {
        $(".headeritem").hide();
        $(this)
          .find(".languageList")
          .slideDown();
      }
  },function(){
      if (!isMobile()) {
        $(this)
            .find(".languageList")
            .slideUp();
      }
    }),
    $(".banner").length > 0)
  )
    new Swiper(".banner", {
      effect: "slide",
      loop: !0,
      autoplay: !0,
      preventClicks: !1,
      autoplayDisableOnInteraction: !1,
      grabCursor: !1,
      parallax: !0,
      speed: 1200,
      pagination: { el: ".banner-dot", clickable: !0 },
      navigation: { nextEl: ".banner-next", prevEl: ".banner-prev" },
      on: {
        transitionEnd: function(e) {
          $(".banner ul li")
            .eq(this.activeIndex)
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
      }
    }),
      new Swiper(".in-link", {
        effect: "slide",
        loop: !1,
        autoplay: !0,
        preventClicks: !1,
        autoplayDisableOnInteraction: !1,
        grabCursor: !1,
        parallax: !0,
        pagination: { el: ".in-link-dot", clickable: !0 },
        slidesPerView: 4,
        slidesPerGroup: 1,
        breakpoints: { 480: { slidesPerView: 4, slidesPerGroup: 1 } }
      }),
      new Swiper(".in-Case-bd", {
        effect: "slide",
        loop: !1,
        autoplay: !0,
        preventClicks: !1,
        autoplayDisableOnInteraction: !1,
        grabCursor: !1,
        parallax: !0,
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 30,
        pagination: { el: ".in-Case-dot", clickable: !0 },
        breakpoints: {
          1500: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
          992: { slidesPerView: 3, slidesPerGroup: 3 },
          768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 10 },
          480: { slidesPerView: 1, slidesPerGroup: 1 }
        }
      });
  if ($(".subcompany-bd").length > 0)
    new Swiper(".subcompany-bd", {
      effect: "slide",
      loop: !1,
      autoplay: !1,
      preventClicks: !1,
      autoplayDisableOnInteraction: !1,
      grabCursor: !1,
      parallax: !0,
      navigation: { nextEl: ".subcompany-next", prevEl: ".subcompany-prev" },
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 1,
      breakpoints: {
        480: { slidesPerView: 1, slidesPerGroup: 1 },
        992: { slidesPerView: 2, slidesPerGroup: 2 }
      }
    });
  if ($(".activities-bd").length > 0)
    new Swiper(".activities-bd", {
      effect: "slide",
      loop: !0,
      autoplay: !1,
      preventClicks: !1,
      autoplayDisableOnInteraction: !1,
      grabCursor: !1,
      parallax: !0,
      navigation: { nextEl: ".activities-next", prevEl: ".activities-prev" },
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      breakpoints: {
        992: { slidesPerView: 2, slidesPerGroup: 2 },
        480: { slidesPerView: 1, slidesPerGroup: 1 }
      }
    });
  function i() {
    var e = $(window).width(),
      i = window.innerWidth - document.body.clientWidth;
    e + i >= 992
      ? ($(".in-Product-big")
          .removeAttr("style")
          .css("padding-top", "0"),
        $(".in-Product-big img").attr(
          "src",
          $(".in-Product-big img").attr("bigImg")
        ))
      : ($(".in-Product-big").removeAttr("style"),
        $(".in-Product-big").css(
          "padding-top",
          $(".in-Product-big-text").outerHeight(!0) + 10
        )),
      e + i >= 1024
        ? ($("#inHeader").length > 0 &&
            $(".logo img").attr("src", "common/images/inlogo.png"),
          $(".searchbtn").unbind("click"),
          $(".nav ul li")
            .unbind("mouseenter")
            .bind("mouseenter", function() {
              $(this)
                .find(".sub-nav")
                .stop(!0, !0)
                .fadeIn(300);
            }),
          $(".nav ul li")
            .unbind("mouseleave")
            .bind("mouseleave", function() {
              $(this)
                .find(".sub-nav")
                .stop(!0, !0)
                .fadeOut();
            }),
          $(".he_searchbox")
            .unbind("mouseenter")
            .bind("mouseenter", function() {
              $(".right-absolute .headeritem")
                .stop()
                .slideDown();
            }),
          $(".he_searchbox")
            .unbind("mouseleave")
            .bind("mouseleave", function() {
              $(".headeritem")
                .stop(!0, !0)
                .stop()
                .slideUp();
            }))
        : ($("#inHeader").length > 0 &&
            $(".logo img").attr("src", "common/images/logo.png"),
          $(".nav ul li,.tab-right .btn").unbind("mouseenter"),
          $(".nav ul li,.tab-right .btn").unbind("mouseleave"),
          $(".mobnav-btn").removeClass("g_close"),
          $(".nav ul li").each(function(e) {
            $(this).find(".sub-nav a").length
              ? $(this)
                  .find(".arrorright-btn")
                  .removeClass("show")
              : $(this)
                  .find(".arrorright-btn")
                  .addClass("show");
          }),
          $(".mobnav-btn")
            .unbind("click")
            .bind("click", function() {
              $(".right-absolute .headeritem").hide(),
                $(".nav").is(":hidden")
                  ? (document.body.addEventListener(
                      "touchmove",
                      bodyScroll,
                      !1
                    ),
                    $("body").css({ position: "fixed", width: "100%" }),
                    $(this).addClass("g_close"),
                    $(".nav").addClass("show"))
                  : (document.body.removeEventListener(
                      "touchmove",
                      bodyScroll,
                      !1
                    ),
                    $("body").css({ position: "initial", height: "auto" }),
                    $(".nav").removeClass("show"),
                    $(this).removeClass("g_close"));
            }),
          $(".nav ul li h4")
            .unbind("click")
            .bind("click", function() {
              $(this)
                .parents("li")
                .find(".sub-nav")
                .is(":hidden") &&
              $(this)
                .parents("li")
                .find(".sub-nav a").length
                ? ($(this)
                    .parents("li")
                    .find(".sub-nav")
                    .slideDown()
                    .parents("li")
                    .siblings()
                    .find(".sub-nav")
                    .slideUp(),
                  $(this)
                    .parents("li")
                    .addClass("cur")
                    .siblings()
                    .removeClass("cur"))
                : ($(this)
                    .parents("li")
                    .find(".sub-nav")
                    .slideUp(),
                  $(this)
                    .parents("li")
                    .removeClass("cur"));
            }),
          $(".tab-right .btn")
            .unbind("click")
            .bind("click", function() {
              $(".nav").removeClass("show"),
                $(".mobnav-btn").removeClass("g_close");
              $(".headeritem").css("top", 59 - $(document).scrollTop());
              if($(".right-absolute .headeritem").eq(0).is(":hidden")){
                $(".right-absolute .headeritem").eq(0).slideDown()
                $('.languageList').hide()
              }else{
                $(".right-absolute .headeritem").slideUp();
              }
            }));
  }
  function n() {
    if (0 != $(".subnavcont03").length)
      var e = $(".subnavcont03").offset().top - $(document).scrollTop();
    0 == e && $(".subnavcont03").css("position", "fiexd");
    var i = $("body")
        .css("overflow", "hidden")
        .width(),
      n = $("body")
        .removeAttr("style")
        .width(),
      s = i - n;
    n + s > 1024 && $(".footer-nav li h5").off(),
      n + s > 767
        ? ($(".zsannavbtn03").unbind(), $(".subnavlist03 .commonweb").show())
        : ($(".subnavlist03 .commonweb").hide(),
          $(".zsannavbtn03")
            .unbind()
            .bind("click", function() {
              var e = $(".subnavcont03").offset().top - $(document).scrollTop();
              $(".pin-wrapper").css("height", "52px"),
                $(".subnavlist03 .commonweb").is(":hidden")
                  ? ($(".subnavcont03").css({
                      position: "fixed",
                      top: e,
                      width: "100%"
                    }),
                    $(".subnavlist03 .commonweb")
                      .stop(!0, !0)
                      .slideDown(0),
                    $(".banner_h1").animate({ "margin-top": "-205px" }, 0))
                  : (0 == e
                      ? $(".subnavcont03").css("position", "fiexd")
                      : $(".subnavcont03").css("position", "initial"),
                    $(".subnavlist03 .commonweb")
                      .stop(!0, !0)
                      .slideUp(0),
                    $(".banner_h1").animate({ "margin-top": "-50px" }, 0));
            }),
          $(".footer-nav li h5")
            .off()
            .on("click", function() {
              $(this)
                .next()
                .is(":hidden")
                ? ($(this).addClass("cur"),
                  $(this)
                    .next()
                    .stop(!0, !0)
                    .slideDown(0)
                    .parent("li")
                    .siblings()
                    .find(".footer-drop")
                    .stop(!0, !0)
                    .slideUp(0),
                  $(this)
                    .parent("li")
                    .siblings()
                    .find("h5")
                    .removeClass("cur"))
                : ($(this).removeClass("cur"),
                  $(this)
                    .next()
                    .stop(!0, !0)
                    .slideUp(0));
            }));
  }
  n(),
    i(),
    $(window).resize(function() {
      n(), i();
    });
});
$(function(){
$('#tijiaox').click(function(){
if($('#username').val()==''){alert('请输入您的姓名！');return false;}
if ($("#telephone").val() == "") { alert("请输入你的手机！"); $("#telephone").focus(); return false; } 
if (!$("#telephone").val().match(/^(((13[0-9]{1})|147|150|151|152|153|154|155|156|158|157|159|170|180|181|182|183|184|185|186|187|188|189)+\d{8})$/)) { alert("手机号码格式不正确！"); $("#telephone").focus(); return false;} 
if($('#email').val()==''){alert('请输入您的EMAIL！');return false;}
if($('#address').val()==''){alert('请输入您的联系地址！');return false;}
if($('#content').val()==''){alert('请输入留言内容！');return false;}
})
})