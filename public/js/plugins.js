$(document).ready(function(){
	// Index Page Slideshow
	$(function() {
  		$("#slideshow > div:gt(0)").hide();
  		setInterval(function() {
  			$('#slideshow > div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow');
  			},  3000);
  		});
	
	$('.cutTitle').addClass('animated fadeInLeft');
	$('#logo').addClass('animated fadeInLeft');
});
// Shopping Cart toggle
$('#shopping').bind('click', function(){
  $('#fade').fadeIn(1000)
});
$('#xbutton').bind('click', function(){
  $('#fade').fadeOut(1000)
});
$('.item_add').click(
  function(){$('#shopping').addClass('animated tada')}
);
// Hover Animations
$('nav ul li').hover(
	function(){$(this).addClass('animated pulse')},
	function(){$(this).removeClass('animated pulse')}
);
$('.feature-small').hover(
	function(){$(this).addClass('animated pulse')},
	function(){$(this).removeClass('animated pulse')}
);
$('.footerContainer footer ul li').hover(
	function(){$(this).addClass('animated pulse')},
	function(){$(this).removeClass('animated pulse')}
);
