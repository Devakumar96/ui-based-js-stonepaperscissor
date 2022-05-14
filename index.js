'use strict';

const weapons = document.querySelectorAll('.weapon');

const userScoreEl = document.getElementById('userscore');
const computerScoreEl = document.getElementById('computerscore');
const userOptionEl = document.getElementById('user-option');
const computerOptionEl = document.getElementById('computer-option');

const resultContainer = document.querySelector('.result');
const resultEl = document.getElementById('results');

let userScore = 0;
let computerScore = 0;

const showResult = function(userWeapon,computerWeapon){
resultContainer.classList.add('show');
userOptionEl.textContent = userWeapon;
computerOptionEl.textContent = computerWeapon;
}

const result = function(result,userWeapon,computerWeapon){
  if (result === 'win'){
    userScore += 1;
    userScoreEl.textContent = userScore;
    showResult(userWeapon,computerWeapon);
    resultEl.textContent = 'you win';
  }
   else (result === 'lost')
  {
    computerScore +=1;
    computerScoreEl.textContent = computerScore;
    showResult(userWeapon,computerWeapon);
    resultEl.textContent = 'You lose';
  
}
};

// quiryselctor
// const weapons = document.querySelectorAll('.weapon');

const getcomputerChoice = function(){
  let weapon = ['rock','paper','scissor'];
  return weapon[Math.trunc(Math.random() * 3)];
};


const getgameResult = function (userWeapon) {
//   console.log(userWeapon);
  let computerWeapon = getcomputerChoice();
  let gameResult = `${computerWeapon}${userWeapon.toLowerCase()}`;

  if (computerWeapon === userWeapon) {
    result('draw',userWeapon,computerWeapon);
  } 
  else if (
    gameResult === 'rockpaper' ||
    gameResult === 'paperscissor' ||
    gameResult === 'scissorrock'
  ) {
    result('win',userWeapon,computerWeapon);
}    
  else if(
    gameResult === 'paperrock' ||
    gameResult === 'scissorpaper' ||
    gameResult === 'rockscissor'
  ) {
     result('lost',userWeapon,computerWeapon);
  }
   
  };