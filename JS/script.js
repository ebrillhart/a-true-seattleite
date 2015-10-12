$(document).ready(function() {

// Global variables for game start state
var clickCount = 0;
var spinResult = null; 
var i = 0;
var j = 0;
var bonus = 0;
var penalty = 0;

// creating the board logic
var squareList = $(".square");
var board = squareList.map(function(obj){
	return $(squareList[obj]);
});

console.log(board);

board = board.sort(function(a, b) {
	var value1 = parseInt(a.attr("value"));
	var value2 = parseInt(b.attr("value"));
	if (value2 > value1) {
		return -1;
	} else if (value2 < value1) {
		return 1;
	} else {
		return 0;
	};

});

// General game logic
// moves for player 1
var playerOneTurn = function() {
	if (board[i] !== board[j]){
	board[i].css({backgroundColor:"black"});
	};

	var playerOneMove = board[i + spinResult];
	playerOneMove.css({backgroundColor: "green"}).fadeIn(500);
	i = i + spinResult
	checkBonusPenaltyOne();
	checkWinOne();

	$("#playerturn").html("It's Player 2's turn! Click the Space Needle to play.")	
};

// moves for player 2
var playerTwoTurn = function() {
	if (board[j] !== board[i]){
	board[j].css({backgroundColor:"black"});
	};

	var playerTwoMove = board[j + spinResult];
	playerTwoMove.css({backgroundColor: "blue"}).fadeIn(500);
	j = j + spinResult
	checkBonusPenaltyTwo();
	checkWinTwo();

	$("#playerturn").html("It's Player 1's turn! Click the Space Needle to play.")
};

// chain of events when "spinner" is clicked
$("#spindiv").on("click", function() {
	clickCount ++;
	spinResult = Math.round((Math.random() * 5)+1);
	playerName = null;

	function spinAlert() {
		alert(playerName + " rolled a " + spinResult + "!");
	};

	// player location logic
	if (clickCount % 2 === 0) {
		playerName = "Player Two";
		spinAlert();
		$("#spacestext").html(playerName + " moved " + spinResult + " spaces!");
		playerTwoTurn()
	} else {
		playerName = "Player One";
		spinAlert();
		$("#spacestext").html(playerName + " moved " + spinResult + " spaces!");
		playerOneTurn()	
	};
	
});

// functions that declare a winner
function checkWinOne () {
	if (i + spinResult >= 31) {
		oneWins = "Player One"
		winFunction(oneWins).delay(1000);
	};
};

function checkWinTwo () {
	if (j + spinResult >= 31) {
		twoWins = "Player Two";
		winFunction(twoWins).delay(1000);
	};
};


function winFunction(playerName) {
	$("#game").fadeOut(500);
	$("#wininfo").delay(500).fadeIn(500);
	$("#wintext").html("Congrats, " + playerName + " wins!");
};


// Bonus and Pentalty Logic
// Check Bonuses and Penalties - would like to refactor this if I can figure out how
	//Bonuses and penalties for player 1
function checkBonusPenaltyOne() {
	if (i === 3) {
		alert("The mountain is out! Move forward 4 spaces.");
		bonus = 4;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a bonus!");
		playerOneMove = board[i + bonus];
		playerOneMove.css({backgroundColor: "green"});
		i = i + bonus;
	} else if (i === 8) {
		alert("You actually make friends with a native Seattleite. Move forward 6 spaces.");
		bonus = 6;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a bonus!");
		playerOneMove = board[i + bonus];
		playerOneMove.css({backgroundColor: "green"});
		i = i + bonus;
	} else if (i === 11) {
		alert("You arrive at a four-way stop and everyone actually proceeds according to the rules of the road. Move forward 3 spaces.");
		bonus = 3;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a bonus!");
		playerOneMove = board[i + bonus];
		playerOneMove.css({backgroundColor: "green"});
		i = i + bonus;
	} else if (i === 16) {
		alert("You buy a flannel. Probably from Goodwill. Move forward 1 space.");
		bonus = 1;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a bonus!");
		playerOneMove = board[i + bonus];
		playerOneMove.css({backgroundColor: "green"});
		i = i + bonus;
	} else if (i === 21) {
		alert("You find yourself defending Seattle weather to out-of-towners. Move forward 4 spaces.");
		bonus = 4;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a bonus!");
		playerOneMove = board[i + bonus];
		playerOneMove.css({backgroundColor: "green"});
		i = i + bonus;
	} else if (i === 24) {
		alert("You know how to correctly pronounce Puyallup. Move forward 4 spaces.");
		bonus = 4;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a bonus!");
		playerOneMove = board[i + bonus];
		playerOneMove.css({backgroundColor: "green"});
		i = i + bonus;
	} else if (i === 6) {
		alert("You buy a NorthFace raincoat but it's not black. Move back 2 spaces.");
		penalty = 2;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a penalty.");
		playerOneMove = board[i - penalty];
		playerOneMove.css({backgroundColor: "green"});
		i = i - penalty;
	} else if (i === 10) {
		alert("Your 4th of July party gets rained out. Move back 3 spaces.");
		penalty = 3;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a penalty.");
		playerOneMove = board[i - penalty];
		playerOneMove.css({backgroundColor: "green"});
		i = i - penalty; 
	} else if (i === 13) {
		alert("Your commute takes you down Mercer. Both ways. Move back 6 spaces.");
		penalty = 6;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a penalty.");
		playerOneMove = board[i - penalty];
		playerOneMove.css({backgroundColor: "green"});
		i = i - penalty; 
	} else if (i === 18) {
		alert("You use an umbrella. Move back 3 spaces.");
		penalty = 3;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a penalty.");
		playerOneMove = board[i - penalty];
		playerOneMove.css({backgroundColor: "green"});
		i = i - penalty; 
	} else if (i === 22) {
		alert("You live on the Eastside but tell people you live in Seattle. Move back 5 spaces.");
		penalty = 5;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a penalty.");
		playerOneMove = board[i - penalty];
		playerOneMove.css({backgroundColor: "green"});
		i = i - penalty;
	} else if (i === 29) {
		alert("You've lived here for 20 years but still aren't considered a 'real' Seattleite. Move back 9 spaces.");
		penalty = 9;
		if (board[i] !== board[j]){
			board[i].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player One got a penalty.");
		playerOneMove = board[i - penalty];
		playerOneMove.css({backgroundColor: "green"});
		i = i - penalty;
	} else {
		bonus = 0;
		penalty = 0;
		i = i + bonus - penalty;
	};
};

// Check bonuses and penalties for player 2
function checkBonusPenaltyTwo() {
	if (j === 3) {
		alert("The mountain is out! Move forward 4 spaces.");
		bonus = 4;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a bonus!");
		playerTwoMove = board[j + bonus];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j + bonus;
	} else if (j === 8) {
		alert("You actually make friends with a native Seattleite. Move forward 6 spaces.");
		bonus = 6;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a bonus!");
		playerTwoMove = board[j + bonus];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j + bonus;
	} else if (j === 11) {
		alert("You arrive at a four-way stop and everyone actually proceeds according to the rules of the road. Move forward 3 spaces.");
		bonus = 3;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a bonus!");
		playerTwoMove = board[j + bonus];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j + bonus;
	} else if (j === 16) {
		alert("You buy a flannel. Probably from Goodwill. Move forward 1 space.");
		bonus = 1;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a bonus!");
		playerTwoMove = board[j + bonus];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j + bonus;
	} else if (j === 21) {
		alert("You find yourself defending Seattle weather to out-of-towners. Move forward 4 spaces.");
		bonus = 4;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a bonus!");
		playerTwoMove = board[j + bonus];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j + bonus;
	} else if (j === 24) {
		alert("You know how to correctly pronounce Puyallup. Move forward 4 spaces.");
		bonus = 4;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a bonus!");
		playerTwoMove = board[j + bonus];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j + bonus;
	} else if (j === 6) {
		alert("You buy a NorthFace raincoat but it's not black. Move back 2 spaces.");
		penalty = 2;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a penalty.");
		playerTwoMove = board[j - penalty];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j - penalty;
	} else if (j === 10) {
		alert("Your 4th of July party gets rained out. Move back 3 spaces.");
		penalty = 3;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a penalty.");
		playerTwoMove = board[j - penalty];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j - penalty;
	} else if (j === 13) {
		alert("Your commute takes you down Mercer. Both ways. Move back 6 spaces.");
		penalty = 6;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a penalty.");
		playerTwoMove = board[j - penalty];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j - penalty;
	} else if (j === 18) {
		alert("You use an umbrella. Move back 3 spaces.");
		penalty = 3;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a penalty.");
		playerTwoMove = board[j - penalty];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j - penalty;
	} else if (j === 22) {
		alert("You live on the Eastside but tell people you live in Seattle. Move back 5 spaces.");
		penalty = 5;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a penalty.");
		playerTwoMove = board[j - penalty];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j - penalty;
	} else if (j === 29) {
		alert("You've lived here for 20 years but still aren't considered a 'real' Seattleite. Move back 9 spaces.");
		penalty = 9;
		if (board[i] !== board[j]){
			board[j].css({backgroundColor:"black"});
		};
		$("#spacestext").html("Player Two got a penalty.");
		playerTwoMove = board[j - penalty];
		playerTwoMove.css({backgroundColor: "blue"});
		j = j - penalty;
	} else {
		bonus = 0;
		penalty = 0;
		j = j + bonus - penalty;
	};
};

// Buttons switching between screens
// Homescreen to How-to
$("#howtobutton").on("click", function(){
	$("#homescreen").fadeOut(500);
	$("#howto").delay(550).fadeIn(500);
});

// Homescreen to game
$("#startgame").on("click", function(){
	$("#homescreen").fadeOut(500);
	$("#game").delay(550).fadeIn(500);
	$("#playerturn").html("It's Player 1's turn! Click the Space Needle to start playing.");
	$("#spacestext").html("");
	clickCount = 0;
	i = 0;
	j = 0;
	$(".square").css({backgroundColor: "black"});
});

// Homescreen to info
$("#about").on("click", function() {
	$("#homescreen").fadeOut(500);
	$("#gameinfo").delay(550).fadeIn(500);
});

// How-to to Home
$("#howtohome").on("click", function() {
	$("#howto").fadeOut(500);
	$("#homescreen").delay(550).fadeIn(500);
});

// How-to to game
$("#howtostart").on("click", function(){
	$("#howto").fadeOut(500);
	$("#game").delay(550).fadeIn(500);
	$("#playerturn").html("It's Player 1's turn! Click the Space Needle to start playing.");
	$("#spacestext").html("");
	clickCount = 0;
	i = 0;
	j = 0;
	$(".square").css({backgroundColor: "black"});
});

// Win screen to game
$("#winstart").on("click", function(){
	$("#wininfo").fadeOut(500);
	$("#game").delay(550).fadeIn(500);
	$("#playerturn").html("It's Player 1's turn! Click the Space Needle to start playing.");
	$("#spacestext").html("");
	clickCount = 0;
	i = 0;
	j = 0;
	$(".square").css({backgroundColor: "black"});
});

// Win screen to home
$("#winhome").on("click", function(){
	$("#wininfo").fadeOut(500);
	$("#homescreen").delay(550).fadeIn(500);
});

// Info to home
$("#infohome").on("click", function(){
	$("#gameinfo").fadeOut(500);
	$("#homescreen").delay(550).fadeIn(500);
});

// Game to home
$("#gamehome").on("click", function(){
	$("#game").fadeOut(500);
	$("#homescreen").delay(550).fadeIn(500);
});	

});