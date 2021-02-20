var buttons = document.querySelectorAll(".drum")

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        btnAnimation(this.innerHTML)
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    btnAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;

        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;

        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        case "j":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        case "k":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        case "l":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;

        default:
            console.log(key);
    }
}

function btnAnimation(key) {
    var activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100)
}