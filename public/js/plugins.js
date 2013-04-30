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
  $('#fade').fadeIn(300)
});
$('.xbutton').bind('click', function(){
  $('.blackOverlay').fadeOut(300)
  $('#blank.light').children("figure").remove();
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
$('.teacher').click(function(e){
  var teacher = $(this).clone();
  console.log(teacher);
  $('#blank').fadeIn(300);
  $('#blank.light').append(teacher);

});
$(".details select").change(function (e) {
  var val1 = $(e.target ~ input[type='hidden']).attr("value1")
  var val2 = $(e.target ~ input[type='hidden']).attr("value2")
  var val3 = $(e.target ~ input[type='hidden']).attr("value3")
  var optionName = $(e).attr("name");
  if( optionName == '2'){
    $(e.target ~ input[type='hidden']).attr("value") = val2;
  }  else if(optionName == '1'){
    $(e.target ~ input[type='hidden']).attr("value") = val1;
  }  else if(optionName == '3'){
    $(e.target ~ input[type='hidden']).attr("value") = val3;
  }
});