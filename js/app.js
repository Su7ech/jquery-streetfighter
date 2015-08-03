$(document).ready(function() {
	playGame();
});

function playGame() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	}).mousedown(function() {
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
	}).mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
		$('.hadouken').hide();
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
}