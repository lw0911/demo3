(jQuery)(function($) {

    // MAIN NAVIGATION
    $('.nav .dropdown').hover(function() {
        $(this).find('.dropdown-menu').slideDown(200);

    }, function() {
        $(this).find('.dropdown-menu').fadeOut(200);
    });

    // RESPONSIVE NAVIGATION
    $(function() {
        $('#dl-menu').dlmenu({
            animationClasses: {
                classin: 'dl-animate-in-2',
                classout: 'dl-animate-out-2'
            }
        });
    });

    // STATIC HEADER
    var window_y;
    var header_height;
    var scroll_position;

    (function() {
        window_y = 0;
        header_height = $("#header-wrapper").height();
        scroll_position = parseInt(header_height, 10);
        window_y = $(document).scrollTop();
        if ((window_y > 0) && !(is_touch_device())) {
            set_static_header(1);
        }
    })(window_y, header_height, scroll_position);

    function set_static_header(position) {
        if (position > 0) {
            if (!($("#header-wrapper").hasClass("static"))) {
                $("#header-wrapper").addClass("static");
                header_height = $("#header-wrapper").height();
                if ($('body').hasClass('home')) {
                    $('.tp-wrapper').css("margin-top", header_height + "px");
                } else {
                    $("#page-title").eq(0).css("margin-top", header_height + "px");
                }
            }

        } else {
            if (($("#header-wrapper").hasClass("static"))) {
                $("#header-wrapper").removeClass("static");
                if ($('body').hasClass('home')) {
                    $('.tp-wrapper').css("margin-top", "");
                } else {
                    $("#page-title").eq(0).css("margin-top", "");
                }
                $("#header-wrapper").css("top", 0);
            }
        }

    }

    // SEARCH ANIMATION
    $('#header').on('click', '#search', function(e) {
        e.preventDefault();

        $(this).find('#m_search').fadeIn().focus();
    });

    $('#m_search').focusout(function(e) {
        $(e.target).fadeOut();
    });


    // CONTENT TABS
    (function() {
        $('.tabs').each(function() {
            var $tabLis = $(this).find('li');
            var $tabContent = $(this).next('.tab-content-wrap').find('.tab-content');

            $tabContent.hide();
            $tabLis.first().addClass('active').show();
            $tabContent.first().show();
        });

        $('.tabs').on('click', 'li', function(e) {
            var $this = $(this);
            var parentUL = $this.parent();
            var tabContent = parentUL.next('.tab-content-wrap');

            parentUL.children().removeClass('active');
            $this.addClass('active');

            tabContent.find('.tab-content').hide();
            var showById = $($this.find('a').attr('href'));
            tabContent.find(showById).fadeIn();

            e.preventDefault();
        });
    })();

    // IMAGE GALLERY WITH THUMBS
    (function() {
        $('.image-gallery-select').each(function() {
            var $imageLis = $(this).find('li');
            var $imageGallery = $(this).prev('.image-gallery-wrap').find('.image-gallery');

            $imageGallery.hide();
            $imageLis.first().addClass('active').show();
            $imageGallery.first().show();
        });

        $('.image-gallery-select').on('click', 'li', function(e) {
            var $this = $(this);
            var parentUL = $this.parent();
            var imageGallery = parentUL.prev('.image-gallery-wrap');

            parentUL.children().removeClass('active');
            $this.addClass('active');

            imageGallery.find('.image-gallery').hide();
            var showById = $($this.find('a').attr('href'));
            imageGallery.find(showById).fadeIn();

            e.preventDefault();
        });
    })();

    // TESTIMONIALS IMAGE 
    function pi_testimonial() {
        var testimonialWidth = $('.testimonial').width();
        $('.testimonial blockquote').css('width', testimonialWidth - 120);
    }
    ;

    pi_testimonial();

    $(window).resize(function() {
        pi_testimonial();
    });

    //ACCORDION
    (function() {
        'use strict';
        $('.accordion').on('click', '.title', function(event) {
            event.preventDefault();
            $(this).siblings('.accordion .active').next().slideUp('normal');
            $(this).siblings('.accordion .title').removeClass("active");

            if ($(this).next().is(':hidden') === true) {
                $(this).next().slideDown('normal');
                $(this).addClass("active");
            }
        });
        $('.accordion .content').hide();
        $('.accordion .active').next().slideDown('normal');
    })();


    (function() {
        // INFORMATION BOXES 
        $('.information-boxes .close').on('click', function() {
            $(this).parent().slideUp(300);
        });

        // PLACEHOLDER PLUGIN 
        $('input[placeholder], textarea[placeholder]').placeholder();
    })();


    // SCROLL TO TOP 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600, function(){
            set_static_header(0);
        });
        return false;
    });


    // TWEETSCROLL PLUGIN 
    $('.tweets-list-container').tweetscroll({
        username: 'pixel_industry',
        limit: 20,
        replies: true,
        position: 'append',
        animation: 'fade',
        date_format: 'style2',
        visible_tweets: 2,
        request_url: "js/twitter/tweets.php",
        delay: 7000
    }); // TWEETSCROLL END

    // NEWSLETTER FORM AJAX SUBMIT
    $('.newsletter .submit').on('click', function(event) {
        event.preventDefault();
        var email = $(this).siblings('.email').val();
        var form_data = new Array({'Email': email});
        $.ajax({
            type: 'POST',
            url: "contact.php",
            data: ({'action': 'newsletter', 'form_data': form_data})
        }).done(function(data) {
            alert(data);
        });
    });


    // function to check is user is on touch device
    if (!is_touch_device()) {
        // ANIMATION FOR CONTENT
        $.stellar({
            horizontalOffset: 0,
            horizontalScrolling: false
        });

        // ANIMATED CONTENT
        if ($(".animated")[0]) {
            jQuery('.animated').css('opacity', '0');
        }

        $('.triggerAnimation').waypoint(function() {
            var animation = $(this).attr('data-animate');
            $(this).css('opacity', '');
            $(this).addClass("animated " + animation);

        },
                {
                    offset: '80%',
                    triggerOnce: true
                }
        );
    }

    // PAGE TITLE HEADINGS CENTERING
    function pi_breadcrumb_width() {
        var breadcrumbWidth = $('#page-title02 .breadcrumb-container').width();
        $('#page-title02 .breadcrumb-container').css('margin-left', -(breadcrumbWidth / 2));
    }
    ;

    pi_breadcrumb_width();

    $(window).resize(function() {
        pi_breadcrumb_width();
    });

    // function to check is user is on touch device
    function is_touch_device() {
        return Modernizr.touch;
    }

    $("html").niceScroll().scrollstart(function(event) {
        if (!is_touch_device() && event.end.y > 0) {
            set_static_header(1);
        }
    }).scrollend(function(event) {
        if (!is_touch_device() && event.end.y === 0) {
            set_static_header(0);
        }
    });
});


