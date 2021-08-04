(function ($) {
    "use strict";


    // Preloder

    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({ 'overflow': 'visible' });
    });

    // HEADER START

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $(".top-menu").addClass("sticky");
        } else {
            $(".top-menu").removeClass("sticky");
        }
    });


    // TOGGLER

    $(".navbar-toggler-icon").on("click", function () {
        $(".main-nav").fadeToggle("");
    });


    // INPUT BTN

    $('.show-btn').on("click", function () {
        $('.shooping-cart').hide();

        $('.top-input').fadeToggle();
    });

    // Cart BTN

    $('.cart-btn').on("click", function () {
        $('.top-input').hide();

        $('.shooping-cart').fadeToggle();
    });


    //    PRODUCTS  START

    $(".slider").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // TESTIMONIALS

    $(".slider-2").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: true,
        nav: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    // CLIENT LOGO


    $(".slider-3").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        dots: false,
        nav: false,

        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // BLOG SLIDER

    $(".slider-4").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        navText: [
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // NICE SELECT

    if ($("select").length > 0) {
        $('select').niceSelect();
    }

    //=========================
    // Price Range Slider
    //=========================

    if ($("#slider-range").length > 0) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 100,
            values: [13, 80],
            slide: function (event, ui) {
                $("#minamount").html("$" + ui.values[0]);
                $("#maxamount").html("$" + ui.values[1]);
            }
        });
        $("#minamount").html("$" + $("#slider-range").slider("values", 0));
        $("#maxamount").html("$" + $("#slider-range").slider("values", 1));

    };


    //=================================
    // Add/Minus Quantity
    //=================================
    $('.incressQnt').on('click', function () {
        var $qty = $(this).closest('div').find('.qnttinput');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.decressQnt').on('click', function () {
        var $qty = $(this).closest('div').find('.qnttinput');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });


    //======================
    // GOOGLE MAP SCRIPT
    //======================

    function init() {
        var locations = [
            ['Xirosoft', 23.810331, 90.412521, 3],
            ['Xirosoft', 23.9980797, 90.4229848],
            ['Xirosoft', 23.8780696, 90.2540589],
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(23.810331, 90.412521),
            mapTypeId: google.maps.MapTypeId.ROADMAP,


            styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i <= locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: 'assets/img/home1.png',
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }


    }
    if ($('#map').length > 0) {
        google.maps.event.addDomListener(window, 'load', init);
    }



    // Back to Top JS 

    $('body').append('<div id="toTop" class="back-to-top"><i class="ti-arrow-up"></i></div>');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });





})(jQuery);



