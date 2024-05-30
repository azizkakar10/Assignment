var income_num = document.getElementById("income_num")
var income_hed = document.getElementById("income_hed")

var expance_num = document.getElementById("expance_num")
var expance_hed = document.getElementById("expance_hed")

var balance_num = document.getElementById("balance_num")
var balance_hed = document.getElementById("balance_hed")

var user_input = document.getElementById("user_input")

var trns_type = document.getElementById("trns_type")

var transaction = document.getElementById("transaction")



var balance = 0;
var expances = 0;
var no = 1;



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
        var now = new Date();
        date = now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear();
        time = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
        transaction.innerHTML += `
        <tr>
    <td>${no++}</td>
    <td style="background-color: lime; color: white;">Income</td>
    <td >${date}</td>
    <td>${time}</td>
    <td>${user_input.value}</td>
</tr>`
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
        var now = new Date();
        date = now.getDate()+"/"+now.getMonth()+"/"+now.getFullYear();
        time = now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
        transaction.innerHTML += `
        <tr>
    <td>${no++}</td>
    <td style="background-color: red; color: white;">Income</td>
    <td >${date}</td>
    <td>${time}</td>
    <td>${user_input.value}</td>
</tr>`
}
    user_input.value = "";
}