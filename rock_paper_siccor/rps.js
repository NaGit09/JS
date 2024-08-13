const choice = ['Rock', 'Papper', 'Sicssor'];
const userView = document.getElementById('user');
const ComputerView = document.getElementById('computer');
const resultView = document.getElementById('result');

const rock = document.getElementById('Rock');
const paper = document.getElementById('Papper');
const Sicssor = document.getElementById('Sicssor');

const matrix = [[0,-1,1] 
              , [1,0,-1] ,
                [-1,1,0]];
const arrItem = [rock , paper , Sicssor];
flag = false;
function desice (num) {
   if(!flag) {
     // set background color for user choose item !
     arrItem[num].style.backgroundColor = "green";
     userView.textContent += arrItem[num].textContent;
     // machine choose item 
     let random = Math.floor(Math.random()* choice.length);
     arrItem[random].style.backgroundColor = "red";
     ComputerView.textContent += arrItem[random].textContent;
     // 
 
     if(matrix[num][random] == 0) {
         resultView.textContent = "Hòa";
     }
     else if(matrix[num][random] == 1) {
         resultView.textContent = "Thắng";
     }
     else {
         resultView.textContent = "Thua";
     }
     flag = true;
   }
}

function reset() {
    // reset color 
    const Bitem = "hsl(200, 100%, 50%)";
    rock.style.backgroundColor = Bitem;
    paper.style.backgroundColor = Bitem;
    Sicssor.style.backgroundColor = Bitem;
    // reset text 
    resultView.textContent = "result :";
    userView.textContent = "User choose: ";
    ComputerView.textContent = "computer choose:";
    // reset flag 
    flag = false;
}