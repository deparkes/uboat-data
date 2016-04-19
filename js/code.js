$( document ).ready(function() {
	var $el = $('.x-axis-container'); 
	var offset = $el.offset().top;\
	
	var isPositionFixed = ($el.css('position') == 'fixed');
		var left_offset = $("#chart-container").offset().left;
		var right_offset = ($(window).width() - ($("#chart-container").offset().left + $("#chart-container").outerWidth()));
		
		if ($(this).scrollTop() > offset && !isPositionFixed){ 
			$('.x-axis-container').css({'position': 'fixed', 'top': '0px', 'left': left_offset });
			$('#side-content').css({'position': 'fixed', 'top': '18px', 'right': right_offset });
		}
	
	$(window).scroll(function(e){ 
		var isPositionFixed = ($el.css('position') == 'fixed');
		var left_offset = $("#chart-container").offset().left;
		var right_offset = ($(window).width() - ($("#chart-container").offset().left + $("#chart-container").outerWidth()));

		if ($(this).scrollTop() > offset && !isPositionFixed){ 
			$('.x-axis-container').css({'position': 'fixed', 'top': '0px', 'left': left_offset });
			$('#side-content').css({'position': 'fixed', 'top': '18px', 'right': right_offset });
		}
		if ($(this).scrollTop() < offset) {
			$('.x-axis-container').css({'position': 'absolute', 'top': '-8px', 'left': 0});
			$('#side-content').css({'position': 'absolute', 'top': '6px', 'right': 0});
		} 
	});
	
	$(window).resize(function(){
		var isPositionFixed = ($el.css('position') == 'fixed');
		var left_offset = $("#chart-container").offset().left;
		var right_offset = ($(window).width() - ($("#chart-container").offset().left + $("#chart-container").outerWidth()));
		
		if ($(this).scrollTop() > offset && !isPositionFixed){ 
			$('.x-axis-container').css({'position': 'fixed', 'top': '0px', 'left': left_offset });
			$('#side-content').css({'position': 'fixed', 'top': '18px', 'right': right_offset });
		}
	});
});
