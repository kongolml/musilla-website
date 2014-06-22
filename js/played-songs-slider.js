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
		leftCoord = leftCoord - 170;
		$("#played-songs-container").css("left", leftCoord+"px");
	});


	//slide to the right
	$("button.right").click(function(){
		var leftCoord = parseInt($("#played-songs-container").css("left"));
		leftCoord = leftCoord + 170;
		$("#played-songs-container").css("left", leftCoord+"px");
	});
});