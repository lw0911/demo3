/**
 * Global variables
 */
"use strict";

var userAgent = navigator.userAgent.toLowerCase(),
	initialDate = new Date(),

	$document = $(document),
	$window = $(window),
	$html = $("html"),

	isDesktop = $html.hasClass("desktop"),
	isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	isTouch = "ontouchstart" in window,
	windowReady = false,
	isNoviBuilder = false,
	livedemo = true,

	plugins = {
		pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false,
		materialParallax: $('.parallax-container'),
		responsiveTabs: $(".responsive-tabs"),
		rdNavbar: $(".rd-navbar"),
		owl: $(".owl-carousel"),
		swiper: $('.swiper-container'),
		counter: $(".counter"),
		flickrfeed: $(".flickr"),
		lightGallery: $("[data-lightgallery='group']"),
		lightGalleryItem: $("[data-lightgallery='item']"),
		lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
		isotope: $(".isotope"),
		calendar: $(".rd-calendar"),
		materialTabs: $('.rd-material-tabs'),
		dateCountdown: $('.DateCountdown'),
		slick: $('.slick-slider'),
		selectFilter: $("select"),
		bootstrapDateTimePicker: $("[data-time-picker]"),
		customWaypoints: $('[data-custom-scroll-to]'),
		rdMailForm: $(".rd-mailform"),
		rdInputLabel: $(".form-label"),
		maps: $(".google-map-container"),
		regula: $("[data-constraints]"),
		radio: $("input[type='radio']"),
		checkbox: $("input[type='checkbox']"),
		captcha: $('.recaptcha'),
		search: $(".rd-search"),
		searchResults: $('.rd-search-results'),
		preloader: $('.preloader'),
		wow: $('.wow'),
		copyrightYear: $('.copyright-year')
	};

/**
 * @desc Check the element was been scrolled into the view
 * @param {object} elem - jQuery object
 * @return {boolean}
 */
function isScrolledIntoView(elem) {
	if (isNoviBuilder) return true;
	return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
}

/**
 * @desc Calls a function when element has been scrolled into the view
 * @param {object} element - jQuery object
 * @param {function} func - init function
 */
function lazyInit(element, func) {
	let scrollHandler = function () {
		if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
			func.call(element);
			element.addClass('lazy-loaded');
		}
	};

	scrollHandler();
	$window.on('scroll', scrollHandler);
}

