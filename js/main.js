$(function(){
	$(".cnt").fitText();

	$("i").click(function(){
	  $(this).removeClass("fa-heart-o").addClass("animated bounceIn fa-heart");  
	  $(".place").html("").append("<h1 class='animated bounceIn'>"+$(this).data("love")+"</h1>");
	});
});
