'use strict';
let secretnN = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = Number(localStorage.getItem('highscore')) || 0;
console.log(highscore);
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';

function printMessage(messagep) {
  document.querySelector('.messagep').textContent = messagep;
}
document.querySelector('.check').addEventListener('click', function playgame() {
  let inputNumber = Number(document.querySelector('.guess').value);
  let messageD = document.querySelector('.message');
  if (!inputNumber) {
    messageD.textContent = 'not a number';
  } else if (inputNumber !== secretnN) {
    if (score > 1) {
      messageD.textContent = inputNumber > secretnN ? 'too high' : 'too low';
      score--;
      //   document.querySelector('.score').textContent = score;
      printMessage(score);
    } else {
      messageD.textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (inputNumber === secretnN) {
    document.querySelector('.number').textContent = secretnN;
    messageD.textContent = 'your guess is correct';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    storeHighscore();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretnN = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector('.number').textContent = secretnN;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  highscore = localStorage.getItem('highscore');
});
