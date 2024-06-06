// .....................>>>>>>>> Local Storage  <<<<<<......................
//1. setItem("Key" , "Value")  ... The value should be string, Array, Object.
//2. getItem("keyName")
//3. removeItem("keyName")
//4. clear()
//5. JSON.stringify("keyName")  ... To convert Array and Object to string because the Local Storage only save data as a string.
//6. JSON.parse("keyName") ... To Reconvert string to its Own type Array or Object.

var home_container = document.getElementById("home_container")
var login_container = document.getElementById("login_container")
var email = document.getElementById("email")
var user_email = document.getElementById("user_email")
var password = document.getElementById("password")
var todo_input = document.getElementById("todo_input")



function loginUser() {
    if (!email.value || !password.value)
    return alert("Please add email and password.");
  localStorage.setItem("email", email.value);
  checkIsUserLogin(); 
}

function checkIsUserLogin(){
    var email = localStorage.getItem("email")
    if(email){
        home_container.style.display = "block";
        login_container.style.display = "none";
        user_email.innerText = email
    }else{
        home_container.style.display = "none";
        login_container.style.display = "block";
    }    
    displayUserTodos();
}

checkIsUserLogin();

function logout(){
    localStorage.removeItem("email");
    checkIsUserLogin();
}

function AddTodo(){
    checkIsUserLogin();
    if(todo_input.value){
        var email = localStorage.getItem("email");
    
    var obj = {
        email : email,
        todo : todo_input.value
    };
    saveValueToLocalStorage(obj);
    todo_input.value = "";
    }else{
        alert("Please Insert the Todo")
    }
}

function saveValueToLocalStorage(obj){
    var todos = localStorage.getItem("todos")
    
    if (todos) {
        todos = JSON.parse(todos);
        todos.push(obj);
        // console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
      } else {
        todos = [obj];
        // console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
      }
      displayUserTodos();
}

function displayUserTodos(){
    var list = document.getElementById("list");
    var todos = localStorage.getItem("todos");
    var currentEmail = localStorage.getItem("email");

    if(todos){
        list.innerHTML = "";
        todos = JSON.parse(todos);
        todos.forEach(function(data , ind){
            console.log(data , ind);
            if(data.email === currentEmail){
                var liElement = ` <li class="border rounded p-2 my-2 bg-red-300">
                <p class = "text-lg font-bold">${data.todo}</p> 
                    <p>${data.email}</p>
                  </li>`;
                list.innerHTML += liElement;
            }else if(currentEmail === "admin@gmail.com"){
                var liElement = ` <li class="border rounded p-2 my-2 bg-red-300">
                <p class = "text-lg font-bold">${data.todo}</p> 
                    <p>${data.email}</p>
                  </li>`;
                list.innerHTML += liElement;
            }
        })
    }
}
displayUserTodos();
  