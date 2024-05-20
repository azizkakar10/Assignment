var textArea = document.getElementById('textArea');

function f1(a){
    var value = a.value;
    textArea.style.fontSize = value + "px"
}

function f2(a){
    if (textArea.style.fontWeight == "bold") {
        textArea.style.fontWeight = "normal"
        a.classList.remove("active");
    }else{
        textArea.style.fontWeight = "bold"
        a.classList.add("active");
    }
}

function f3(a){
    if (textArea.style.fontStyle == "italic") {
        textArea.style.fontStyle = "normal"
        a.classList.remove("active");
    }else{
        textArea.style.fontStyle = "italic"
        a.classList.add("active");
    }
}

function f4(a){
    if (textArea.style.textDecoration == "underline") {
        textArea.style.textDecoration = "none"
        a.classList.remove("active");
    }else{
        textArea.style.textDecoration = "underline"
        a.classList.add("active");
    }
}

function f5(a){
    textArea.style.textAlign = "left"
}
function f6(a){
    textArea.style.textAlign = "center"
}
function f7(a){
    textArea.style.textAlign = "right"
}

function f8(a){
    if (textArea.style.textTransform == "uppercase") {
        textArea.style.textTransform = "none"
        a.classList.remove("active");
    }else{
        textArea.style.textTransform = "uppercase"
        a.classList.add("active");
    }
}
function f9(a){
    var color = a.value;
    textArea.style.color = color;
}
function f10(a){
    var font = document.getElementById('font').value
    textArea.style.fontFamily = font;
}