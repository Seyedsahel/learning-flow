document.body.addEventListener('keydown',(event)=>{
    let playerMove;
    if(event.key==='r'){
        playerMove='rock';
    }else if(event.key==='p'){
        playerMove = 'paper';
    } else if(event.key==='s'){
        playerMove = 'scissors';
    }else{
        return;
    }
    playGame(playerMove);
});
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove){
    let computerMove = calComputerMove();
    let res = '';

    if(playerMove === 'paper'){
        if(computerMove === 'paper'){
            res = 'Tie';
        } else if(computerMove === 'rock'){
            res = 'you win!';
        } else if(computerMove === 'scissors'){
            res = 'you Lose!';
        }

        }
    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            res = 'Tie';
        } else if(computerMove === 'scissors'){
            res = 'you win!';
        } else if(computerMove === 'paper'){
            res = 'you Lose!';
        }

    }
    if(playerMove === 'scissors'){
        if(computerMove === 'scissors'){
            res = 'Tie';
        } else if(computerMove === 'paper'){
            res = 'you win!';
        } else if(computerMove === 'rock'){
            res = 'you Lose!';
        }

    }
    document.querySelector('.js-res').innerHTML = res;
    document.querySelector('.js-showMoves').innerHTML = `
     <p class="text-white m-3.5 text-2xl inline-block">
      you
    </p>
    <img class="inline-block h-10 w-10 mr-1" src="images/${playerMove}-emoji.png" alt="">
    <img class="inline-block h-10 w-10 ml-1" src="images/${computerMove}-emoji.png" alt="">
    <p class="text-white m-3.5 text-2xl inline-block">
      computer
    </p>
    `
    if (res === 'you win!') {
        score.wins += 1;
    } else if (res === 'you Lose!') {
        score.losses += 1;
    } else if (res === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    }
      

function calComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = 
        `Wins: ${score.wins}, Losses:${score.losses} , Ties:${score.ties}`;
}

function resetScore(){
    score = {
    wins: 0,
    losses: 0,
    ties: 0
    };
    updateScoreElement();
    localStorage.removeItem('score');
}