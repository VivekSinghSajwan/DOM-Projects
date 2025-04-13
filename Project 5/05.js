//generate random color in hex code
function randomColor(){
    const values = "0123456789ABCDEF";
    let color = "";
    for(let i=0; i<6; i++)
        color += values[parseInt(Math.random()*16)];
    return color;
}

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const body = document.querySelector('body');

let id; //for storing the id of setInterval
startBtn.addEventListener('click',() => {
    id = setInterval(() => {
        let color = randomColor();
        body.style.backgroundColor = `#${color}`;
    },1000);
})

stopBtn.addEventListener('click',() => {
    clearInterval(id);
})