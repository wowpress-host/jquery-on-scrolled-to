(function($) {
	// percentVisible - how much (from 0 to 1) element has to be visible
	// to trigger callback
	//
	// example:
	// $('.my-div').onScrolledTo(0.5, function() {
	//    this.html('fired');
	// });
	$.fn.onScrolledTo = function(portionVisible, callback) {
		var elements = [];
		this.each(function(i) {
			elements.push($(this));
		});


		$(window).on('onScrolledTo:positionChange', function(e, wTop, wBottom) {
			$.each(elements, function(i, el) {
				if (!el)
					return;

				var elTop = el.offset().top;
				var elHeight = el.height();
				var elBottom = elTop + el.height();
				var elRequiredHeight =
					(!portionVisible ? 0 : elHeight * portionVisible);

				if (
					/* scrolling down */
					elTop >= wTop && elTop + elRequiredHeight <= wBottom ||
					// scrolling up */
					elTop <= wTop && elBottom - elRequiredHeight >= wTop) {
					elements[i] = null;
					callback.call(el);
				}
			});
		});

		triggerOnScrolledToPositionChange();
	};



	function triggerOnScrolledToPositionChange() {
		var w = $(window);
		var wTop = w.scrollTop();
		var wBottom = wTop + w.height();
		w.trigger('onScrolledTo:positionChange', [wTop, wBottom]);
	}



	$(window).scroll(triggerOnScrolledToPositionChange);
	$(window).resize(triggerOnScrolledToPositionChange);
	$(document).ready(triggerOnScrolledToPositionChange);
}( jQuery ));
