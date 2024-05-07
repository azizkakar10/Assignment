var user_number = document.getElementById("user_number")
var user_text = document.getElementById("user_text")
var running_number = document.getElementById("running_number")
var result = document.getElementById("result")
var start_btn = document.getElementById("start_btn")




var userInterval;
var runningNumber = 0;


function start(){
    if(user_number.value){
        user_text.innerText = "User Number"
        user_text.style.color = "black"
        runningNumber = 0;
    running_number.innerText = runningNumber;
        userInterval = setInterval(function(){
            if(runningNumber >= 1000){
                clearInterval(userInterval);
                runningNumber = 0;
                running_number.innerText = runningNumber
                result.innerText = "You are Late"
                result.style.color = "red"
                start_btn.disabled = false;
            }else{
                runningNumber++;
                running_number.innerText = runningNumber  
            }
        },10);
           start_btn.disabled = true;
    }else{
       user_text.innerText = "Please Insert User Number" 
       user_text.style.color = "red" 
    }
}


function stop(){
    clearInterval(userInterval);
    if(user_number.value == runningNumber){
        result.innerText = user_number.value +"-->" +"You Win" 
        result.style.color = "lime" 
    }else{
        result.innerText = user_number.value +"-->" +"You Loss" 
        result.style.color = "red" 
    }
    start_btn.disabled = false;
    user_number.value = "";
}