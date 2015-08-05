$(document).ready(function() {
	playGame();
});

function playGame() {
	$('.ryu').mouseenter(function() {
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
		$('.ryu-action').hide();
		$('.ryu-still').show();
	});
	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1100px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '600px');
			}
		)
	}).mouseup(function() {
		$('.ryu-action').hide();
		$('.ryu-still').show();
	});
	$(document).keydown(function(e) {
		if ( e.keyCode == 88 ) {
			$('.ryu-action').hide();
			$('.ryu-cool').show();
		}
	}).keyup(function(e) {
		if ( e.keyCode == 88 ) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
};

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};