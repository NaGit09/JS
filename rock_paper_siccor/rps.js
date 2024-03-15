const choice = ['Rock', 'Papper', 'Sicssor'];
const userView = document.getElementById('user');
const ComputerView = document.getElementById('computer');
const resultView = document.getElementById('result');

const rock = document.getElementById('Rock');
const paper = document.getElementById('Papper');
const Sicssor = document.getElementById('Sicssor');

flag = false;

function desice(input) {
    let random = Math.floor(Math.random()* choice.length);
    ComputerView.textContent += choice[random];
    switch (input) {
        case 'Rock':
            if (choice[random] == 'Rock') {
                rock.style.backgroundColor = "red";
                resultView.textContent += "Hòa";
            }
            else if (choice[random] == 'Papper') {
                paper.style.backgroundColor = "red";
                resultView.textContent += "Thua";
            }
            else {
                Sicssor.style.backgroundColor = "red";
                resultView.textContent += "Thắng";
            }
            break;
        case 'Papper':
            if (choice[random] == 'Papper') {
                paper.style.backgroundColor = "red";
                resultView.textContent += "Hòa";
            }
            else if (choice[random] == 'Sicssor') {
                Sicssor.style.backgroundColor = "red";
                resultView.textContent += "Thua";
            }
            else {
                rock.style.backgroundColor = "red";
                resultView.textContent += "Thắng";
            }
            break;
        case 'Sicssor':
            if (choice[random] == 'Sicssor') {
                Sicssor.style.backgroundColor = "red";
                resultView.textContent += "Hòa";
            }
            else if (choice[random] == 'Rock') {
                rock.style.backgroundColor = "red";
                resultView.textContent += "Thua";
            }
            else {
                paper.style.backgroundColor = "red";
                resultView.textContent += "Thắng";
            }
            break;
    }
}
function playGame(input) {

    switch (input) {
        case 'Rock':
            if (!flag) {
                rock.style.backgroundColor = "Green";
                userView.textContent += input;
                flag = true;
                desice(input);
            }
            break;
        case 'Papper':
            if (!flag) {
                paper.style.backgroundColor = "Green";
                userView.textContent += input;
                flag = true;
                desice(input);
            }
            break;

        case 'Sicssor':
            if (!flag) {
                Sicssor.style.backgroundColor = "Green";
                userView.textContent += input;
                flag = true;
                desice(input);
            }
            break;

    }
}