/* ******************************
 * 
 * StyleSwitcher Script
 * 
 * Author: Pixel Industry
 * 
 ******************************* */

jQuery(document).ready(function($) {
    var relativeDir = 'css/';

    /* ***************************************
     * Reading Cookies for stored values
     *******************************************/
	(function(){
        if(readCookie("ssKreatorStyleSwitcher") != "0"){
            var status = readCookie("ssKreatorStyleSwitcher");
			//$('#style-switcher').removeClass('opened');
            pi_switcher_slide(0);
        }
		
		if(readCookie("ssKreatorStyle") != "0"){
            var status = readCookie("ssKreatorStyle");
			//$('#style-switcher').removeClass('opened');
            changeStyle(status);
        }
		
		if(readCookie("ssKreatorPattern") != "0"){
            var status = readCookie("ssKreatorPattern");
			//$('#style-switcher').removeClass('opened');
            $('body').removeClass().addClass(status);
			
        }
    })();

    $('#styles-button').on('click', function(e) {
        e.preventDefault();

        if ($('#style-switcher').hasClass('opened')) {
            pi_switcher_slide("1");
        } else {
            pi_switcher_slide("0");
        }

    });

    function pi_switcher_slide(status) {
        var switcherWidth = $('#style-switcher').width();

        if (status === "1") {
            $('#style-switcher').animate({
                left: -switcherWidth
            }, 700, function() {
                $(this).removeClass('opened');
            });
            createCookie("ssKreatorStyleSwitcher", '0', 7);
        } else {
            $('#style-switcher').animate({
                left: 0
            }, 700, function() {
                $(this).addClass('opened');
            });
            createCookie("ssKreatorStyleSwitcher", '1', 7);
        }
    }

    /* ******************
     * Style Changing
     *********************/

    $('.styles-list li').on('click', function(e) {
        e.preventDefault();
        var styleVal = $(this).attr('class');
        changeStyle(styleVal);
        createCookie("ssKreatorStyle", styleVal, 7);
    });

    /* ******************
     * Pattern Changing
     *********************/

    $('.pattern-list li').on('click', function(e) {
        var skinVal = $(this).attr('class');
        $('body').removeClass().addClass(skinVal);
        createCookie("ssKreatorPattern", skinVal, 7);
    });


    function changeStyle(styleVal) {
        $('link[title="activestyle"]').remove();
        var stylesheet = '<link rel="stylesheet" href="' + relativeDir + styleVal + '.css" type="text/css" />';
        $('head').append(stylesheet);
    }

    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else
            var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }
});