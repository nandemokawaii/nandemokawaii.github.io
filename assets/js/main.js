/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	

	var	$window = $(window),
		$body = $('body');
		$header = $('#header');

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
			window.preloader
			preloaderFadeOutTime = 2000;
			function hidePreloader() {
			var preloader = $('.lds-heart-wrapper');
			preloader.fadeOut(preloaderFadeOutTime);
			}
			hidePreloader();
			$body.addClass('is-preload');
			window.setTimeout(function() {
				$body.removeClass('is-preload');

				
			}, 2000);
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
		// $('#photocard-block').click(function() {
		// 	$('.artist-block').slideToggle();

		// 	$('#iu-photocard-images').slideUp();
		// 	$('#twice-photocard-images').slideUp();
		// 	$('#bts-photocard-images').slideUp();
		// 	$('#itzy-photocard-images').slideUp();
		// 	$('#niziu-photocard-images').slideUp();
		// 	$('#bp-photocard-images').slideUp();

		// });
		$('#iu-artist-block').click(function() {
			$('#iu-photocard-images').slideToggle();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();

		});
		$('#twice-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideToggle();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();
			
		});
		$('#bts-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideToggle();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();
			
		});
		$('#itzy-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideToggle();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();
			
		});
		$('#niziu-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideToggle();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();
			
		});
		$('#bp-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideToggle();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();
			
		});

		$('#iu-dual-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideToggle();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();

		});
		$('#twice-dual-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideToggle();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();
			
		});
		$('#bts-dual-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideToggle();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();
			
		});
		$('#itzy-dual-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideToggle();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideUp();
			
		});
		$('#niziu-dual-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideToggle();
			$('#bp-dual-photocard-images').slideUp();
			
		});
		$('#bp-dual-artist-block').click(function() {
			$('#iu-photocard-images').slideUp();
			$('#twice-photocard-images').slideUp();
			$('#bts-photocard-images').slideUp();
			$('#itzy-photocard-images').slideUp();
			$('#niziu-photocard-images').slideUp();
			$('#bp-photocard-images').slideUp();

			$('#iu-dual-photocard-images').slideUp();
			$('#twice-dual-photocard-images').slideUp();
			$('#bts-dual-photocard-images').slideUp();
			$('#itzy-dual-photocard-images').slideUp();
			$('#niziu-dual-photocard-images').slideUp();
			$('#bp-dual-photocard-images').slideToggle();
			
		});

		// $('#dual-photocard-block').click(function() {
		// 	$('.artist-block').slideUp();

		// 	$('#iu-photocard-images').slideUp();
		// 	$('#twice-photocard-images').slideUp();
		// 	$('#bts-photocard-images').slideUp();
		// 	$('#itzy-photocard-images').slideUp();
		// 	$('#niziu-photocard-images').slideUp();
		// 	$('#bp-photocard-images').slideUp();

		// 	$('#iu-dual-photocard-images').slideUp();
		// 	$('#twice-dual-photocard-images').slideUp();
		// 	$('#bts-dual-photocard-images').slideUp();
		// 	$('#itzy-dual-photocard-images').slideUp();
		// 	$('#niziu-dual-photocard-images').slideUp();
		// 	$('#bp-dual-photocard-images').slideUp();

		// });


})(jQuery);

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}