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
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    
    if(h > 12){
        h = h - 12;
    }
    if ( h >= 12){
        am_pm.innerText = "PM"
    }
    h = h < 10 ? "0"+h : h ;
    hours.innerText = h;

    m = m < 10 ? "0"+m : m ;
    minutes.innerText = m;

    s = s < 10 ? "0"+s : s ;
    seconds.innerText = s;
    

    day.innerText = days[date.getDay()];

    dat.innerText = date.getDate();
    if (dat.innerText < 10) dat.innerText = "0"+date.getDate();

    month.innerText = months[date.getMonth()];
    
    year.innerText = date.getFullYear();

},1000);
