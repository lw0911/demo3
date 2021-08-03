(function($) {
    
    DM3_C.init_colorpicker(function() {
        // Colorpickers
        DM3_C.add_colorpicker([
            { selector: 'a', key: 'color' },
            { selector: '#header-toolbar', key: 'border-top-color' },
            { selector: '.underline', key: 'background-color' },
            { selector: '.container-title', key: 'border-left-color' }
        ], '#239CC3', 'Default color');
        
        DM3_C.add_colorpicker([
            { selector: 'a:hover', key: 'color' },
            { selector: '.gallery-item:hover .gallery-title a', key: 'color' },
            { selector: '.gallery-item:hover .gallery-title a .point-right', key: 'color' }
        ], '#1A7490', 'Links on hover');
        
        // Select pattern
        var select = $('<select>');
        
        select.append($('<option value="../../../img/background/1.png">Pattern 1</option>'));
        select.append($('<option value="../../../img/background/2.png">Pattern 2</option>'));
        select.append($('<option value="../../../img/background/3.png">Pattern 3</option>'));
        select.append($('<option value="../../../img/background/4.png">Pattern 4</option>'));
        select.append($('<option value="../../../img/background/5.png">Pattern 5</option>'));
        select.append($('<option value="../../../img/background/6.png">Pattern 6</option>'));
        select.append($('<option value="../../../img/background/7.jpg">Pattern 7</option>'));
        select.append($('<option value="../../../img/background/8.png">Pattern 8</option>'));
        
        select.append($('<option value="../../../img/background/9.jpg">Pattern 9</option>'));
        select.append($('<option value="../../../img/background/10.jpg">Pattern 10</option>'));
        select.append($('<option value="../../../img/background/11.png">Pattern 11</option>'));
        select.append($('<option value="../../../img/background/12.jpg">Pattern 12</option>'));
        select.append($('<option value="../../../img/background/13.png">Pattern 13</option>'));
        select.append($('<option value="../../../img/background/14.jpg">Pattern 14</option>'));
        select.append($('<option value="../../../img/background/15.png">Pattern 15</option>'));
        select.append($('<option value="../../../img/background/16.jpg">Pattern 16</option>'));
        select.append($('<option value="../../../img/background/17.jpg">Pattern 17</option>'));
        
        var option_wrapper = $(DM3_C.option_wrapper_html);
        select.prependTo(option_wrapper);
        option_wrapper.appendTo(DM3_C.options_el);
        select.change(function() {
            DM3_C.set_style('body', 'background', 'url("' + select.val() + '") repeat !important');
        });
        
        // Try your pattern
        var input = $('<input type="text">');
        DM3_C.addOption({
            option: input,
            title: 'Try yours',
            description: 'Paste url to your pattern and press enter. You may choose pattern from <a target=_blank" href="http://subtlepatterns.com/">subtlepatterns.com</a>'
        });
        input.on('keyup', function(e) {
            if (e.which == 13) {
                DM3_C.set_style('body', 'background', 'url("' + input.val() + '") repeat !important');
            }
        });
    });
    
}(jQuery));
