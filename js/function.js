const randomNo = Math.floor(Math.random() * 100) + 1; 
const playerInput = document.querySelector('.playerInput');
const resultArea = document.querySelector('.resultArea');
const restuleNo = document.querySelector('.restuleNumber');
const chechBtn = document.querySelector('.check');
const reStartBtn = document.querySelector('.reStart');
let counter= 0;
let playerArr = [];


// randomNo = 65
//

console.log(randomNo);

const btnEndGame = () => {
    chechBtn.style.display = 'none'
    reStartBtn.style.display = 'block'
}

const checkNumber = () => {
    if (playerInput.value  == randomNo){
        btnEndGame();
        return 'Correct'
    } else if (playerInput.value > randomNo) {
        return 'too high';
    } else {
        return 'too low';
    }
};


const storPlayerGuess = () => {
    playerArr.push(playerInput.value);
};

const displayPlayerGuess = (arr) => {
    const resultNoP = document.createElement('p');
    resultNoP.textContent = arr;
     destoryhtml(restuleNo);
     restuleNo.appendChild(resultNoP); 
};

const destoryhtml = (parent) =>{
    let destoryPoint = parent;
    while (destoryPoint.firstChild) {
        destoryPoint.removeChild(destoryPoint.firstChild);
    }
}

const createResultTxt = () => {
    const para = document.createElement('p');
    para.textContent = checkNumber();
    destoryhtml(resultArea);
    resultArea.appendChild(para);
};


const limitActionToTen = () =>{
    if(counter < 10){
        storPlayerGuess();
        displayPlayerGuess(playerArr);
        createResultTxt();
        counter++;
    }
    else{
        btnEndGame();
    }
};



chechBtn.addEventListener('click', limitActionToTen);


const reStartGame = () => {
    location.reload(true);
};

reStartBtn.addEventListener('click', reStartGame);