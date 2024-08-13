// create dom element !
const display = document.getElementById("display");
const content = document.getElementById('text');
const operator = document.getElementsByClassName("operator");
const caculator = document.getElementById("caculator");
const but = document.getElementById('button1');



function appenToDisplay(input){
    display.value += input; 
    
}

function clearDisplay () {
    display.value = "";
}

function caculate (){
    try {
        display.value = eval(display.value);
        // label.textContent = input;
    } catch (error) {
        display.value = "Errol";
    }
    
}



