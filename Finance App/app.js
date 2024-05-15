var income_num = document.getElementById("income_num")
var income_hed = document.getElementById("income_hed")

var expance_num = document.getElementById("expance_num")
var expance_hed = document.getElementById("expance_hed")

var balance_num = document.getElementById("balance_num")
var balance_hed = document.getElementById("balance_hed")

var user_input = document.getElementById("user_input")

var trns_type = document.getElementById("trns_type")
var date = document.getElementById("date")
var time = document.getElementById("time")
var trans_blnce = document.getElementById("trans_blnce")



var balance = 0;
var expances = 0;
var now = new Date();



function income(){
    balance += +user_input.value;
    income_num.innerText = balance;
    balance_num.innerText = balance;
    if(balance >= 0) balance_num.style.color = "black"
    if(balance < 0) {
        balance_num.style.color = "red"
        balance_hed.innerText = "Loss"
        balance_hed.style.color = "red"
    }
    if(user_input.value){
        trns_type.innerText = "Income"
    trns_type.style.color = "green"
    trns_type.style.backgroundColor = "lime"
    date.innerText = now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear();
    time.innerText = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    trans_blnce.innerText = user_input.value;
}
    user_input.value = "";
}

function expance(){
    balance -= user_input.value;
    balance_num.innerText = balance;
    expances += +user_input.value;
    expance_num.innerText = expances;
    if(balance >= 0) balance_num.style.color = "black"
    if(balance < 0) {
        balance_num.style.color = "red"
        balance_hed.innerText = "Loss"
        balance_hed.style.color = "red"
    }
    if(user_input.value){
        trns_type.innerText = "Expance"
    trns_type.style.color = "red"
    trns_type.style.backgroundColor = "pink"
    date.innerText = now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear();
    time.innerText = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
    trans_blnce.innerText = user_input.value;
}
    user_input.value = "";
}