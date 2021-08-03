/******************************************************************************
 * Tabs jQuery plugin
 * ver 1.0.4
 ******************************************************************************/
$.fn.dm3Tabs = function(options) {

    function removeIeFilter(el) {
        if (typeof el.style.filter != "undefined" && typeof el.style.removeAttribute == "object") {
            el.style.removeAttribute("filter");
        }
    }
    
    var options = $.extend({
        speed: 600,
        startTab: 0,
        tabActiveClass: "active",
        afterTabChange: null
    }, options);
    
    return this.each(function() {
        var wait = false;
        
        // Reference to tabs container
        var container = $(this).css({position: 'relative'});
        
        // Get current tab
        var tabIDInput = container.find('input[name="tabIDInput"]:first');
        
        // Get tabs containers
        var tabsContainers = container.children(".tab");
        
        var currentTab = tabsContainers.eq(options.startTab);
        
        // Get navigation
        var tabsNav = container.prev("ul").children();
        if (!tabsNav.length) {
            tabsNav = container.next("ul").children();
        }
        
        var curHeight, containerWidth, prev, win;
        
        tabsContainers.not(':first').css({ 'visibility': 'hidden' });
        
        // Set initial container height
        setTimeout(function() {
            
            // Hide all tab containers
            containerWidth = tabsContainers.eq(0).css('width');
            var i = 0;
            tabsContainers.each(function() {
                var tab = $(this);
    
                if (typeof tab.attr('id') != 'undefined' && tab.attr('id') == tabIDInput.val())
                    options.startTab = i;
                
                tab.css({
                    'opacity': 0,
                    'position': 'absolute',
                    'left': 0,
                    'width': '100%'
                });
                ++i;
            });
            
            curHeight = tabsContainers.eq(options.startTab).outerHeight(true);
            container.css({height: curHeight + 'px'});
            
            // Activate current tab
            prev = options.startTab; // Previously selected tab index
            tabsNav.eq(options.startTab).addClass(options.tabActiveClass).css('visibility', 'visible');
            currentTab.css({
                'visibility': 'visible',
                opacity: 1
            });
            
            removeIeFilter(tabsContainers.eq(options.startTab).get(0));
            
            win = $(window);
            
            function onResize() {
                container.css({
                    'height': currentTab.outerHeight(true) + 'px'
                });
            }
            
            win.resize(onResize);
            
            // Start tabs
            var i = 0;
            tabsNav.each(function() {
                this.idx = i;
                
                var link = $(this);
                link.bind('click', function(e)
                {
                    e.preventDefault();
                    if (prev == this.idx)
                        return false;
                    tabsNav.eq(prev).removeClass(options.tabActiveClass);
                    $(this).addClass(options.tabActiveClass);
                    changeTab(this.idx);
                });
                ++i;
            });
        }, 300);
        
        // Function to switch tabs
        function changeTab(idx) {
            currentTab = tabsContainers.eq(idx);
            
            tabsContainers.eq(prev).animate({opacity: 0}, {duration: 300, queue: false, complete: function() {
                $(this).css({ 'visibility': 'hidden' });
            }});
            
            prevTemp = prev;
            prev = idx;
            
            // Show selected
            currentTab.stop().css('visibility', 'visible').animate({opacity: 1}, {duration: 300, queue: false, complete: function() {
                removeIeFilter(this);
                if (typeof options.afterTabChange == 'function') {
                    options.afterTabChange(currentTab);
                }
            }});
            
            // Change container height
            var height = currentTab.outerHeight(true);
            
            container.animate({ height: height + 'px' }, { duration: 300, queue: false });
            
            // Save current tab's id
            tabIDInput.val(currentTab.attr('id'));
        }
    });
};