let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0 
};
updateScoreElement();

function playGame(playerMove) {
  const computerMove = PickComputerMoves();
  let result = '';

  if (playerMove === 'scissors'){
    if (computerMove === 'Rock') {
        result = 'You loose';
      } else if (computerMove === 'Paper') {
        result = 'You win';
      } else if (computerMove === 'Scissors') {
        result = 'Tie';
      }
  } else if (playerMove === 'paper'){
      if (computerMove === 'Rock') {
      result = 'You win';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else if (computerMove === 'Scissors') {
      result = 'You loose';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You loose';
    } else if (computerMove === 'Scissors') {
      result = 'You win';
    }
  }
  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You loose') {
    score.losses += 1;
  } else if (result === 'Tie'){
    score.ties += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}-emoji.png" alt="" class="move-icon">
<img src="${computerMove}-emoji.png" alt="" class="move-icon">computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML =  `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function PickComputerMoves() {
    const randomNumber = Math.random() + 1;

    let computerMove = '';
    
    if (randomNumber >= 1 && randomNumber <= 1.33){
        computerMove = 'Rock';
      } else if (randomNumber >= 1.33 && randomNumber < 1.66){
        computerMove = 'Paper';
      } else if (randomNumber >= 1.66 && randomNumber < 2){
        computerMove = 'Scissors';
      }

      return computerMove;
  
}