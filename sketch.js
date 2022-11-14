let vid;
let isPlaying = true;

function setup() {
  // noCanvas();
  createCanvas(400, 400);

  vid = createVideo(
    ['assets/bunny.webm'],
    vidLoad
  );
  vid.onended(vidDone);
  vid.size(900, AUTO);
  vid.position(100,0);

}

function draw() {
  // vid.position(mouseX,mouseY);
  background(120);

  text(isPlaying,0,20);
}

function vidDone() {
  isPlaying = false;
}

function mouseClicked() {
  //vid.pause();
  if (isPlaying) {
    vid.stop();
    isPlaying = false;
  } else {
    vid.play();
    isPlaying = true;
  }
}

// This function is called when the video loads
function vidLoad() {
  // vid.loop();
  vid.volume(0);
  vid.play();
}