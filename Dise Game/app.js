var userValue = document.getElementById("userValue")
var randomValue = document.getElementById("randomValue")
var count = 10;
var counter = document.getElementById("counter")
var win = 0;
var win_count = document.getElementById("win_count")
var loss = 0;
var loss_count = document.getElementById("loss_count")
var result = document.getElementById("result")

function userInput(userInput){
    userValue.innerText = userInput
    random = Math.ceil(Math.random() * 6)
    randomValue.innerText = random;
    --count;
    counter.innerText = count
    if (userInput == random){
        ++win;
        win_count.innerText = win
        win_count.style.backgroundColor = "green"
        win_count.style.color = "white"
    }else{
        ++loss;
        loss_count.innerText = loss;
        loss_count.style.backgroundColor = "red"
        loss_count.style.color = "white"
    }
    checkResult ();
}

function checkResult (){
    if (count == 0){
        if (win >= 3){
            result.innerText = "Congrats! You Win"
            result.style.backgroundColor = "green"
            result.style.color = "white"
        }else {
            result.innerText = "Sorry! You Loss"
            result.style.backgroundColor = "red"
            result.style.color = "white"
        }
        count = 10;
        win = 0;
        loss = 0;
        counter.innerText = count;
        win_count.innerText = win;
        loss_count.innerText = loss;
    }
}
