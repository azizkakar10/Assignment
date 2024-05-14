var count_num = document.getElementById("count_num")
var count = 0;

function increment(){
    count += 1;
    count_num.innerText = count;
    if(count % 2 == 0) count_num.style.color = "lime"
    if(count % 2 != 0) count_num.style.color = "red"
}
function reset(){
    count = 0;
    count_num.innerText = count;
    count_num.style.color = "blue"
}
function decrement(){
    count -= 1;
    count_num.innerText = count;
    if(count % 2 == 0) count_num.style.color = "lime"
    if(count % 2 != 0) count_num.style.color = "red"
}