
$(document).ready(function(){
    $(this).scrollTop(0);
});

(function ($) {
	"use strict";
    var wind = $(window);
    //Animated headline

	jQuery(document).ready(function ($) {


		$(function () {
			$('.caption-inner').animatedHeadline({
				animationType: 'clip'
			});
		})

	});
    
    
    wind.on("scroll", function () {

		var bodyScroll = wind.scrollTop()

		if (bodyScroll > 500) {

			$('#bar2').barfiller({
				// duration in ms
				duration: 2000
			});

			$('#bar3').barfiller({
				// duration in ms
				duration: 1600
			});

			$('#bar4').barfiller({
				// duration in ms
				duration: 1200
			});

			$('#bar5').barfiller({
				// duration in ms
				duration: 800
			});
		}

	});
    
    
  


}(jQuery));


//Scroll Function

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function (index) {
            $(this).removeClass('active'); 
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-link').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
