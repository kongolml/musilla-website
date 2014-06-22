$(document).ready(function (){

	//set width of the #played-songs-container
	var songItems = 0;
	var songItemsWidth = $(".song-item").outerWidth(true);
	var playedSongsContainerWidth = 0;

	$(".song-item").each(function() {
		songItems++;
	});

	playedSongsContainerWidth = songItemsWidth * songItems;

	$("#played-songs-container").css("width", playedSongsContainerWidth);


	//slide to the left
	$("button.left").click(function(){
		var leftCoord = parseInt($("#played-songs-container").css("left"));
		leftCoord = leftCoord + 170;
		$("#played-songs-container").css("left", leftCoord+"px");

		//disable slide button, if it's end of the slider
		var sliderPosition = parseInt($("#played-songs-container").css("left"));
		if (sliderPosition >= 45) {
			$("button.left").addClass("disabled");
			$("button.left").prop("disabled", true);
		} else {
			$("button.left").removeClass("disabled");
			$("button.left").prop("disabled", false);
			$("button.right").removeClass("disabled");
			$("button.right").prop("disabled", false);
		}
	});


	//slide to the right
	$("button.right").click(function(){
		var leftCoord = parseInt($("#played-songs-container").css("left"));
		leftCoord = leftCoord - 170;
		$("#played-songs-container").css("left", leftCoord+"px");

		//disable slide button, if it's end of the slider
		var sliderPosition = parseInt($("#played-songs-container").css("left"));
		var sliderEnd = parseInt(sliderPosition + $("#played-songs-container").width());
		if (sliderEnd < 900) {
			$("button.right").addClass("disabled");
			$("button.right").prop("disabled", true);
		} else {
			$("button.right").removeClass("disabled");
			$("button.right").prop("disabled", false);
		}

		if (sliderPosition < 45) {
			$("button.left").removeClass("disabled");
			$("button.left").prop("disabled", false);
		}
	});

});