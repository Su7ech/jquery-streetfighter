$(document).ready(function() {
	playGame();
});

function playGame() {
	$('.ryu').mouseover(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '300px'},
			500, 
			function() {
				$(this).stop();
				$(this).hide();
				$(this).css('left', '-264px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.hadouken').hide();
	});
}