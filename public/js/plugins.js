/*$(window).scroll(function(e){ 
  $el = $('nav'); 
  if ($(this).scrollTop() > 179 && $el.css('position') != 'fixed' && $('header').length){ 
    $('.navContainer').css({'position': 'fixed', 'top': '0px', 'background': 'rgba(0,0,0,1)'});
    $('#logoSmall').css({'opacity': '1'});
  } else if ($(this).scrollTop() < 180 && $el.css('position') != 'absolute' && $('header').length){ 
    $('.navContainer').css({'position': 'absolute', 'top': '180px', 'background': 'rgba(0,0,0,0)'});
    $('#logoSmall').css({'opacity': '0'});
  } 
});*/

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
	if($('header').length) {
		$('.navContainer').css({'position': 'absolute', 'top': '180px', 'background': 'rgba(0,0,0,0)'});
	    $('#logoSmall').css({'opacity': '0'});
	}
});      
// Hover Animations
$('nav ul li').hover(
	function(){$(this).addClass('animated pulse')},
	function(){$(this).removeClass('animated pulse')}
);
$('.feature-small').hover(
	function(){$(this).addClass('animated tada')},
	function(){$(this).removeClass('animated pulse')}
);
$('.footerContainer footer ul li').hover(
	function(){$(this).addClass('animated pulse')},
	function(){$(this).removeClass('animated pulse')}
);
