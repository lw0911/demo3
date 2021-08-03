$(document).ready(function () {
    $('.flickr-photos-list').jflickrfeed({
        limit: 9,
        qstrings: {
            id: '71865026@N00'
        },
        itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    });
    $().UItoTop({ easingType: 'easeOutQuart' });
    // PrettyPhoto
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: 'light_square',
        social_tools: false,
        hook: 'data-rel'
    });
    $('.search-toggle').click(function () {
        $('#header-search-box').slideToggle("fast");
    });
    $('#header-search-box .close').click(function () {
        $('#header-search-box').slideUp("fast");
    });

    $(".cnbox").each(function () {
        var nheight = $(this).find(".nbox").height();
        $(this).find(".cbox").css("height", nheight + 50);
    });
    $(".sbox").hover(function () {
        $(this).find(".sbox-icon").addClass('animated pulse').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated pulse');
        });
    });
    $(".skin-chooser-toggle").click(function () {
        $(".skin-chooser-wrap").toggleClass("show");
    });
    $(".color-skin").click(function () {
        var cls = this.id;
        $(".color-skin").removeClass("active");
        $(this).addClass("active");
        $("body").removeClass("color-skin-1 color-skin-2 color-skin-3 color-skin-4 color-skin-5").addClass(cls);
    });

    $(".color-pattern").click(function () {
        var bgim = $(this).css("background-image");
        $(".color-pattern").removeClass("active");
        $(this).addClass("active");
        $(".retouch-background").css("background-image", bgim);
    });

    $("#wide").click(function (event) {
        event.preventDefault();
        $("body").removeClass("boxed retouch-background").addClass("wide");
        $(window).resize();
    });

    $("#boxed").click(function (event) {
        event.preventDefault();
        $("body").removeClass("wide").addClass("boxed retouch-background");
        $(window).resize();
    });

    // Revolution Slider
    $('.tp-banner').revolution({
        delay: 9000,
        startwidth: 1350,
        startheight: 450,
        hideThumbs: 10,
        fullWidth: "on",
        forceFullWidth: "off",
        navigationStyle: "preview1"
    });
});

// $ CarouFredSel
var caroufredsel = function () {
    $('#caroufredsel-portfolio-container').carouFredSel({
        responsive: true,
        scroll: 1,
        circular: false,
        infinite: false,
        items: {
            visible: {
                min: 1,
                max: 3
            }
        },
        prev: '#portfolio-prev',
        next: '#portfolio-next',
        auto: {
            play: false
        }
    });
    $('#caroufredsel-blog-posts-container').carouFredSel({
        responsive: true,
        scroll: 1,
        circular: false,
        infinite: false,
        items: {
            visible: {
                min: 1,
                max: 3
            }
        },
        prev: '#blog-posts-prev',
        next: '#blog-posts-next',
        auto: {
            play: false
        }
    });
    $('#caroufredsel-clients-container').carouFredSel({
        responsive: true,
        scroll: 1,
        circular: false,
        infinite: false,
        items: {
            visible: {
                min: 1,
                max: 4
            }
        },
        prev: '#client-prev',
        next: '#client-next',
        auto: {
            play: false
        }
    });
    $('#caroufredsel-testimonials-container').carouFredSel({
        responsive: true,
        scroll: 1,
        circular: false,
        infinite: false,
        items: {
            visible: {
                min: 1,
                max: 1
            }
        },
        prev: '#testimonials-prev',
        next: '#testimonials-next',
        auto: {
            play: false
        }
    });
};

// Isotope Portfolio
var $container = $('.portfolio-container');
var $blogcontainer = $('.posts-wrap');
var $filter = $('.portfolio-filter');

$(window).load(function () {
    caroufredsel();
    // Initialize Isotope
    $container.isotope({
        itemSelector: '.portfolio-item-wrapper'
    });
    $blogcontainer.isotope({
        itemSelector: '.article-wrap'
    });
    $('.portfolio-filter a').click(function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
    $filter.find('a').click(function () {
        $filter.find('a').parent().removeClass('active');
        $(this).parent().addClass('active');
    });
});

$(window).smartresize(function () {
    $container.isotope('reLayout');
    $blogcontainer.isotope('reLayout');
});

$(window).resize(function () {
    caroufredsel();
});  