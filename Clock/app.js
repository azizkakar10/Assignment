var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var am_pm = document.getElementById("am_pm")
var days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thr" , "Fri" , "Sat"]
var day = document.getElementById("day")
var dat = document.getElementById("dat")
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
var month = document.getElementById("month")
var year = document.getElementById("year")

setInterval( function(){
    var date = new Date();
    
    hours.innerText = date.getHours();
    if (hours.innerText <= 12){
        am_pm.innerText = "AM";
    }else{
        hours.innerText = date.getHours() - 12;
        am_pm.innerText = "PM";
    }
    
    minutes.innerText = date.getMinutes();
if (minutes.innerText < 10) {
    minutes.innerText = "0"+date.getMinutes()
}
    seconds.innerText = date.getSeconds();
    if (seconds.innerText < 10) {
        seconds.innerText = "0"+date.getSeconds()
    }

    day.innerText = days[date.getDay()];

    dat.innerText = date.getDate();
    if (dat.innerText < 10) dat.innerText = "0"+date.getDate();

    month.innerText = months[date.getMonth()];
    
    year.innerText = date.getFullYear();

},1000);
