$(window).load(function() {
    /* ================ VERFIFY IF USER IS ON TOUCH DEVICE ================ */

    if (is_touch_device()) {
        $(".portfolio-img-container").on('click', function(e) {
            $(this).find('.portfolio-hover').show();
        });
    }

    if (is_touch_device()) {
        $(".portfolio-img-container").on('click', function(e) {
            $(this).find('.portfolio-title').show();
        });
    }

    // function to check is user is on touch device
    function is_touch_device() {
        return 'ontouchstart' in window // works on most browsers 
                || 'onmsgesturechange' in window; // works on ie10
    }

    /* ================ PORTFOLIO ISOTOPE FILTER ================ */

    (function() {
        //ISOTOPE
        // cache container
        var $portfolioitems = $('#portfolioitems');
        // initialize isotope
        $portfolioitems.isotope({
            filter: '*',
            masonry: {
                columnWidth: 1,
                isResizable: true
            }
        });

        // filter items when filter link is clicked
        $('#filters a').click(function() {
            $('#filters li').removeClass('active');
            var selector = $(this).closest('li').addClass('active').end().attr('data-filter');
            $portfolioitems.isotope({
                filter: selector
            });
            return false;
        });
    })();

    // PORTFOLIO TITLE CENTERING
    function pi_portfolio_centering() {
        var portfolioTitle = $('.portfolio-img-container figcaption').height();
        $('.portfolio-img-container figcaption').css('margin-top', -(portfolioTitle / 2));
    };
    
    pi_portfolio_centering();
    
    $(window).resize(function() {
        pi_portfolio_centering();
    });


    //PORTFOLIO IMAGE LIGHTBOX
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
