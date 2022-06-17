koka = "";
wala = "";

function setup() {
    canvas = createCanvas(550, 350);
    canvas.center();
}

function preload() {
    koka = createVideo("video.mp4");
    koka.hide();
}

function draw() {
    image(koka, 0, 0, 545, 345);
}

function yasui() {
    objda = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("momo").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("fuhrsl5hiot");
    wala = true;
    koka.loop();
    koka.speed(1);
    koka.volume(0);
}