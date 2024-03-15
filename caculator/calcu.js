const display = document.getElementById("display");
const content = document.getElementById('text');
const operator = document.getElementsByClassName("operator");
const caculator = document.getElementById("caculator");
const label = document.createElement('h6');
const but = document.getElementById('button1');
label.id = "myh1";
label.style.color = 'red';
label.style.textAlign = 'center';
label.style.alignItems = 'center';



function appenToDisplay(input){
    display.value += input; 
    content.textContent = "yeah";
    label.textContent = input;
    document.getElementById("caculator").append(label);
}

function clearDisplay () {
    display.value = "";
    content.textContent ="";
    document.getElementById("caculator").removeChild(label);
}

function caculate (){
    try {
        display.value = eval(display.value);
        // label.textContent = input;
    } catch (error) {
        display.value = "Errol";
    }
    label.textContent = display.value;
    document.getElementById("caculator").append(label);
}
// but.addEventListener('click',(event) => {
//     if(event.target.textContent === "On"){
//         event.target.textContent = "Off";
//         event.target.style.backgroundColor = 'red';
//         document.getElementById("caculator").style.display ='block';
//     }
//     else {
//         event.target.textContent = "On";
//         event.target.style.backgroundColor = 'green';
//         document.getElementById("caculator").style.display ='none';
//     }
    // //ON OFF ONOROF AND OR NOT
    // switch (event.target.textContent){
    //     case "On":
    //         event.target.textContent = "Off";
    //         event.target.style.backgroundColor = 'red';
    //         document.getElementById("caculator").style.display ='block';
    //         break
    //     case "Off":
    //         event.target.textContent = "On";
    //         event.target.style.backgroundColor = 'green';
    //         document.getElementById("caculator").style.display ='none';
    //         break
    //     default:
    //         break
    // }

    // switch (true){
    //     case event.target.textContent === "On":
    //         event.target.textContent = "Off";
    //         event.target.style.backgroundColor = 'red';
    //         document.getElementById("caculator").style.display ='block';
    //         break
    //     case event.target.textContent === "Off":
    //         event.target.textContent = "On";
    //         event.target.style.backgroundColor = 'green';
    //         document.getElementById("caculator").style.display ='none';
    //         break
    //     default:
    //         break
    





