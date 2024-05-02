
setInterval(function(){
    d = new Date();
    var seconds = d.getSeconds() * 6;
    var minutes = d.getMinutes() * 6;
    var hours = d.getHours() * 30 + Math.round(minutes / 12);
    document.getElementById("seconds").style.transform = "rotate(" + seconds + "deg)";
    document.getElementById("minutes").style.transform = "rotate(" + minutes + "deg)";
    document.getElementById("hours").style.transform = "rotate(" + hours + "deg)";
    document.getElementById("date").innerText = d.getDate();
},1000);