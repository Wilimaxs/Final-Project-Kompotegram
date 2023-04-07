`use strict`
alert("Nama = Wildan Tisna Surya Nugraha\nNIM = 2202527");

let score = 20;
let highscore = 0;
let guess = Math.trunc(Math.random() * 20) + 1;
let playing = true;
const number = document.querySelector('.num');
const mass = document.querySelector('.message');
const point = document.querySelector('.score');
const result = document.querySelector('.num-guess');
const layout = document.querySelector('body');
const upScore = document.querySelector(".highscore");
const again = document.querySelector('.loop');
const test = document.querySelector('.guess');
number.focus();


const message = function (message){
  mass.textContent = message;
    point.textContent = score-1,score--;
}

const btnGuess = function (){
  if (playing) {
    const num = Number(number.value);
    if (num === guess){
      mass.textContent = 'you win';
      number.value = "";
      result.textContent = guess;
      playing = false;
        if (score > highscore){
          highscore = score;
          upScore.textContent = highscore;
        } 
  layout.style.backgroundColor = '#60b347';
  }else if (score <= 1 ){
    message("losser");
    number.value = '';
    playing = false;
    layout.style.backgroundColor = '	#FFA07A';
  }

  if(!num && score >= 1){
    message("no input");
  }else if (num > guess && score >= 1){
    message('too high');
    number.value = '';
  }else if (num < guess && score >= 1){
    message ("too low");
    number.value = '';
  }
}
number.focus();
}

const btnAgain = function(){
  guess = Math.trunc(Math.random() * 20) + 1;
  result.textContent = "?";
  score = 20;
  point. textContent = score;
  mass.textContent = 'start guess. .  .';
  layout.style.backgroundColor = '#222';
  playing = true;
  number.focus();
}


number.addEventListener('keydown', function(e){
  if (playing){
    if (e.key === 'Enter'){
      btnGuess();
    }
    }
    if (e.key === 'Escape'){
      btnAgain();
    }
})

test.addEventListener('click', btnGuess)
again. addEventListener ('click', btnAgain)