// Initialize scripts that require a loaded window
$window.on('load', function () {
	// Page loader & Page transition
	if (plugins.preloader.length && !isNoviBuilder) {
		pageTransition({
			target: document.querySelector('.page'),
			delay: 0,
			duration: 500,
			classIn: 'fadeIn',
			classOut: 'fadeOut',
			classActive: 'animated',
			conditions: function (event, link) {
				return link && !/(\#|javascript:void\(0\)|callto:|tel:|mailto:|:\/\/)/.test(link) && !event.currentTarget.hasAttribute('data-lightgallery');
			},
			onTransitionStart: function (options) {
				setTimeout(function () {
					plugins.preloader.removeClass('loaded');
				}, options.duration * .75);
			},
			onReady: function () {
				plugins.preloader.addClass('loaded');
				windowReady = true;
			}
		});
	}

	// Material Parallax
	if (plugins.materialParallax.length) {
		if (!isNoviBuilder && !isIE && !isMobile) {
			plugins.materialParallax.parallax();
		} else {
			for (let i = 0; i < plugins.materialParallax.length; i++) {
				let $parallax = $(plugins.materialParallax[i]);

				$parallax.addClass('parallax-disabled');
				$parallax.css({"background-image": 'url(' + $parallax.data("parallax-img") + ')'});
			}
		}
	}
});

/**
 * Initialize All Scripts
 */
$document.ready(function () {
	var isNoviBuilder = window.xMode;

	/**
	 * Wrapper to eliminate json errors
	 * @param {string} str - JSON string
	 * @returns {object} - parsed or empty object
	 */
	function parseJSON(str) {
		try {
			if (str) return JSON.parse(str);
			else return {};
		} catch (error) {
			console.warn(error);
			return {};
		}
	}

	/**
	 * @desc Sets the actual previous index based on the position of the slide in the markup. Should be the most recent action.
	 * @param {object} swiper - swiper instance
	 */
	function setRealPrevious(swiper) {
		let element = swiper.$wrapperEl[0].children[swiper.activeIndex];
		swiper.realPrevious = Array.prototype.indexOf.call(element.parentNode.children, element);
	}

	/**
	 * @desc Sets slides background images from attribute 'data-slide-bg'
	 * @param {object} swiper - swiper instance
	 */
	function setBackgrounds(swiper) {
		let swipersBg = swiper.el.querySelectorAll('[data-slide-bg]');

		for (let i = 0; i < swipersBg.length; i++) {
			let swiperBg = swipersBg[i];
			swiperBg.style.backgroundImage = 'url(' + swiperBg.getAttribute('data-slide-bg') + ')';
		}
	}

	/**
	 * @desc Animate captions on active slides
	 * @param {object} swiper - swiper instance
	 */
	function initCaptionAnimate(swiper) {
		let
			animate = function (caption) {
				return function () {
					let duration;
					if (duration = caption.getAttribute('data-caption-duration')) caption.style.animationDuration = duration + 'ms';
					caption.classList.remove('not-animated');
					caption.classList.add(caption.getAttribute('data-caption-animate'));
					caption.classList.add('animated');
				};
			},
			initializeAnimation = function (captions) {
				for (let i = 0; i < captions.length; i++) {
					let caption = captions[i];
					caption.classList.remove('animated');
					caption.classList.remove(caption.getAttribute('data-caption-animate'));
					caption.classList.add('not-animated');
				}
			},
			finalizeAnimation = function (captions) {
				for (let i = 0; i < captions.length; i++) {
					let caption = captions[i];
					if (caption.getAttribute('data-caption-delay')) {
						setTimeout(animate(caption), Number(caption.getAttribute('data-caption-delay')));
					} else {
						animate(caption)();
					}
				}
			};

		// Caption parameters
		swiper.params.caption = {
			animationEvent: 'slideChangeTransitionEnd'
		};

		initializeAnimation(swiper.$wrapperEl[0].querySelectorAll('[data-caption-animate]'));
		finalizeAnimation(swiper.$wrapperEl[0].children[swiper.activeIndex].querySelectorAll('[data-caption-animate]'));

		if (swiper.params.caption.animationEvent === 'slideChangeTransitionEnd') {
			swiper.on(swiper.params.caption.animationEvent, function () {
				initializeAnimation(swiper.$wrapperEl[0].children[swiper.previousIndex].querySelectorAll('[data-caption-animate]'));
				finalizeAnimation(swiper.$wrapperEl[0].children[swiper.activeIndex].querySelectorAll('[data-caption-animate]'));
			});
		} else {
			swiper.on('slideChangeTransitionEnd', function () {
				initializeAnimation(swiper.$wrapperEl[0].children[swiper.previousIndex].querySelectorAll('[data-caption-animate]'));
			});

			swiper.on(swiper.params.caption.animationEvent, function () {
				finalizeAnimation(swiper.$wrapperEl[0].children[swiper.activeIndex].querySelectorAll('[data-caption-animate]'));
			});
		}
	}

	/**
	 * @desc Initialize owl carousel plugin
	 * @param {object} c - carousel jQuery object
	 */
	function initOwlCarousel(c) {
		var aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"],
			values = [0, 576, 768, 992, 1200, 1600],
			responsive = {};

		for (var j = 0; j < values.length; j++) {
			responsive[values[j]] = {};
			for (var k = j; k >= -1; k--) {
				if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
					responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
				}
				if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
					responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
				}
				if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
					responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
				}
			}
		}

		// Enable custom pagination
		if (c.attr('data-dots-custom')) {
			c.on("initialized.owl.carousel", function (event) {
				var carousel = $(event.currentTarget),
					customPag = $(carousel.attr("data-dots-custom")),
					active = 0;

				if (carousel.attr('data-active')) {
					active = parseInt(carousel.attr('data-active'), 10);
				}

				carousel.trigger('to.owl.carousel', [active, 300, true]);
				customPag.find("[data-owl-item='" + active + "']").addClass("active");

				customPag.find("[data-owl-item]").on('click', function (e) {
					e.preventDefault();
					carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
				});

				carousel.on("translate.owl.carousel", function (event) {
					customPag.find(".active").removeClass("active");
					customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
				});
			});
		}

		c.on("initialized.owl.carousel", function () {
			initLightGalleryItem(c.find('[data-lightgallery="item"]'), 'lightGallery-in-carousel');
		});

		c.owlCarousel({
			autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
			loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
			items: 1,
			center: c.attr("data-center") === "true",
			dotsContainer: c.attr("data-pagination-class") || false,
			navContainer: c.attr("data-navigation-class") || false,
			mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
			nav: c.attr("data-nav") === "true",
			dots: c.attr("data-dots") === "true",
			dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
			animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
			animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
			responsive: responsive,
			navText: c.attr("data-nav-text") ? $.parseJSON(c.attr("data-nav-text")) : [],
			navClass: c.attr("data-nav-class") ? $.parseJSON(c.attr("data-nav-class")) : ['owl-prev', 'owl-next']
		});
	}

	/**
	 * @desc Initialize the gallery with set of images
	 * @param {object} itemsToInit - jQuery object
	 * @param {string} addClass - additional gallery class
	 */
	function initLightGallery(itemsToInit, addClass) {
		if (!isNoviBuilder) {
			$(itemsToInit).lightGallery({
				thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
				selector: "[data-lightgallery='item']",
				autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
				pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
				addClass: addClass,
				mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
				loop: $(itemsToInit).attr("data-lg-loop") !== "false"
			});
		}
	}

	/**
	 * @desc Initialize the gallery with dynamic addition of images
	 * @param {object} itemsToInit - jQuery object
	 * @param {string} addClass - additional gallery class
	 */
	function initDynamicLightGallery(itemsToInit, addClass) {
		if (!isNoviBuilder) {
			$(itemsToInit).on("click", function () {
				$(itemsToInit).lightGallery({
					thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false",
					selector: "[data-lightgallery='item']",
					autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true",
					pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000,
					addClass: addClass,
					mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide",
					loop: $(itemsToInit).attr("data-lg-loop") !== "false",
					dynamic: true,
					dynamicEl: JSON.parse($(itemsToInit).attr("data-lg-dynamic-elements")) || []
				});
			});
		}
	}

	/**
	 * @desc Initialize the gallery with one image
	 * @param {object} itemToInit - jQuery object
	 * @param {string} addClass - additional gallery class
	 */
	function initLightGalleryItem(itemToInit, addClass) {
		if (!isNoviBuilder) {
			$(itemToInit).lightGallery({
				selector: "this",
				addClass: addClass,
				counter: false,
				youtubePlayerParams: {
					modestbranding: 1,
					showinfo: 0,
					rel: 0,
					controls: 0
				},
				vimeoPlayerParams: {
					byline: 0,
					portrait: 0
				}
			});
		}
	}

	/**
	 * @desc Google map function for getting latitude and longitude
	 */
	function getLatLngObject(str, marker, map, callback) {
		let coordinates = {};
		try {
			coordinates = JSON.parse(str);
			callback(new google.maps.LatLng(
				coordinates.lat,
				coordinates.lng
			), marker, map)
		} catch (e) {
			map.geocoder.geocode({'address': str}, function (results, status) {
				if (status === google.maps.GeocoderStatus.OK) {
					let latitude = results[0].geometry.location.lat();
					let longitude = results[0].geometry.location.lng();

					callback(new google.maps.LatLng(
						parseFloat(latitude),
						parseFloat(longitude)
					), marker, map)
				}
			})
		}
	}

	/**
	 * @desc Initialize Google maps
	 */
	function initMaps() {
		let key;

		for (let i = 0; i < plugins.maps.length; i++) {
			if (plugins.maps[i].hasAttribute("data-key")) {
				key = plugins.maps[i].getAttribute("data-key");
				break;
			}
		}

		$.getScript('//maps.google.com/maps/api/js?' + (key ? 'key=' + key + '&' : '') + 'libraries=geometry,places&v=quarterly', function () {
			let head = document.getElementsByTagName('head')[0],
				insertBefore = head.insertBefore;

			head.insertBefore = function (newElement, referenceElement) {
				if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') !== -1 || newElement.innerHTML.indexOf('gm-style') !== -1) {
					return;
				}
				insertBefore.call(head, newElement, referenceElement);
			};
			let geocoder = new google.maps.Geocoder;
			for (let i = 0; i < plugins.maps.length; i++) {
				let zoom = parseInt(plugins.maps[i].getAttribute("data-zoom"), 10) || 11;
				let styles = plugins.maps[i].hasAttribute('data-styles') ? JSON.parse(plugins.maps[i].getAttribute("data-styles")) : [];
				let center = plugins.maps[i].getAttribute("data-center") || "New York";

				// Initialize map
				let map = new google.maps.Map(plugins.maps[i].querySelectorAll(".google-map")[0], {
					zoom: zoom,
					styles: styles,
					scrollwheel: false,
					center: {
						lat: 0,
						lng: 0
					}
				});

				// Add map object to map node
				plugins.maps[i].map = map;
				plugins.maps[i].geocoder = geocoder;
				plugins.maps[i].keySupported = true;
				plugins.maps[i].google = google;

				// Get Center coordinates from attribute
				getLatLngObject(center, null, plugins.maps[i], function (location, markerElement, mapElement) {
					mapElement.map.setCenter(location);
				});

				// Add markers from google-map-markers array
				let markerItems = plugins.maps[i].querySelectorAll(".google-map-markers li");

				if (markerItems.length) {
					let markers = [];
					for (let j = 0; j < markerItems.length; j++) {
						let markerElement = markerItems[j];
						getLatLngObject(markerElement.getAttribute("data-location"), markerElement, plugins.maps[i], function (location, markerElement, mapElement) {
							let icon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
							let activeIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active");
							let info = markerElement.getAttribute("data-description") || "";
							let infoWindow = new google.maps.InfoWindow({
								content: info
							});
							markerElement.infoWindow = infoWindow;
							let markerData = {
								position: location,
								map: mapElement.map
							}
							if (icon) {
								markerData.icon = icon;
							}
							let marker = new google.maps.Marker(markerData);
							markerElement.gmarker = marker;
							markers.push({
								markerElement: markerElement,
								infoWindow: infoWindow
							});
							marker.isActive = false;
							// Handle infoWindow close click
							google.maps.event.addListener(infoWindow, 'closeclick', (function (markerElement, mapElement) {
								let markerIcon = null;
								markerElement.gmarker.isActive = false;
								markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
								markerElement.gmarker.setIcon(markerIcon);
							}).bind(this, markerElement, mapElement));


							// Set marker active on Click and open infoWindow
							google.maps.event.addListener(marker, 'click', (function (markerElement, mapElement) {
								let markerIcon;
								if (markerElement.infoWindow.getContent().length === 0) return;
								let gMarker, currentMarker = markerElement.gmarker, currentInfoWindow;
								for (let k = 0; k < markers.length; k++) {
									if (markers[k].markerElement === markerElement) {
										currentInfoWindow = markers[k].infoWindow;
									}
									gMarker = markers[k].markerElement.gmarker;
									if (gMarker.isActive && markers[k].markerElement !== markerElement) {
										gMarker.isActive = false;
										markerIcon = markers[k].markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")
										gMarker.setIcon(markerIcon);
										markers[k].infoWindow.close();
									}
								}

								currentMarker.isActive = !currentMarker.isActive;
								if (currentMarker.isActive) {
									if (markerIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active")) {
										currentMarker.setIcon(markerIcon);
									}

									currentInfoWindow.open(map, marker);
								} else {
									if (markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")) {
										currentMarker.setIcon(markerIcon);
									}
									currentInfoWindow.close();
								}
							}).bind(this, markerElement, mapElement))
						})
					}
				}
			}
		});
	}

	/**
	 * isScrolledIntoView
	 * @description  check the element whas been scrolled into the view
	 */
	function isScrolledIntoView(elem) {
		var $window = $(window);
		return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
	}

	/**
	 * Live Search
	 * @description  create live search results
	 */
	function liveSearch(options) {
		$('#' + options.live).removeClass('cleared').html();
		options.current++;
		options.spin.addClass('loading');
		$.get(handler, {
			s: decodeURI(options.term),
			liveSearch: options.live,
			dataType: "html",
			liveCount: options.liveCount,
			filter: options.filter,
			template: options.template
		}, function (data) {
			options.processed++;
			var live = $('#' + options.live);
			if (options.processed == options.current && !live.hasClass('cleared')) {
				live.find('> #search-results').removeClass('active');
				live.removeClass('active');
				live.html(data);
				setTimeout(function () {
					live.find('> #search-results').addClass('active');
					live.addClass('active');
				}, 50);
			}
			options.spin.parents('.rd-search').find('.input-group-addon').removeClass('loading');
		})
	}

	/**
	 * attachFormValidator
	 * @description  attach form validation to elements
	 */
	function attachFormValidator(elements) {
		for (var i = 0; i < elements.length; i++) {
			var o = $(elements[i]), v;
			o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
			v = o.parent().find(".form-validation");
			if (v.is(":last-child")) {
				o.addClass("form-control-last-child");
			}
		}

		elements
			.on('input change propertychange blur', function (e) {
				var $this = $(this), results;

				if (e.type !== "blur") {
					if (!$this.parent().hasClass("has-error")) {
						return;
					}
				}

				if ($this.parents('.rd-mailform').hasClass('success')) {
					return;
				}

				if ((results = $this.regula('validate')).length) {
					for (i = 0; i < results.length; i++) {
						$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error")
					}
				} else {
					$this.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			})
			.regula('bind');

		var regularConstraintsMessages = [
			{
				type: regula.Constraint.Required,
				newMessage: "The text field is required."
			},
			{
				type: regula.Constraint.Email,
				newMessage: "The email is not a valid email."
			},
			{
				type: regula.Constraint.Numeric,
				newMessage: "Only numbers are required"
			},
			{
				type: regula.Constraint.Selected,
				newMessage: "Please choose an option."
			}
		];


		for (var i = 0; i < regularConstraintsMessages.length; i++) {
			var regularConstraint = regularConstraintsMessages[i];

			regula.override({
				constraintType: regularConstraint.type,
				defaultMessage: regularConstraint.newMessage
			});
		}
	}

	/**
	 * isValidated
	 * @description  check if all elemnts pass validation
	 */
	function isValidated(elements, captcha) {
		var results, errors = 0;

		if (elements.length) {
			for (j = 0; j < elements.length; j++) {

				var $input = $(elements[j]);
				if ((results = $input.regula('validate')).length) {
					for (k = 0; k < results.length; k++) {
						errors++;
						$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
					}
				} else {
					$input.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			}

			if (captcha) {
				if (captcha.length) {
					return validateReCaptcha(captcha) && errors === 0
				}
			}

			return errors === 0;
		}
		return true;
	}

	/**
	 * validateReCaptcha
	 * @description  validate google reCaptcha
	 */
	function validateReCaptcha(captcha) {
		var captchaToken = captcha.find('.g-recaptcha-response').val();

		if (captchaToken.length === 0) {
			captcha
				.siblings('.form-validation')
				.html('Please, prove that you are not robot.')
				.addClass('active');
			captcha
				.closest('.form-group')
				.addClass('has-error');

			captcha.on('propertychange', function () {
				var $this = $(this),
					captchaToken = $this.find('.g-recaptcha-response').val();

				if (captchaToken.length > 0) {
					$this
						.closest('.form-group')
						.removeClass('has-error');
					$this
						.siblings('.form-validation')
						.removeClass('active')
						.html('');
					$this.off('propertychange');
				}
			});

			return false;
		}

		return true;
	}

	/**
	 * onloadCaptchaCallback
	 * @description  init google reCaptcha
	 */
	window.onloadCaptchaCallback = function () {
		for (i = 0; i < plugins.captcha.length; i++) {
			var $capthcaItem = $(plugins.captcha[i]);

			grecaptcha.render(
				$capthcaItem.attr('id'),
				{
					sitekey: $capthcaItem.attr('data-sitekey'),
					size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal',
					theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light',
					callback: function (e) {
						$('.recaptcha').trigger('propertychange');
					}
				}
			);
			$capthcaItem.after("<span class='form-validation'></span>");
		}
	};

	/**
	 * Copyright Year
	 * @description  Evaluates correct copyright year
	 */
	if ( plugins.copyrightYear.length ) {
		plugins.copyrightYear.text(initialDate.getFullYear());
	}

	/**
	 * IE Polyfills
	 * @description  Adds some loosing functionality to IE browsers
	 */
	if (isIE) {
		if (isIE < 10) {
			$html.addClass("lt-ie-10");
		}

		if (isIE < 11) {
			if (plugins.pointerEvents) {
				$.getScript(plugins.pointerEvents)
					.done(function () {
						$html.addClass("ie-10");
						PointerEventsPolyfill.initialize({});
					});
			}
		}

		if (isIE === 11) {
			$("html").addClass("ie-11");
		}

		if (isIE === 12) {
			$("html").addClass("ie-edge");
		}
	}

	// Google maps
	if (plugins.maps.length) {
		lazyInit(plugins.maps, initMaps);
	}

	/**
	 * Bootstrap Date time picker
	 */
	if (plugins.bootstrapDateTimePicker.length) {
		for (var i = 0; i < plugins.bootstrapDateTimePicker.length; i++) {
			var
				$dateTimePicker = $(plugins.bootstrapDateTimePicker[i]),
				options = {
					date: $dateTimePicker.attr("data-time-picker") === "date",
					time: $dateTimePicker.attr("data-time-picker") === "time",
					shortTime: true
				};

			if (options.date) {
				options.format = 'dddd DD MMMM YYYY';
				options.minDate = new Date();
			} else if (options.time) {
				options.format = 'HH:mm';
			} else {
				options.format = 'dddd DD MMMM YYYY - HH:mm';
			}

			$dateTimePicker.bootstrapMaterialDatePicker(options);
		}
	}

	/**
	 * Responsive Tabs
	 * @description Enables Responsive Tabs plugin
	 */
	if (plugins.responsiveTabs.length > 0) {
		for (var i = 0; i < plugins.responsiveTabs.length; i++) {
			var responsiveTabsItem = $(plugins.responsiveTabs[i]);
			var setCustomHash = responsiveTabsItem.attr('data-custom-hash') == 'true';

			var currentHash = window.location.hash;

			if (currentHash) {
				currentHash = currentHash.split('|')[0];
			}

			if (setCustomHash && currentHash) {
				setTimeout(function () {
					responsiveTabsItem.find("a[href$='" + currentHash + "']").first().on('click', function () {
						window.location.hash = currentHash;
					});
				}, 100);
			}

			responsiveTabsItem.easyResponsiveTabs({
				type: responsiveTabsItem.attr("data-type") === "accordion" ? "accordion" : "default"
			});
		}
	}

	/**
	 * RD Flickr Feed
	 * @description Enables RD Flickr Feed plugin
	 */
	if (plugins.flickrfeed.length > 0) {
		var i;
		for (i = 0; i < plugins.flickrfeed.length; i++) {
			var flickrfeedItem = $(plugins.flickrfeed[i]);
			flickrfeedItem.RDFlickr({
				callback: function () {
					var items = flickrfeedItem.find("[data-photo-swipe-item]");

					if (items.length) {
						for (var j = 0; j < items.length; j++) {
							var image = new Image();
							image.setAttribute('data-index', j);
							image.onload = function () {
								items[this.getAttribute('data-index')].setAttribute('data-size', this.naturalWidth + 'x' + this.naturalHeight);
							};
							image.src = items[j].getAttribute('href');
						}
					}
				}
			});
		}
	}

	/**
	 * Select2
	 * @description Enables select2 plugin
	 */
	if (plugins.selectFilter.length) {
		var i;
		for (i = 0; i < plugins.selectFilter.length; i++) {
			var select = $(plugins.selectFilter[i]);

			select.select2({
				theme: "bootstrap"
			}).next().addClass(select.attr("class").match(/(input-sm)|(input-lg)|($)/i).toString().replace(new RegExp(",", 'g'), " "));
		}
	}

	/**
	 * Radio
	 * @description Add custom styling options for input[type="radio"]
	 */
	if (plugins.radio.length) {
		var i;
		for (i = 0; i < plugins.radio.length; i++) {
			var $this = $(plugins.radio[i]);
			$this.addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
		}
	}

	/**
	 * Checkbox
	 * @description Add custom styling options for input[type="checkbox"]
	 */
	if (plugins.checkbox.length) {
		var i;
		for (i = 0; i < plugins.checkbox.length; i++) {
			var $this = $(plugins.checkbox[i]);
			$this.addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
		}
	}

	/**
	 * @module TimeCircles
	 * @author Wim Barelds
	 * @version 1.5.3
	 * @see http://www.wimbarelds.nl/
	 * @license MIT License
	 */
	if (plugins.dateCountdown.length) {
		for (i = 0; i < plugins.dateCountdown.length; i++) {
			var dateCountdownItem = $(plugins.dateCountdown[i]),
				time = {
					"Days": {
						"text": "Days",
						"color": "#839ca1",
						"show": true
					},
					"Hours": {
						"text": "Hours",
						"color": "#839ca1",
						"show": true
					},
					"Minutes": {
						"text": "Minutes",
						"color": "#839ca1",
						"show": true
					},
					"Seconds": {
						"text": "Seconds",
						"color": "#839ca1",
						"show": true
					}
				};
			dateCountdownItem.TimeCircles({
				"animation": "smooth",
				"bg_width": 1,
				"fg_width": 0.04,
				"circle_bg_color": dateCountdownItem.attr('data-bg') ? dateCountdownItem.attr('data-bg') : "rgba(255,255,255,.39)",
				"time": time
			});

			$(window).on('load resize orientationchange', (function ($dateCountdownItem, time) {
				return function () {
					if (window.innerWidth < 479) {
						$dateCountdownItem.TimeCircles({
							time: {
								Minutes: {show: true},
								Seconds: {show: false}
							}
						}).rebuild();
					} else if (window.innerWidth < 767) {
						$dateCountdownItem.TimeCircles({
							time: {
								Seconds: {show: false}
							}
						}).rebuild();
					} else {
						$dateCountdownItem.TimeCircles({time: time}).rebuild();
					}
				}

			})($(dateCountdownItem), time));
		}
	}

	/**
	 * RD Calendar
	 * @description Enables RD Calendar plugin
	 */
	if (plugins.calendar.length) {
		var i;
		for (i = 0; i < plugins.calendar.length; i++) {
			var calendarItem = $(plugins.calendar[i]);

			calendarItem.rdCalendar({
				days: calendarItem.attr("data-days") ? calendarItem.attr("data-days").split(/\s?,\s?/i) : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				month: calendarItem.attr("data-months") ? calendarItem.attr("data-months").split(/\s?,\s?/i) : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
			});
		}
	}

	/**
	 * UI To Top
	 * @description Enables ToTop Button
	 */
	if (isDesktop) {
		$().UItoTop({
			easingType: 'easeOutQuart',
			containerClass: 'ui-to-top fa fa-chevron-up'
		});
	}

	/**
	 * RD Navbar
	 * @description Enables RD Navbar plugin
	 */
	if (plugins.rdNavbar.length) {
		let
			navbar = plugins.rdNavbar,
			aliases = {
				'-': 0,
				'-sm-': 576,
				'-md-': 768,
				'-lg-': 992,
				'-xl-': 1200,
				'-xxl-': 1600
			},
			responsive = {};

		for (let alias in aliases) {
			let link = responsive[aliases[alias]] = {};
			if (navbar.attr('data' + alias + 'layout')) link.layout = navbar.attr('data' + alias + 'layout');
			if (navbar.attr('data' + alias + 'device-layout')) link.deviceLayout = navbar.attr('data' + alias + 'device-layout');
			if (navbar.attr('data' + alias + 'hover-on')) link.focusOnHover = navbar.attr('data' + alias + 'hover-on') === 'true';
			if (navbar.attr('data' + alias + 'auto-height')) link.autoHeight = navbar.attr('data' + alias + 'auto-height') === 'true';
			if (navbar.attr('data' + alias + 'stick-up-offset')) link.stickUpOffset = navbar.attr('data' + alias + 'stick-up-offset');
			if (navbar.attr('data' + alias + 'stick-up')) link.stickUp = navbar.attr('data' + alias + 'stick-up') === 'true';
			if (isNoviBuilder) link.stickUp = false;
			else if (navbar.attr('data' + alias + 'stick-up')) link.stickUp = navbar.attr('data' + alias + 'stick-up') === 'true';
		}

		plugins.rdNavbar.RDNavbar({
			anchorNav: !isNoviBuilder,
			stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
			responsive: responsive,
			callbacks: {
				onStuck: function () {
					let navbarSearch = this.$element.find('.rd-search input');

					if (navbarSearch) {
						navbarSearch.val('').trigger('propertychange');
					}
				},
				onDropdownOver: function () {
					return !isNoviBuilder;
				},
				onUnstuck: function () {
					if (this.$clone === null)
						return;

					let navbarSearch = this.$clone.find('.rd-search input');

					if (navbarSearch) {
						navbarSearch.val('').trigger('propertychange');
						navbarSearch.trigger('blur');
					}

				}
			}
		});
	}

	// Swiper
	if (plugins.swiper.length) {

		for (let i = 0; i < plugins.swiper.length; i++) {

			let
				node = plugins.swiper[i],
				params = parseJSON(node.getAttribute('data-swiper')),
				defaults = {
					speed: 1000,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					autoplay: {
						delay: 5000
					}
				},
				xMode = {
					autoplay: false,
					loop: false,
					simulateTouch: false
				};

			params.on = {
				init: function () {
					setBackgrounds(this);
					setRealPrevious(this);
					initCaptionAnimate(this);

					// Real Previous Index must be set recent
					this.on('slideChangeTransitionEnd', function () {
						setRealPrevious(this);
					});
				}
			};

			new Swiper(node, Util.merge(isNoviBuilder ? [defaults, params, xMode] : [defaults, params]));
		}
	}

	/**
	 * RD Search
	 * @description Enables search
	 */
	if (plugins.search.length || plugins.searchResults) {
		var handler = "bat/rd-search.php";
		var defaultTemplate = '<h6 class="search_title"><a target="_top" href="#{href}" class="search_link">#{title}</a></h6>' +
			'<p>...#{token}...</p>' +
			'<p class="match">';
		var defaultFilter = '*.html';

		if (plugins.search.length) {

			for (i = 0; i < plugins.search.length; i++) {
				var searchItem = $(plugins.search[i]),
					options = {
						element: searchItem,
						filter: (searchItem.attr('data-search-filter')) ? searchItem.attr('data-search-filter') : defaultFilter,
						template: (searchItem.attr('data-search-template')) ? searchItem.attr('data-search-template') : defaultTemplate,
						live: (searchItem.attr('data-search-live')) ? searchItem.attr('data-search-live') : false,
						liveCount: (searchItem.attr('data-search-live-count')) ? parseInt(searchItem.attr('data-search-live')) : 4,
						current: 0, processed: 0, timer: {}
					};

				if ($('.rd-navbar-search-toggle').length) {
					var toggle = $('.rd-navbar-search-toggle');
					toggle.on('click', function () {
						if (!($(this).hasClass('active'))) {
							searchItem.find('input').val('').trigger('propertychange');
						}
					});
				}

				if (options.live) {
					var clearHandler = false;

					searchItem.find('input').on("keyup input propertychange", $.proxy(function () {
						this.term = this.element.find('input').val().trim();
						this.spin = this.element.find('.input-group-addon');

						clearTimeout(this.timer);

						if (this.term.length > 2) {
							this.timer = setTimeout(liveSearch(this), 200);

							if (clearHandler == false) {
								clearHandler = true;

								$("body").on("click", function (e) {
									if ($(e.toElement).parents('.rd-search').length == 0) {
										$('#rd-search-results-live').addClass('cleared').html('');
										$('#rd-search-results-live-1').addClass('cleared').html('');
									}
								})
							}

						} else if (this.term.length == 0) {
							$('#' + this.live).addClass('cleared').html('');
						}
					}, options, this));
				}

				searchItem.submit($.proxy(function () {
					$('<input />').attr('type', 'hidden')
						.attr('name', "filter")
						.attr('value', this.filter)
						.appendTo(this.element);
					return true;
				}, options, this))
			}
		}

		if (plugins.searchResults.length) {
			var regExp = /\?.*s=([^&]+)\&filter=([^&]+)/g;
			var match = regExp.exec(location.search);

			if (match != null) {
				$.get(handler, {
					s: decodeURI(match[1]),
					dataType: "html",
					filter: match[2],
					template: defaultTemplate,
					live: ''
				}, function (data) {
					plugins.searchResults.html(data);
				})
			}
		}
	}

	/**
	 * Slick carousel
	 * @description  Enable Slick carousel plugin
	 */
	if (plugins.slick.length) {
		var i;
		for (i = 0; i < plugins.slick.length; i++) {
			var $slickItem = $(plugins.slick[i]);
			$slickItem.slick({
				slidesToScroll: parseInt($slickItem.attr('data-slide-to-scroll')) || 1,
				asNavFor: $slickItem.attr('data-for') || false,
				dots: $slickItem.attr("data-dots") == "true",
				infinite: true,
				focusOnSelect: false,
				arrows: $slickItem.attr("data-arrows") == "true",
				swipe: $slickItem.attr("data-swipe") == "true",
				autoplay: $slickItem.attr("data-autoplay") == "true",
				vertical: $slickItem.attr("data-vertical") == "true",
				centerMode: $slickItem.attr("data-center-mode") == "true",
				centerPadding: $slickItem.attr("data-center-padding") ? $slickItem.attr("data-center-padding") : '0.5',
				mobileFirst: true,
				responsive: [
					{
						breakpoint: 0,
						settings: {
							centerMode: $slickItem.attr("data-mobile-center-mode") == "true",
							slidesToShow: parseInt($slickItem.attr('data-items')) || 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: parseInt($slickItem.attr('data-xs-items')) || 1
						}
					},
					{
						breakpoint: 767,
						settings: {
							centerMode: $slickItem.attr("data-sm-center-mode") == "true",
							centerPadding: $slickItem.attr("data-sm-center-padding") ? $slickItem.attr("data-sm-center-padding") : '0',
							slidesToShow: parseInt($slickItem.attr('data-md-items')) || 1
						}
					},
					{
						breakpoint: 992,
						settings: {
							centerPadding: 0,
							centerMode: $slickItem.attr("data-sm-center-mode") == "true",
							slidesToShow: parseInt($slickItem.attr('data-lg-items')) || 1
						}
					},
					{
						breakpoint: 1200,
						settings: {
							centerPadding: 0,
							centerMode: $slickItem.attr("data-sm-center-mode") == "true",
							slidesToShow: parseInt($slickItem.attr('data-xl-items')) || 1
						}
					},
					{
						breakpoint: 1800,
						settings: {
							centerPadding: 0,
							centerMode: $slickItem.attr("data-sm-center-mode") == "true",
							slidesToShow: parseInt($slickItem.attr('data-xxl-items')) || 1
						}
					}
				]
			})
				.on('afterChange', function (event, slick, currentSlide, nextSlide) {
					var $this = $(this),
						childCarousel = $this.attr('data-child');

					if (childCarousel) {
						$(childCarousel + ' .slick-slide').removeClass('slick-current');
						$(childCarousel + ' .slick-slide').eq(currentSlide).addClass('slick-current');
					}
				});
		}
	}

	// Owl carousel
	if (plugins.owl.length) {
		for (var i = 0; i < plugins.owl.length; i++) {
			var c = $(plugins.owl[i]);
			plugins.owl[i].owl = c;

			initOwlCarousel(c);
		}
	}

	/**
	 * jQuery Count To
	 * @description Enables Count To plugin
	 */
	if (plugins.counter.length) {
		var i;

		for (i = 0; i < plugins.counter.length; i++) {
			var $counterNotAnimated = $(plugins.counter[i]).not('.animated');
			$document
				.on("scroll", $.proxy(function () {
					var $this = this;

					if ((!$this.hasClass("animated")) && (isScrolledIntoView($this))) {
						$this.countTo({
							refreshInterval: 40,
							speed: $this.attr("data-speed") || 1000,
							formatter: function (value, options) {
								return value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ');
							}
						});
						$this.addClass('animated');
					}
				}, $counterNotAnimated))
				.trigger("scroll");
		}
	}

	// Isotope
	if (plugins.isotope.length) {
		var isogroup = [];
		for (var i = 0; i < plugins.isotope.length; i++) {
			var isotopeItem = plugins.isotope[i],
				isotopeInitAttrs = {
					itemSelector: '.isotope-item',
					layoutMode: isotopeItem.getAttribute('data-isotope-layout') ? isotopeItem.getAttribute('data-isotope-layout') : 'masonry',
					filter: '*'
				};

			if (isotopeItem.getAttribute('data-column-width')) {
				isotopeInitAttrs.masonry = {
					columnWidth: parseFloat(isotopeItem.getAttribute('data-column-width'))
				};
			} else if (isotopeItem.getAttribute('data-column-class')) {
				isotopeInitAttrs.masonry = {
					columnWidth: isotopeItem.getAttribute('data-column-class')
				};
			}

			var iso = new Isotope(isotopeItem, isotopeInitAttrs);
			isogroup.push(iso);
		}


		setTimeout(function () {
			for (var i = 0; i < isogroup.length; i++) {
				isogroup[i].element.className += " isotope--loaded";
				isogroup[i].layout();
			}
		}, 200);

		var resizeTimout;

		$("[data-isotope-filter]").on("click", function (e) {
			e.preventDefault();
			var filter = $(this);
			clearTimeout(resizeTimout);
			filter.parents(".isotope-filters").find('.active').removeClass("active");
			filter.addClass("active");
			var iso = $('.isotope[data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]'),
				isotopeAttrs = {
					itemSelector: '.isotope-item',
					layoutMode: iso.attr('data-isotope-layout') ? iso.attr('data-isotope-layout') : 'masonry',
					filter: this.getAttribute("data-isotope-filter") === '*' ? '*' : '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]'
				};
			if (iso.attr('data-column-width')) {
				isotopeAttrs.masonry = {
					columnWidth: parseFloat(iso.attr('data-column-width'))
				};
			} else if (iso.attr('data-column-class')) {
				isotopeAttrs.masonry = {
					columnWidth: iso.attr('data-column-class')
				};
			}
			iso.isotope(isotopeAttrs);
		}).eq(0).trigger("click")
	}

	/**
	 * WOW
	 * @description Enables Wow animation plugin
	 */
	if (isDesktop && $html.hasClass("wow-animation") && plugins.wow.length) {
		new WOW().init();
	}

	/**
	 * Google ReCaptcha
	 * @description Enables Google ReCaptcha
	 */
	if (plugins.captcha.length) {
		$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
	}

	/**
	 * Radio
	 * @description Add custom styling options for input[type="radio"]
	 */
	if (plugins.radio.length) {
		var i;
		for (i = 0; i < plugins.radio.length; i++) {
			$(plugins.radio[i]).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
		}
	}

	/**
	 * Checkbox
	 * @description Add custom styling options for input[type="checkbox"]
	 */
	if (plugins.checkbox.length) {
		var i;
		for (i = 0; i < plugins.checkbox.length; i++) {
			$(plugins.checkbox[i]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
		}
	}

	/**
	 * RD Input Label
	 * @description Enables RD Input Label Plugin
	 */
	if (plugins.rdInputLabel.length) {
		plugins.rdInputLabel.RDInputLabel();
	}

	/**
	 * Regula
	 * @description Enables Regula plugin
	 */
	if (plugins.regula.length) {
		attachFormValidator(plugins.regula);
	}

	/**
	 * RD Mailform
	 * @version      3.2.0
	 */
	if (plugins.rdMailForm.length) {
		var i, j, k,
			msg = {
				'MF000': 'Successfully sent!',
				'MF001': 'Recipients are not set!',
				'MF002': 'Form will not work locally!',
				'MF003': 'Please, define email field in your form!',
				'MF004': 'Please, define type of your form!',
				'MF254': 'Something went wrong with PHPMailer!',
				'MF255': 'Aw, snap! Something went wrong.'
			};

		for (i = 0; i < plugins.rdMailForm.length; i++) {
			var $form = $(plugins.rdMailForm[i]),
				formHasCaptcha = false;

			$form.attr('novalidate', 'novalidate').ajaxForm({
				data: {
					"form-type": $form.attr("data-form-type") || "contact",
					"counter": i
				},
				beforeSubmit: function (arr, $form, options) {
					if (isNoviBuilder)
						return;

					var form = $(plugins.rdMailForm[this.extraData.counter]),
						inputs = form.find("[data-constraints]"),
						output = $("#" + form.attr("data-form-output")),
						captcha = form.find('.recaptcha'),
						captchaFlag = true;

					output.removeClass("active error success");

					if (isValidated(inputs, captcha)) {

						// veify reCaptcha
						if (captcha.length) {
							var captchaToken = captcha.find('.g-recaptcha-response').val(),
								captchaMsg = {
									'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
									'CPT002': 'Something wrong with google reCaptcha'
								};

							formHasCaptcha = true;

							$.ajax({
								method: "POST",
								url: "bat/reCaptcha.php",
								data: {'g-recaptcha-response': captchaToken},
								async: false
							})
								.done(function (responceCode) {
									if (responceCode !== 'CPT000') {
										if (output.hasClass("snackbars")) {
											output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')

											setTimeout(function () {
												output.removeClass("active");
											}, 3500);

											captchaFlag = false;
										} else {
											output.html(captchaMsg[responceCode]);
										}

										output.addClass("active");
									}
								});
						}

						if (!captchaFlag) {
							return false;
						}

						form.addClass('form-in-process');

						if (output.hasClass("snackbars")) {
							output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
							output.addClass("active");
						}
					} else {
						return false;
					}
				},
				error: function (result) {
					if (isNoviBuilder)
						return;

					var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")),
						form = $(plugins.rdMailForm[this.extraData.counter]);

					output.text(msg[result]);
					form.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}
				},
				success: function (result) {
					if (isNoviBuilder)
						return;

					var form = $(plugins.rdMailForm[this.extraData.counter]),
						output = $("#" + form.attr("data-form-output")),
						select = form.find('select');

					form
						.addClass('success')
						.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}

					result = result.length === 5 ? result : 'MF255';
					output.text(msg[result]);

					if (result === "MF000") {
						if (output.hasClass("snackbars")) {
							output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
						} else {
							output.addClass("active success");
						}
					} else {
						if (output.hasClass("snackbars")) {
							output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
						} else {
							output.addClass("active error");
						}
					}

					form.clearForm();

					if (select.length) {
						select.select2("val", "");
					}

					form.find('input, textarea').trigger('blur');

					setTimeout(function () {
						output.removeClass("active error success");
						form.removeClass('success');
					}, 3500);
				}
			});
		}
	}

	/**
	 * Custom Waypoints
	 */
	if (plugins.customWaypoints.length) {
		var i;
		for (i = 0; i < plugins.customWaypoints.length; i++) {
			var $this = $(plugins.customWaypoints[i]);

			$this.on('click', function (e) {
				e.preventDefault();
				$("body, html").stop().animate({
					scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
				}, 1000, function () {
					$(window).trigger("resize");
				});
			});
		}
	}

	// lightGallery
	if (plugins.lightGallery.length) {
		for (var i = 0; i < plugins.lightGallery.length; i++) {
			initLightGallery(plugins.lightGallery[i]);
		}
	}

	// lightGallery item
	if (plugins.lightGalleryItem.length) {
		// Filter carousel items
		var notCarouselItems = [];

		for (var z = 0; z < plugins.lightGalleryItem.length; z++) {
			if (!$(plugins.lightGalleryItem[z]).parents('.owl-carousel').length &&
				!$(plugins.lightGalleryItem[z]).parents('.swiper-slider').length &&
				!$(plugins.lightGalleryItem[z]).parents('.slick-slider').length) {
				notCarouselItems.push(plugins.lightGalleryItem[z]);
			}
		}

		plugins.lightGalleryItem = notCarouselItems;

		for (var i = 0; i < plugins.lightGalleryItem.length; i++) {
			initLightGalleryItem(plugins.lightGalleryItem[i]);
		}
	}

	// Dynamic lightGallery
	if (plugins.lightDynamicGalleryItem.length) {
		for (var i = 0; i < plugins.lightDynamicGalleryItem.length; i++) {
			initDynamicLightGallery(plugins.lightDynamicGalleryItem[i]);
		}
	}
});
