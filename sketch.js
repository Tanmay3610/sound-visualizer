let song;
let volHistory = [];
let amp;
let count = 0;
let r = 255, g = 255, b = 255;

function touchStarted() {
    getAudioContext().resume();
}

function setup() {
   createCanvas(500, 500);
    angleMode(DEGREES);
   song = loadSound("magenta.mp3", loaded);
   amp = new p5.Amplitude();
}

function loaded(){
    song.play();
}

function draw() {
    background(51);
    let vol = amp.getLevel();
    volHistory.push(vol);
    stroke(r, g, b);
    translate(width/2, height/2);
    noFill();
    beginShape();
    for(let i = 0; i < 360; i++){
        let r = map(volHistory[i], 0, 1, 10, 500);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
        point(x, y - 10);
    }
    count++;
    if(count == 360){
        count = 0;
        r = Math.random() * 256;
        g = Math.random() * 256;
        b = Math.random() * 256;
    }
    endShape();
    if(volHistory.length > 360){
        volHistory.splice(0, 1);
    }
}