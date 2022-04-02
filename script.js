let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let startStop = document.getElementById("start-stop");
let lapReset = document.getElementById("lap-reset");
let lapList = document.querySelector(".lap-container");
let lapCounter = 1;
let time = 0;
let isRunning = false;
let timerId = false;

function init() {
    startStop.style.backgroundColor = "#b6d7a8";
	startStop.style.color = "green";
    
    lapReset.style.backgroundColor = "#b3d6ce";
    lapReset.style.color = "#2e3436";
    hrs.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    lapReset.innerHTML = "Reset";
    startStop.innerHTML = "Start";
    time = 0;
    isRunning = false;
    lapCounter = 1;
}

init();

startStop.addEventListener("click", function () {
    if(isRunning == false){
        isRunning = true;
        startStop.innerHTML = "Stop";
        startStop.style.backgroundColor = "#f4cccc";
        startStop.style.color = "red";
        lapReset.innerHTML = "Lap";
        timerId = setInterval(function () {
            time++;
            let secs = time % 60;
            let mins = parseInt(time / 60);
            let hrs = parseInt(mins / 60);
            if(secs < 10){
                sec.innerHTML = "0" + secs;
            } else {
                sec.innerHTML = secs;
            }
            if(mins < 10){
                min.innerHTML = "0" + mins;
            } else {
                min.innerHTML = mins;
            }
            if (hrs < 10) {
                hrs.innerHTML = "0" + hrs;
            } else {
                hrs.innerHTML = hrs;
            }
        }, 1000);
    }

    else {
        isRunning = false;
        startStop.innerHTML = "Start";
        clearInterval(timerId);
        startStop.style.backgroundColor = "#b6d7a8";
        startStop.style.color = "green";
        lapReset.innerHTML = "Reset";
    }
});

function createLap() { 
    let div = document.createElement("div");
    div.setAttribute("class", "timeDiv");
    let divider = document.createElement("hr");
    let lapNum = document.createElement("span");
    lapNum.innerHTML = "Lap " + lapCounter;
    lapCounter++;
    lapList.scrollTop = lapList.scrollHeight;

    let timeStamp = document.createElement("span");
    timeStamp.innerHTML = `${hrs.innerHTML} : ${min.innerHTML} : ${sec.innerHTML}`;
    div.appendChild(lapNum);
    div.appendChild(timeStamp);
    lapList.appendChild(div);
    lapList.appendChild(divider);
}
 
lapReset.addEventListener("click", function () { 
    if (isRunning == true) { 
        createLap();
    }

    else {
        lapList.innerHTML = "";
        lapReset.innerHTML = "Reset";
        init();
    }
});