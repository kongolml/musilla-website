$(document).ready(function() {

	//centering aler-box
	var a = $(".alert-box").width() + 40;
	$(".alert-box").css("margin-left", -a/2);


	//hover-focus changes on ".search-song"
	$(".search-song > input").hover(function(){
		$(".search-song button").css("color", "#53646d");
	});

	$(".search-song > input").mouseleave(function(){
		$(".search-song button").css("color", "#43545d");
	});

	$(".search-song > input").focus(function(){
		$(".search-song").css("background-color", "white");
		$(".search-song button").css("color", "#53646d");
	});

	$(".search-song > input").blur(function(){
		$(".search-song").css("background-color", "#111a21");
	});


	//hover-focus changes on "#chat-with"
	$("#chat-with > input").hover(function(){
		$("#chat-with button").css("color", "#53646d");
	});

	$("#chat-with > input").mouseleave(function(){
		$("#chat-with button").css("color", "#84939b");
	});

	$("#chat-with > input").focus(function(){
		$("#chat-with").css("background-color", "white");
	});

	$("#chat-with > input").blur(function(){
		$("#chat-with").css("background-color", "#dce1e4");
	});


	//hover changes for right-sidebar ".is-online"
	$("#right-sidebar .friend").hover(function(){
		$(this).find(".is-online").css("border", "2px solid white");
	});

	$("#right-sidebar .friend").mouseleave(function(){
		$("#right-sidebar .is-online").css("border", "2px solid #e9edee");
	});


	//hover-focus changes on ".search-filter"
	$(".search-filter > input").focus(function(){
		$(".search-filter button.search-left").css("background-color", "white");
	});

	$(".search-filter > input").blur(function(){
		$(".search-filter button.search-left").css("background-color", "rgba(213, 219, 223, .96)");
	});


	//hover changes on ".playlist-more"
	$(".playlist-name").hover(function(){
		$(this).find(".playlist-more").css("display", "block");
	});

	$(".playlist-name").mouseleave(function(){
		$(this).find(".playlist-more").css("display", "none");
	});


	//hover changes on ".friend-more"
	$(".friend").hover(function(){
		$(this).find(".friend-more").css("display", "block");
	});

	$(".friend").mouseleave(function(){
		$(this).find(".friend-more").css("display", "none");
	});






	//positioning ".current-user"
	var centralContentMargin = $(".container.wrapper").offset().left;
	var currentUserMargin = $("#left-bar").outerWidth() + $("#main-content").outerWidth() + $("#right-bar").outerWidth() + 20 + centralContentMargin - 30 - 21; //sum of the central content elements + margin - header padding - header padding
	$("#header-items .current-user").css("margin-left", currentUserMargin);

	//and change it, when viewport is changed
	$(window).resize(function(){
		var centralContentMargin = $(".container.wrapper").offset().left;
		var currentUserMargin = $("#left-bar").outerWidth() + $("#main-content").outerWidth() + $("#right-bar").outerWidth() + 20 + centralContentMargin - 30 - 21; //sum of the central content elements + margin - header padding - header padding
		$("#header-items .current-user").css("margin-left", currentUserMargin);


	})

})