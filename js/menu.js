$(window).scroll(function(e){
	parallax();
});
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.bg').css('top',-(scrolled*0.2)+'px');

	var scrolled = $(window).scrollTop();
	$('.spec-text').css('top',-(scrolled*0.4)+'px');
}

$(document).ready(function(){
	$window = $(window);
$('section[data-type="background"]').each(function(){
     var $bgobj = $(this);
 $(window).scroll(function() {
		var yPos = +($window.scrollTop() / $bgobj.data('speed')); 
		var coords = '50% '+ yPos + 'px';
		$bgobj.css({ backgroundPosition: coords });
	}); 
 });	
}); 