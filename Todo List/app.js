var user_input = document.getElementById("user_input")
var list = document.getElementById("list")



    function add_data(){
        list.innerHTML +=
    `<li>
          <span>${user_input.value}</span>
        <button onclick="edit(this)">Edit</button>
        <button onclick="del(this)">Del</button>
    </li>`
    user_input.value = ""
    }

function edit(ele){
console.log(ele.parentElement.firstElementChild.innerText);
ele.parentElement.firstElementChild.innerText = prompt("Write the changes")
}
function del(ele){
    ele.parentElement.remove() 
}
function del_all(){
    list.innerHTML = ""
}