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
$(document).ready(function(){
    $("input[type='hidden']").each(function(){
      var prev = $(this).prev()
      var val =$("option:selected", prev).attr("value");
      $(this).attr("value", val);
      console.log(val);
    });
});
$(".details select").change(function (e) {
    var val = $("option:selected", this).attr("value");
    $(this).next().attr("value", val);
});
