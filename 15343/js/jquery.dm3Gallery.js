(function($) {
    
    /**
     * Dm3Gallery
     * ver. 1.0
     */
    
    function Dm3Gallery(trigger, options) {
        this.o = options;

        this.trigger = $(trigger);
        this.trigger.data('Dm3Gallery', this);
        this.overlay = $('#dm3-gallery-overlay');
        this.content = $(this.trigger.attr('data-content'));
        this.loader = this.overlay.find('.dm3-gallery-loader:first');
        this.prevScrollTop = 0;
        this.overlayHidden = true;
        this.gallery = this.trigger.data('gallery');
        this.bodyOverflow = false;
        
        if (this.gallery) {
            if (typeof Dm3Gallery.galleries[this.gallery] == 'undefined') {
                Dm3Gallery.galleries[this.gallery] = [];
            }
            
            Dm3Gallery.galleries[this.gallery].push(this);
            
            this.idx = Dm3Gallery.galleries[this.gallery].length - 1;
        }
        
        Dm3Gallery.galleries[this.gallery].curIdx = 0;
        
        this.init();
        this.initControls();
        
    }
    
    Dm3Gallery.galleries = {};
    
    Dm3Gallery.prototype = {
        /**
         * Initialize
         */
        init: function() {
            var that = this;
            
            this.trigger.click(function(e) {
                that.show();
                e.preventDefault();
            });
            
            $('<div class="dm3-gallery-options"><a class="dm3-gallery-prev" href="#">&laquo;</a><a class="dm3-gallery-next" href="#">&raquo;</a><a class="dm3-gallery-close" href="#">&times;</a></div>').prependTo(this.content.find('.container:first'));
            
            this.content.find('.dm3-gallery-close').click(function(e) {
                e.preventDefault();
                if (that.overlayHidden == false) {
                    that.hide();
                }
            });
        },
        
        /**
         * Initialize controls
         */
        initControls: function() {
            var that = this;
            
            this.content.find('.dm3-gallery-prev').click(function(e) {
                e.preventDefault();
                that.showPrev();
            });
            
            this.content.find('.dm3-gallery-next').click(function(e) {
                e.preventDefault();
                that.showNext();
            });
            
            $('body').keyup(function(e) {
                switch(e.keyCode) {
                    case 27:
                        if (that.overlayHidden == false) {
                            that.hide();
                        }
                        break;
                        
                    case 37:
                        if (that.idx == Dm3Gallery.galleries[that.gallery].curIdx) {
                            that.showPrev();
                        }
                        break;
                        
                    case 39:
                        if (that.idx == Dm3Gallery.galleries[that.gallery].curIdx) {
                            that.showNext();
                        }
                        break;
                }
                
                if (that.idx == Dm3Gallery.galleries[that.gallery].curIdx) {
                    if (typeof that.o.keyupCb == 'function') {
                        that.o.keyupCb.apply(that, [e.which]);
                    }
                }
            });
        },
        
        /**
         * Show overlay
         */
        showOverlay: function(cb) {
            var that = this;
            
            this.overlay.css({
                height: $('body').outerHeight(true) + 'px',
                top: 0,
                left: 0
            });
            
            this.overlay.addClass('dm3-gallery-loading');
            
            this.overlay.fadeIn(300, function() {
                that.scrollUp();
                if (typeof cb == 'function') {
                    cb();
                }
            });
        },
        
        /**
         * Hide overlay
         */
        hideOverlay: function(cb) {
            var that = this;
            
            if (that.bodyOverflow) {
                $('body, html').css('overflow', '');
            }
            
            this.overlay.fadeOut(300, function() {
                that.overlayHidden = true;
                
                if (typeof cb == 'function') {
                    cb();
                }
            });
        },
        
        /**
         * Show content
         */
        showContent: function(cb, loader) {
            var that = this,
                height = this.content.outerHeight(true);
            
            if (height <= $(window).height()) {
                this.bodyOverflow = true;
                $('body, html').css('overflow', 'hidden');
            } else {
                this.bodyOverflow = false;
                $('body, html').css('overflow', '');
            }
            
            loader = typeof loader != 'undefined' ? loader : true;
            
            if (loader) {
                this.loader.fadeIn(300);
            }
            
            if (loader) {
                setTimeout(function() {
                    that.loader.fadeOut(300, function() {
                        ///that.content.fadeIn(300, function() {
                        that.content.css({ opacity: 0, display: 'block' }).animate({ opacity: 1 }, {duration: 300, complete: function() {
                            that.overlayHidden = false;
                            
                            if (typeof cb == 'function') {
                                cb();
                            }
                            
                            Dm3Gallery.galleries[that.gallery].curIdx = that.idx;
                        }});
                    });
                }, 300);
            } else {
                //this.content.fadeIn(300, function() {
                that.content.css({ 'opacity': 0, 'display': 'block' }).animate({ opacity: 1 }, {duration: 300, complete: function() {
                    that.overlayHidden = false;
                    
                    if (typeof cb == 'function') {
                        cb();
                    }
                    
                    Dm3Gallery.galleries[that.gallery].curIdx = that.idx;
                }});
            }
        },
        
        /**
         * Hide content
         */
        hideContent: function(cb) {
            var that = this;
            
            this.content.animate({ opacity: 0 }, {duration: 300, complete: function() {
                that.overlayHidden = true;
                that.content.css({ 'display': 'none' });
                
                if (typeof cb == 'function') {
                    cb();
                }
            }});
        },
        
        /**
         * Scroll up
         */
        scrollUp: function() {
            Dm3Gallery.galleries[this.gallery].scrollTop = $(window).scrollTop();
            $(window).scrollTop(0);
        },
        
        /**
         * Scroll back
         */
        scrollBack: function() {
            $(window).scrollTop(Dm3Gallery.galleries[this.gallery].scrollTop);
        },
        
        /**
         * Show overlay and content
         */
        show: function() {
            var that = this;
            
            if (this.trigger.parents('.gallery-item:first').hasClass('disabled')) {
                return;
            }
            
            this.showOverlay(function() {
                that.showContent();
            });
        },
        
        /**
         * Hide overlay and content
         */
        hide: function() {
            var that = this;
            
            this.hideContent(function() {
                that.scrollBack();
                that.hideOverlay();
            });
        },
        
        /**
         * Get next/prev item index
         */
        getIdx: function(dir) {
            var idx = 0,
                found = false,
                gallery_item;
            
            if (dir == 'next') {
                idx = this.idx + 1;
                
                if (idx > Dm3Gallery.galleries[this.gallery].length - 1) {
                    idx = 0;
                }
            } else {
                idx = this.idx - 1;
                
                if (idx < 0) {
                    idx = Dm3Gallery.galleries[this.gallery].length - 1;
                }
            }
            
            if (dir == 'next') {
                while(found === false) {
                    gallery_item = Dm3Gallery.galleries[this.gallery][idx].trigger.parents('.gallery-item:first');
                    
                    if (gallery_item.hasClass('disabled')) {
                        idx += 1;
                        if (idx > Dm3Gallery.galleries[this.gallery].length - 1) {
                            idx = 0;
                        }
                    } else {
                        found = true;
                    }
                }
            } else {
                while(found === false) {
                    gallery_item = Dm3Gallery.galleries[this.gallery][idx].trigger.parents('.gallery-item:first');
                    
                    if (gallery_item.hasClass('disabled')) {
                        idx -= 1;
                        if (idx < 0) {
                            idx = Dm3Gallery.galleries[this.gallery].length - 1;
                        }
                    } else {
                        found = true;
                    }
                }
            }
            
            return idx;
        },
        
        /**
         * Show previous item
         */
        showPrev: function() {
            var idx = this.getIdx('prev'),
                nextOverlay = Dm3Gallery.galleries[this.gallery][idx],
                that = this;
            
            this.hideContent(function() {
                nextOverlay.showContent(null, false);
            });
        },
        
        /**
         * Show next item
         */
        showNext: function() {
            var idx = this.getIdx('next'),
                nextOverlay = Dm3Gallery.galleries[this.gallery][idx],
                that = this;
            
            this.hideContent(function() {
                nextOverlay.showContent(null, false);
            });
        }
    };
    
    
    /**
     * Register jQuery plugin
     */
    $.fn.dm3Gallery = function(options) {
        
        $(this).each(function() {
            var gallery = new Dm3Gallery(this, options);
        });
        
    };
    
}(jQuery));
