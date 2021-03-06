$(document).ready(function() {
    // *************************************
    // Global variables for game start state
    // *************************************
    var clickCount = 0;
    var spinResult = null;
    var i = 0;
    var j = 0;
    var bonus = 0;
    var penalty = 0;
    // ***********
    // Audio files
    // ***********
    var move = new Audio("audio/success.wav");
    var bonusSound = new Audio("audio/bonus.wav");
    var penaltySound = new Audio("audio/penalty.wav");
    var gameover = new Audio("audio/gameover.wav");
    // *********************************
    // Creating logic for board sequence
    // *********************************
    var squareList = $(".square");
    var board = squareList.map(function(obj) {
        return $(squareList[obj]);
    });
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
    // ******************
    // General game logic
    // moves for player 1
    // ******************
    var playerOneTurn = function() {
        playerName = "You";
        if (board[i] !== board[j]) {
            board[i].css({
                backgroundColor: "black"
            });
        } else {
            board[i].css({
                backgroundColor: "blue"
            });
        };
        var playerOneMove = board[i + spinResult];
        // if win
        if (i + spinResult >= 31) {
            oneWins = "you"
            winFunction(oneWins);
        } else {
            // else keep playing
            if (board[i + spinResult] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                // move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                // move.play();
            };
            i = i + spinResult;
            setTimeout(checkBonusPenaltyOne, 700);
            i = i;
            $("#playerturn").html("");
            setTimeout(autoClick, 1400);
        };
        $("#playerturn").html("It's the Computer's turn!");
    };
    // ******************
    // moves for player 2
    // ******************
    var playerTwoTurn = function() {
        playerName = "Computer";
        if (board[j] !== board[i]) {
            board[j].css({
                backgroundColor: "black"
            });
        } else {
            board[j].css({
                backgroundColor: "green"
            });
        };
        var playerTwoMove = board[j + spinResult];
        // if win
        if (j + spinResult >= 31) {
            twoWins = "Computer"
            winFunction(twoWins);
        } else {
            // else keep playing
            if (board[j + spinResult] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                // move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                // move.play();
            };
            j = j + spinResult;
            setTimeout(checkBonusPenaltyTwo, 800);
            j = j;
        };
        $("#playerturn").html("It's your turn! Click the Space Needle to play.");
    };
    // *****************************************
    // chain of events when "spinner" is clicked
    // *****************************************
    $("#spindiv").on("click", function() {
        clickCount++;
        spinResult = Math.round((Math.random() * 5) + 1);
        playerName = null;

        function spinAlert() {
            alert(playerName + " rolled a " + spinResult + "!");
        };
        // player turn
        if (clickCount % 2 === 0) {
            $("#spinner").effect("shake");
            playerName = "Computer";
            spinAlert();
            $("#spacestext").html(playerName + " moved " + spinResult + " spaces!");
            playerTwoTurn();
        } else {
            $("#spinner").effect("shake");
            playerName = "You";
            spinAlert();
            $("#spacestext").html(playerName + " moved " + spinResult + " spaces!");
            playerOneTurn();
        };
    });
    // ********************************
    // auto-click function for computer
    // ********************************
    function autoClick() {
        $("#spindiv").trigger("click", function() {
            clickCount++;
            spinResult = Math.round((Math.random() * 5) + 1);
        });
    };
    // ************
    // win function
    // ************
    function winFunction(playerName) {
        gameover.play();
        alert("Game Over!");
        $("#game").fadeOut(1000);
        $("#wininfo").delay(1000).fadeIn(500);
        if (playerName === "you") {
            $("#wintext").html("Congrats, " + playerName + " win!");
        } else {
            $("#wintext").html("Bummer, the " + playerName + " wins!");
        }
    };
    // ***********************************************************************
    // Bonus and penalty logic - would like to refactor if I can determine how
    // Logic for player one
    // ***********************************************************************
    function checkBonusPenaltyOne() {
        // bonuses
        if (i === 3) {
            bonusSound.play();
            alert("The mountain is out! Move forward 4 spaces.");
            bonus = 4;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a bonus!");
            playerOneMove = board[i + bonus];
            if (board[i + bonus] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i + bonus;
        } else if (i === 8) {
            bonusSound.play();
            alert("You actually make friends with a native Seattleite. Move forward 6 spaces.");
            bonus = 6;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a bonus!");
            playerOneMove = board[i + bonus];
            if (board[i + bonus] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i + bonus;
        } else if (i === 11) {
            bonusSound.play();
            alert("You arrive at a four-way stop and everyone actually proceeds according to the rules of the road. Move forward 3 spaces.");
            bonus = 3;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a bonus!");
            playerOneMove = board[i + bonus];
            if (board[i + bonus] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i + bonus;
        } else if (i === 16) {
            bonusSound.play();
            alert("You buy a flannel. Probably from Goodwill. Move forward 1 space.");
            bonus = 1;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a bonus!");
            playerOneMove = board[i + bonus];
            if (board[i + bonus] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i + bonus;
        } else if (i === 21) {
            bonusSound.play();
            alert("You find yourself defending Seattle weather to out-of-towners. Move forward 4 spaces.");
            bonus = 4;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a bonus!");
            playerOneMove = board[i + bonus];
            if (board[i + bonus] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i + bonus;
        } else if (i === 24) {
            bonusSound.play();
            alert("You know how to correctly pronounce Puyallup. Move forward 4 spaces.");
            bonus = 4;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a bonus!");
            playerOneMove = board[i + bonus];
            if (board[i + bonus] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i + bonus;
            // penalties
        } else if (i === 6) {
            penaltySound.play();
            alert("You buy a NorthFace raincoat but it's not black. Move back 2 spaces.");
            penalty = 2;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a penalty.");
            playerOneMove = board[i - penalty];
            if (board[i - penalty] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i - penalty;
        } else if (i === 10) {
            penaltySound.play();
            alert("Your 4th of July party gets rained out. Move back 3 spaces.");
            penalty = 3;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a penalty.");
            playerOneMove = board[i - penalty];
            if (board[i - penalty] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i - penalty;
        } else if (i === 13) {
            penaltySound.play();
            alert("Your commute takes you down Mercer. Both ways. Move back 6 spaces.");
            penalty = 6;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a penalty.");
            playerOneMove = board[i - penalty];
            if (board[i - penalty] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i - penalty;
        } else if (i === 18) {
            penaltySound.play();
            alert("You use an umbrella. Move back 3 spaces.");
            penalty = 3;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a penalty.");
            playerOneMove = board[i - penalty];
            if (board[i - penalty] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i - penalty;
        } else if (i === 22) {
            penaltySound.play();
            alert("You live on the Eastside but tell people you live in Seattle. Move back 5 spaces.");
            penalty = 5;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a penalty.");
            playerOneMove = board[i - penalty];
            if (board[i - penalty] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i - penalty;
        } else if (i === 29) {
            penaltySound.play();
            alert("You've lived here for 20 years but still aren't considered a 'real' Seattleite. Move back 9 spaces.");
            penalty = 9;
            if (board[i] !== board[j]) {
                board[i].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("You got a penalty.");
            playerOneMove = board[i - penalty];
            if (board[i - penalty] === board[j]) {
                playerOneMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerOneMove.css({
                    backgroundColor: "green"
                });
                move.play();
            };
            i = i - penalty;
        } else {
            bonus = 0;
            penalty = 0;
            move.play();
        };
    };
    // ****************************************
    // Check bonuses and penalties for computer
    // ****************************************
    function checkBonusPenaltyTwo() {
        // bonuses
        if (j === 3) {
            bonusSound.play();
            alert("The computer gets a bonus!");
            bonus = 4;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a bonus!");
            playerTwoMove = board[j + bonus];
            if (board[j + bonus] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j + bonus;
        } else if (j === 8) {
            bonusSound.play();
            alert("The computer gets a bonus!");
            bonus = 6;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a bonus!");
            playerTwoMove = board[j + bonus];
            if (board[j + bonus] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j + bonus;
        } else if (j === 11) {
            bonusSound.play();
            alert("The computer gets a bonus!");
            bonus = 3;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a bonus!");
            playerTwoMove = board[j + bonus];
            if (board[j + bonus] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j + bonus;
        } else if (j === 16) {
            bonusSound.play();
            alert("The computer gets a bonus!");
            bonus = 1;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a bonus!");
            playerTwoMove = board[j + bonus];
            if (board[j + bonus] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j + bonus;
        } else if (j === 21) {
            bonusSound.play();
            alert("The computer gets a bonus!");
            bonus = 4;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a bonus!");
            playerTwoMove = board[j + bonus];
            if (board[j + bonus] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j + bonus;
        } else if (j === 24) {
            bonusSound.play();
            alert("The computer gets a bonus!");
            bonus = 4;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a bonus!");
            playerTwoMove = board[j + bonus];
            if (board[j + bonus] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j + bonus;
            // penalties
        } else if (j === 6) {
            penaltySound.play();
            alert("The computer gets a penalty!");
            penalty = 2;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a penalty.");
            playerTwoMove = board[j - penalty];
            if (board[j - penalty] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j - penalty;
        } else if (j === 10) {
            penaltySound.play();
            alert("The computer gets a penalty!");
            penalty = 3;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a penalty.");
            playerTwoMove = board[j - penalty];
            if (board[j - penalty] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j - penalty;
        } else if (j === 13) {
            penaltySound.play();
            alert("The computer gets a penalty!");
            penalty = 6;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a penalty.");
            playerTwoMove = board[j - penalty];
            if (board[j - penalty] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j - penalty;
        } else if (j === 18) {
            penaltySound.play();
            alert("The computer gets a penalty!");
            penalty = 3;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a penalty.");
            playerTwoMove = board[j - penalty];
            if (board[j - penalty] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j - penalty;
        } else if (j === 22) {
            penaltySound.play();
            alert("The computer gets a penalty!");
            penalty = 5;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a penalty.");
            playerTwoMove = board[j - penalty];
            if (board[j - penalty] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j - penalty;
        } else if (j === 29) {
            penaltySound.play();
            alert("The computer gets a penalty!");
            penalty = 9;
            if (board[i] !== board[j]) {
                board[j].css({
                    backgroundColor: "black"
                });
            };
            $("#spacestext").html("The Computer got a penalty.");
            playerTwoMove = board[j - penalty];
            if (board[j - penalty] === board[i]) {
                playerTwoMove.css({
                    backgroundColor: "purple"
                });
                move.play();
            } else {
                playerTwoMove.css({
                    backgroundColor: "blue"
                });
                move.play();
            };
            j = j - penalty;
        } else {
            bonus = 0;
            penalty = 0;
            move.play();
        };
    };
    // *********************************
    // Buttons switching between screens
    // *********************************
    // Homescreen to How-to
    $("#howtobutton").on("click", function() {
        $("#homescreen").fadeOut(500);
        $("#howto").delay(550).fadeIn(500);
    });
    // Homescreen to game
    $("#startgame").on("click", function() {
        $("#homescreen").fadeOut(500);
        $("#game").delay(550).fadeIn(500);
        $("#playerturn").html("It's your turn! Click the Space Needle to start playing.");
        $("#spacestext").html("");
        clickCount = 0;
        i = 0;
        j = 0;
        $(".square").css({
            backgroundColor: "black"
        });
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
    $("#howtostart").on("click", function() {
        $("#howto").fadeOut(500);
        $("#game").delay(550).fadeIn(500);
        $("#playerturn").html("It's your turn! Click the Space Needle to start playing.");
        $("#spacestext").html("");
        clickCount = 0;
        i = 0;
        j = 0;
        $(".square").css({
            backgroundColor: "black"
        });
    });
    // Win screen to game
    $("#winstart").on("click", function() {
        $("#wininfo").fadeOut(500);
        $("#game").delay(550).fadeIn(500);
        $("#playerturn").html("It's your turn! Click the Space Needle to start playing.");
        $("#spacestext").html("");
        clickCount = 0;
        i = 0;
        j = 0;
        $(".square").css({
            backgroundColor: "black"
        });
    });
    // Win screen to home
    $("#winhome").on("click", function() {
        $("#wininfo").fadeOut(500);
        $("#homescreen").delay(550).fadeIn(500);
    });
    // Info to home
    $("#infohome").on("click", function() {
        $("#gameinfo").fadeOut(500);
        $("#homescreen").delay(550).fadeIn(500);
    });
    // Game to home
    $("#gamehome").on("click", function() {
        $("#game").fadeOut(500);
        $("#homescreen").delay(550).fadeIn(500);
    });
    // mini animation
    $("#shake").on("click", function() {
        $("#shake").effect("pulsate");
    });
});