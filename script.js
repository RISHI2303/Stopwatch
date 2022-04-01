let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let startStop = document.getElementById("start/stop");
let lapReset = document.getElementById("lap/reset");
let lapCounter = 0;
let time = 0;
let isRunning = false;
let timerId = false;

function init() {
    startStop.style.backgroundColor = "#b6d7a8";
	startStop.style.color = "green";
    
    lapReset.style.backgroundColor = "#b3d6ce";
}

init();

startStop.addEventListener("click", function () {
    if(isRunning == false){
        isRunning = true;
        startStop.innerHTML = "Stop";
        startStop.style.backgroundColor = "#f4cccc";
        startStop.style.color = "red";
        timerId = setInterval(function () {
            time++;
            let secs = time % 60;
            let mins = parseInt(time / 60);
            let hrs = parseInt(mins / 60);
            sec.innerHTML = secs;
            min.innerHTML = mins;
            hrs.innerHTML = hrs;
        }, 1000);
    }

    else {
        isRunning = false;
        startStop.innerHTML = "Start";
        clearInterval(timerId);
        startStop.style.backgroundColor = "#b6d7a8";
        startStop.style.color = "green";
    }
 });