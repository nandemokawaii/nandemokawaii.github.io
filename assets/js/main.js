/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500
			});

	// Additional.
		$('#photocard-block').click(function() {
			$('.artist-block').slideToggle();

			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

		});
		$('#iu-artist-block').click(function() {
			$('#iu-photocard-images').slideToggle();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

		});
		$('#twice-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideToggle();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();
			
		});
		$('#bts-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideToggle();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();
			
		});
		$('#itzy-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideToggle();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();
			
		});
		$('#niziu-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideToggle();
			$('#bp-photocard-images').slideUp();
			
		});
		$('#bp-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideToggle();
			
		});

		$('#dual-photocard-block').click(function() {
			$('.artist-block').slideUp();

			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

		});


})(jQuery);