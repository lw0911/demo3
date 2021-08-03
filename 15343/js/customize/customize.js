var DM3_C = {};

(function($) {
    
    DM3_C.options_wrapper = null;
    DM3_C.options_el = null;
    DM3_C.option_wrapper_html = '<div class="option-wrapper"><div class="clear"></div></div>';
    
    /**
     * Add/edit css stylesheet
     * @param selector String
     * @param key String
     * @param val String
     */
    DM3_C.set_style = function(selector, key, val) {
        var rules = [],
            stylesheet;
        
        if (!document.styleSheets) {
            return;
        }
        
        stylesheet = document.styleSheets[document.styleSheets.length - 1];
        
        if (stylesheet.cssRules) {
            rules = stylesheet.cssRules;
        } else if (stylesheet.rules) {
            rules = stylesheet.rules
        } else {
            return;
        }
        
        if (typeof rules[selector] != 'undefined') {
            rules[selector].style[key] = val;
        } else {
            if (stylesheet.insertRule) {
                stylesheet.insertRule(selector + ' { ' + key + ': ' + val + '; }', rules.length);
            } else if (stylesheet.addRule) {
                stylesheet.addRule(selector, key + ': ' + val, rules.length);
            }
        }
    };
    
    
    /**
     * Add option
     */
    DM3_C.addOption = function(params) {
        var option_wrapper = $(DM3_C.option_wrapper_html),
            title = $('<div class="dm3-option-title">'),
            description = $('<div class="dm3-option-description">');
        title.html(params.title).prependTo(option_wrapper);
        params.option.insertAfter(title);
        description.html(params.description).insertAfter(params.option);
        option_wrapper.appendTo(DM3_C.options_el);
    }
    
    
    DM3_C.init = function() {
        var css = $('<link rel="stylesheet">'),
            toggle = $('<div id="dm3-options-toggle">+</div>');
        
        DM3_C.options_wrapper = $('<div id="dm3-options"></div>');
        DM3_C.options_el = $('<div id="dm3-options-inner"></div>');
        DM3_C.options_wrapper.append(DM3_C.options_el);
        DM3_C.options_wrapper.append(toggle);
        DM3_C.options_wrapper.appendTo($('body'));
        css.attr('href', 'js/customize/customize.css');
        $('head').append(css);
        $.getScript('js/customize/website.js');
        
        DM3_C.options_wrapper.data('hidden', true);
        
        toggle.click(function(e) {
            e.preventDefault();
            
            if (DM3_C.options_wrapper.data('hidden') === true) {
                DM3_C.options_wrapper.css({
                    left: 0
                });
                toggle.html('&minus;');
                DM3_C.options_wrapper.data('hidden', false);
            } else {
                DM3_C.options_wrapper.css({
                    left: '-' + DM3_C.options_wrapper.innerWidth() + 'px'
                });
                toggle.html('&plus;');
                DM3_C.options_wrapper.data('hidden', true);
            }
        });
    };
    
    
    DM3_C.init_colorpicker = function(callback) {
        var css = $('<link rel="stylesheet">');
        
        $.getScript('js/customize/colorpicker.js', function(data, textStatus, jqxhr) {
           callback.apply();
        });
        
        css.attr('href', 'js/customize/css/colorpicker.css');
        $('head').append(css);
    };
    
    
    DM3_C.add_colorpicker = function(rules, default_color, title) {
        var cp = $('<div class="color-selector"><div></div></div>'),
            title = $('<div class="color-title">' + title + '</div>'),
            option_wrapper = $(DM3_C.option_wrapper_html);
        
        title.prependTo(option_wrapper);
        cp.prependTo(option_wrapper);
        option_wrapper.appendTo(DM3_C.options_el);
        
        cp.find('div:first').css('background-color', default_color);
        
        cp.ColorPicker({
            color: default_color,
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                for (var i = 0; i < rules.length; i += 1) {
                    DM3_C.set_style(rules[i].selector, rules[i].key, '#' + hex);
                }
                cp.find('div:first').css('background-color', '#' + hex);
            }
        });
    };
    
    
    $(document).ready(function() {
        if ($(window).width() > 480) {
            DM3_C.init();
        }
    });
    
}(jQuery));