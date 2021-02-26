var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = []
var level = 0

// This is used to control whether restart the game
var started = false;

$(document).keydown(function (e) {
    if (!started) {
        nextSequence();
        started = true;
    }
})

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    // check answer
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    userClickedPattern = []

    // Retitle
    level++;
    $("h1").text("Level " + level);

    // Update game pattern
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "sounds/" + name + ".mp3");
    audioElement.play();

    // Below is the provided answer
    // var audio = new Audio("sounds/" + name + ".mp3");
    // audio.play();
}

function animatePress(currentColour) {
    $(".btn." + currentColour).addClass("pressed");
    setTimeout(function () {
        $(".btn." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern.length > userClickedPattern.length) {
        for (i = 0; i < userClickedPattern.length; i++) {
            if (gamePattern[i] !== userClickedPattern[i]) {
                playSound("wrong");
                $("body").addClass("game-over");
                setTimeout(function () {
                    $("body").removeClass("game-over");
                }, 200);

                $("h1").text("Game Over, Press Any Key to Restart");
                startOver();
            }
        }
    }

    if (gamePattern.length === userClickedPattern.length) {
        for (i = 0; i < userClickedPattern.length; i++) {
            if (gamePattern[i] !== userClickedPattern[i]) {
                playSound("wrong");
                $("body").addClass("game-over");
                setTimeout(function () {
                    $("body").removeClass("game-over");
                }, 200);

                $("h1").text("Game Over, Press Any Key to Restart");
                startOver();
            }
        }
        console.log("success");
        setTimeout(function () {
            nextSequence();
        }, 1000);
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}