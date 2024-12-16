

const myBtn = document.getElementById('myButton');
const mylbl = document.getElementById('myLabel');
const min = 1;
const max = 20;
let randomNum;

myBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    mylbl.textContent = randomNum;
};

console.log(randomNum);
