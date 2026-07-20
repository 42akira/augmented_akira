



const image = document.getElementById("shrek");
const sound = new Audio("audio/sound.mp3");

const image1 = document.getElementById("batman");
const sound1 = new Audio("audio/btaman_transition.wav");

image.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play().catch(error => {
        console.error("The sound could not be played:", error);
    });
});

image1.addEventListener("click", () => {
    sound1.currentTime = 0;
    sound1.play().catch(error => {
        console.error("The sound could not be played:", error);
    });
});


