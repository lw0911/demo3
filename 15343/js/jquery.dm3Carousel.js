/**
 * dm3Carousel jQuery plugin
 * Author: Dmytro Danylov
 */

(function($) {
    
    /**
     * Constructor
     */
    function Dm3Carousel(el, o) {
        this.container = $(el);
        this.itemsContainer = this.container.find('ul:first').wrap($('<div class="dm3-carousel-items-wrapper"></div>'));
        this.itemsWrapper = this.container.find('.dm3-carousel-items-wrapper:first');
        this.containerWidth = this.container.width();
        
        this.items = this.itemsContainer.children();
        this.itemsNum = this.items.length;
        this.itemWidth = o.itemWidth;
        this.itemsVisibleNum = Math.floor(this.containerWidth / this.itemWidth);
        this.itemsWidth = this.itemsNum * this.itemWidth;
        this.itemCurNum = 0;
        this.itemCur = null;
        this.itemsMoving = false;
        
        this.win = $(window);
        this.dirPrev = 'next';
        this.o = o;
        
        this.init();
    };
    
    
    /**
     * Prototype
     */
    Dm3Carousel.prototype = {
        /**
         * Initialize
         */
        init: function() {
            var that = this;
            
            // Process items
            this.items.each(function() {
            });
            
            // Style items wrapper
            this.itemsWrapper.css({
                'width': this.containerWidth + 'px',
                'overflow': 'hidden'
            });
            
            // Style items container
            this.itemsContainer.css({
                'width': this.itemsWidth + 'px'
            });
            
            this.itemCurNum = this.itemsVisibleNum;
            this.itemCur = this.items.eq(this.itemCurNum);
            
            this.initControls();
            
            if (typeof this.o.afterInitCb == 'function') {
                this.o.afterInitCb.apply(this);
            }
            
            this.win.resize(function() {
                that.resize();
            });
            
            that.move(null, that.itemCurNum);
        },
        
        
        /**
         * Initialize controls
         */
        initControls: function() {
            var that = this,
                controlsContainer = $('<div class="dm3-carousel-controls"></div>');
            
            this.controlPrev = $('<span class="dm3-carousel-prev"><span>&laquo;</span></span>');
            this.controlNext = $('<span class="dm3-carousel-next"><span>&raquo;</span></span>');
            
            this.controlPrev.appendTo(controlsContainer);
            this.controlNext.appendTo(controlsContainer);
            controlsContainer.appendTo(this.container);
                
            this.controlNext.click(function(e) {
                e.preventDefault();
                that.move('next');
            });
            
            this.controlPrev.click(function(e) {
                e.preventDefault();
                that.move('prev');
            });
        },
        
        
        /**
         * Move
         */
        move: function(dir, item_num, animate) {
            var that = this,
                itemNextNum = null,
                offset = 0,
                itemNext;
            
            item_num = parseInt(item_num) === item_num ? item_num : null;
            animate = typeof animate != 'undefined' ? animate : true;
            
            if (this.itemsMoving) {
                return;
            }
            this.itemsMoving = true;
            
            if (item_num === null) {
                if (dir == 'next') {
                    itemNextNum = this.itemCurNum + 1;
                    /*if (itemNextNum > this.itemsNum - this.itemsVisibleNum) {
                        itemNextNum = this.itemsNum - this.itemsVisibleNum;
                    }*/
                   
                    if (itemNextNum > this.itemsNum) {
                        itemNextNum = this.itemsNum;
                    }
                } else {
                    itemNextNum = this.itemCurNum - 1;
                    if (itemNextNum < this.itemsVisibleNum) {
                        itemNextNum = this.itemsVisibleNum;
                    }
                }
            } else {
                itemNextNum = item_num;
                if (itemNextNum < this.itemsVisibleNum) {
                    itemNextNum = this.itemsVisibleNum;
                }
            }
            
            itemNext = this.items.eq(itemNextNum);
            
            // Calculate offset
            if (itemNextNum != this.itemsVisibleNum) {
                if (dir == 'next') {
                    offset = (itemNextNum * this.itemWidth) - this.containerWidth;
                    offset *= -1;
                } else {
                    offset = (itemNextNum - this.itemsVisibleNum) * this.itemWidth;
                    offset *= -1;
                }
            }
            
            if (animate === true) {
                this.itemsContainer.animate({ 'margin-left': offset }, { duration: 300, complete: function() {
                    that.dirPrev = dir;
                    that.afterMove(itemNextNum, itemNext);
                }});
            } else {
                this.dirPrev = dir;
                this.itemsContainer.css({ 'margin-left': offset });
                this.afterMove(itemNextNum, itemNext);
            }
        },
        
        
        /**
         * After move
         */
        afterMove: function(itemNextNum, itemNext) {
            this.itemCurNum = itemNextNum;
            this.itemCur = itemNext;
            this.itemsMoving = false;
        },
        
        
        /**
         * Recalculate size
         */
        resize: function() {
            var that = this;
            
            this.containerWidth = this.container.width();
            this.itemsVisibleNum = Math.floor(this.containerWidth / this.itemWidth);
            this.itemsWrapper.css({ 'width': this.containerWidth + 'px' });
            this.resizeTimeout = setTimeout(function() { that.move('prev', 0, false); }, 300);
        }
    };
    
    
    /**
     * Register jQuery plugin
     */
    $.fn.dm3Carousel = function(options) {
        options = $.extend({
            afterInitCb: null,
            itemWidth: 100
        }, options);
        
        this.each(function() {
            var carousel = new Dm3Carousel(this, options);
        });
    };
    
}(jQuery));
