var bulb = document.getElementById("bulb")
var on_btn = document.getElementById("on_btn")
var off_btn = document.getElementById("off_btn")

bulb.addEventListener("mouseover", function(){
    bulb.src = "Bulb On.jpg"
})

bulb.addEventListener("mouseout", function(){
    bulb.src = "Bulb Off.jpg"
})

on_btn.addEventListener("click", function(){
    bulb.src = "Bulb On.jpg"
})

off_btn.addEventListener("click", function(){
    bulb.src = "Bulb Off.jpg"
})