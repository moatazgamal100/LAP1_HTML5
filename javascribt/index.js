let play = document.querySelector("#play");
let stop = document.querySelector("#stop");
let incre = document.querySelector("#incre");
let decre = document.querySelector("#decre");
let next = document.querySelector("#next");
let pre = document.querySelector("#pre");
let end = document.querySelector("#end");
let begin = document.querySelector("#begin");
let mute = document.querySelector("#mute");
let fullscreen = document.querySelector("#fullscreen");
let volume = document.querySelector("#volume");
let speed = document.querySelector("#speed");
let ved = document.querySelector("video");
volume
let x = 1;
play.addEventListener("click", function (e) {
    ved.play();
});
stop.addEventListener("click", function (e) {
    ved.pause();
});
incre.addEventListener("click", function (e) {
    ved.currentTime += 5;
});
decre.addEventListener("click", function (e) {
    ved.currentTime -= 5;
});
next.addEventListener("click", function (e) {
    x++;
    if (x > 3) {
        x = 1;
    }
    ved.setAttribute("src",`video/${x}.mp4`);
});
pre.addEventListener("click", function (e) {
    x--;
    if (x < 1) {
        x = 3;
    }
    ved.setAttribute("src",`video/${x}.mp4`);
});

begin.addEventListener("click", function (e) {
    ved.currentTime = 0;
});
end.addEventListener("click", function (e) {
    ved.currentTime = ved.duration;
    console.log(ved.duration);
    
});
mute.addEventListener("click", function (e) {
    if (ved.muted == false) {
        ved.muted = true;
        mute.innerHTML="unmute"
    }
    else if (ved.muted == true) {
        ved.muted = false;
        mute.innerHTML="muted"
    }
});
fullscreen.addEventListener("click", function (e) {
    ved.requestFullscreen();
    ved.controls = false;
    
});
function volchange() {

    ved.volume = volume.value;
}
function spechange() {

    ved.playbackRate = speed.value;
}


let par = document.querySelector(".text p");
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
console.log(red.value);
function colorchange() {
    par.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}


var line = document.getElementById("myLine");
var z = 0 ;
var y = 0;

function animateLine() {
  z += 5; 
  y += 5; 
  line.setAttribute("z2", z); 
  line.setAttribute("y2", y); 
  if (z == 305 && y == 305) { 
    clearInterval(interval);
    alert("animation end!");
  
}
}
var interval = setInterval(animateLine, 100);
