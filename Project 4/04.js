const input = document.querySelector('input');
const btn = document.querySelector('button');
const prevGuesses = document.querySelector('.prevArray');
const leftGuesses = document.querySelector('.leftArray');
const hint = document.querySelector('.hint');
const guessInfo = document.querySelector('.guessInfo');

let attemptsLeft = 10;
let playGame = true;
let isRight = false;

let randomNumber = parseInt(Math.random()*100 + 1)
console.log(randomNumber);

if(playGame)
{
    btn.addEventListener('click',() => {
        const guessVal = parseInt(input.value);
        console.log(guessVal);
        validate(guessVal);
    })
    
}

function validate(guessVal){
    if(isNaN(guessVal))
        alert("please enter a valid value");
    else if(guessVal <= 0)
        alert("value should be greater than 0");
    else if(guessVal >= 100)
        alert("value should be less than 101");
    else if(guessVal == randomNumber)
    {
        isRight = true;
        endGame();
    }
    else{
        attemptsLeft--;
        updateInfo(guessVal);
    }
}

function updateInfo(guessVal){
    input.value = '';
    prevGuesses.innerHTML += `${guessVal} `;
    leftGuesses.innerHTML = `${attemptsLeft}`;
    if(attemptsLeft == 0)
        endGame();
    else
        highOrLow(guessVal);
}

function highOrLow(guessVal){
    if(guessVal < randomNumber)
        hint.innerHTML = "Number is too LOW";
    else
        hint.innerHTML = "Number is too HIGH";
}

function endGame(){
    playGame = false;
    input.setAttribute('disabled','');
    let h2 = document.createElement('h2');
    h2.setAttribute('id','temp1');
    hint.innerHTML = '';

    if(isRight == true){
        h2.innerHTML = 'YOU WON !!!'
        h2.style.color = 'green'
    }else{
        h2.innerHTML = 'YOU LOOSE !!!'
        h2.style.color = 'red'
    }
    let h3 = document.createElement('h3');
    h3.setAttribute('id','temp2');
    h3.innerHTML = `The correct answer was ${randomNumber}`;
    guessInfo.append(h2);
    guessInfo.append(h3);

    let restartBtn = document.createElement("button");
    restartBtn.innerHTML = "Restart Game";
    restartBtn.style.margin = '10px';
    guessInfo.append(restartBtn);
    restartGame(restartBtn);
}

function restartGame(restartBtn){
    restartBtn.addEventListener('click',() => {
        playGame = true;
        attemptsLeft = 10;
        randomNumber = parseInt(Math.random() * 100 + 1);

        input.removeAttribute("disabled");
        input.value = '';
        prevGuesses.innerHTML = ``;
        leftGuesses.innerHTML = `${attemptsLeft}`;
        document.querySelector('#temp1').remove();
        document.querySelector('#temp2').remove();
        restartBtn.remove();
    })
}