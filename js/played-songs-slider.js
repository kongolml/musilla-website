$(document).ready(function (){
	$("button.left").click(function(){
		var leftCoord = parseInt($("#played-songs-container").css("left"));
		leftCoord = leftCoord - 165;
		$("#played-songs-container").css("left", leftCoord+"px");
	});

	$("button.right").click(function(){
		var leftCoord = parseInt($("#played-songs-container").css("left"));
		leftCoord = leftCoord + 165;
		$("#played-songs-container").css("left", leftCoord+"px");
	});
});