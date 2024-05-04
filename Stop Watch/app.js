var ms = 0;
var s = 0;
var m = 0;
var milliSecond = document.getElementById("milliSecond");
var second = document.getElementById("second");
var minutes = document.getElementById("minutes");
var start_btn = document.getElementById("start_btn");

var watchInterval

function start(){
    watchInterval = setInterval(function () {
    ms++;
    if (ms >= 99){
       s++ 
       ms = 0;
    }
    if (s >= 59) {
       m++ 
       s = 0;
    }

    milliSecond.innerText = ms < 10 ? "0"+ms : ms;
    milliSecond.style.color = "lime"
    second.innerText = s < 10 ? "0" + s : s;
    second.style.color = "lime"
    minutes.innerText = m < 10 ? "0" + m : m;
    minutes.style.color = "lime";

    start_btn.disabled = true
    },10)
}

function stop(){
    clearInterval(watchInterval)
    milliSecond.style.color = "red"
    second.style.color = "red"
    minutes.style.color = "red";
    start_btn.disabled = false
}
function reset(){
    clearInterval(watchInterval)
    ms = 0;
     s = 0;
     m = 0;
    milliSecond.innerText = "00";
    second.innerText = "00";
    minutes.innerText = "00"
    milliSecond.style.color = "aqua"
    second.style.color = "aqua"
    minutes.style.color = "aqua";
    start_btn.disabled = false
}