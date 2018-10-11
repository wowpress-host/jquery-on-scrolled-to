(function($) {
    $('.block').onScrolledTo(0, function() {
        $('.log').html('onScrolledTo(0) fired for ' + this.attr('id') +
			"<br />\n" +
			$('.log').html());
        this.attr('class', 'block fired-0');
    });
    $('.block').onScrolledTo(0.5, function() {
        $('.log').html('onScrolledTo(0.5) fired for ' + this.attr('id') +
			"<br />\n" +
			$('.log').html());
        this.attr('class', 'block fired-0-5');
    });
    $('.block').onScrolledTo(1, function() {
        $('.log').html('onScrolledTo(1) fired for ' + this.attr('id') +
			"<br />\n" +
			$('.log').html());
        this.attr('class', 'block fired-1');
    });
})(jQuery);
