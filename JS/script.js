$(document).ready(function() {

// Buttons switching between screens
// Homescreen to How-to
$("#howtobutton").on("click", function(){
	$("#homescreen").hide();
	$("#howto").show();
});

// Homescreen to game
$("#startgame").on("click", function(){
	$("#homescreen").hide();
	$("#game").show();
});

// Homescreen to info
$("#about").on("click", function() {
	$("#homescreen").hide();
	$("#gameinfo").show();
});

// How-to to Home
$("#howtohome").on("click", function() {
	$("#howto").hide();
	$("#homescreen").show();
});

// How-to to game
$("#howtostart").on("click", function(){
	$("#howto").hide();
	$("#game").show();
});

// Win screen to game
$("#winstart").on("click", function(){
	$("#wininfo").hide();
	$("#game").show();
});

// Win screen to home
$("#winhome").on("click", function(){
	$("#wininfo").hide();
	$("#homescreen").show();
});

// Info to home
$("#infohome").on("click", function(){
	$("#gameinfo").hide();
	$("#homescreen").show();
});


});