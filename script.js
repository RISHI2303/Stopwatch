let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let startStop = document.getElementById("start/stop");
let lapReset = document.getElementById("lap/reset");
let lapCounter = 0;
let time = 0;
let isRunning = false;
let timerId = false;

startStop.addEventListener("click", function () {
    if(isRunning == false){
        isRunning = true;
        startStop.innerHTML = "Stop";
        timerId = setInterval(function () {
            time++;
            let secs = parseInt(time % 60);
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
    }
 });