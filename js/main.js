(function($){
	'use strict';

	jQuery(document).ready(function($){
		
		// jQuery sticky menu
		$(".headerArea").sticky({topSpacing:0});
		
		// jQuery smooth scroll
		$('ul.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = '70';
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
		
		var ptable = $('.pricing-table').height();
		var lblogheight = $('.single-lBlog img').height();
		$('.blog-text').css('min-height', lblogheight + 'px');
		
		$('.single-pTable, .positionpTable').css('height', ptable + 'px');
		$('#bar1').barfiller({
			barColor:'#21a8e3'
		});
		$('#bar2').barfiller({
			barColor:'#21a8e3'
		});
		$('#bar3').barfiller({
			barColor:'#21a8e3'
		});
		$('#bar4').barfiller({
			barColor:'#21a8e3'
		});
		$('#bar5').barfiller({
			barColor:'#21a8e3'
		});
		$('.aweTeam-list').owlCarousel({
			items:4,
			loop:true,
			autoplay:true,
			autoplayTimeout:3000,
			margin:30
		});	
		$('.clients-say').owlCarousel({
			items:1,
			loop:true,
			autoplay:true,
			autoplayTimeout:3000,
			margin:30
		});		
		
	});
})(jQuery);
