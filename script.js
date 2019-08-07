let currentRoundScore, currentScore, activePlayer, roundScore, score;

score = [0,0];
roundScore = 0;
activePlayer = 0;

currentRoundScore = 0;


function game() {
    let dice;
    dice = Math.ceil((Math.random())*6);
    
    if(dice === 1) {
        nextPlayer();
    } else {
        currentRoundScore = currentRoundScore + dice;
        document.querySelector('#roundScore-'+activePlayer).textContent = currentRoundScore;
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('img').src = 'dice-'+dice+'.png';
    }    
}

function holdGame(){
    score[activePlayer] = score[activePlayer] + currentRoundScore;
    currentRoundScore = 0;
    document.querySelector('#roundScore-'+activePlayer).textContent = currentRoundScore;
    document.querySelector('#score-'+activePlayer).textContent = score[activePlayer]
    if(score[activePlayer] >= 100){
        document.querySelector('.p'+activePlayer).textContent = 'WINNER !';
        document.querySelector('.p'+activePlayer).style.color = 'lightgreen';  
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.roll').disabled = true;
    } else{
        nextPlayer();
    }
}

function nextPlayer(){
    currentRoundScore = 0;
    document.querySelector('#roundScore-'+activePlayer).textContent = currentRoundScore;
    document.querySelector('.p'+activePlayer+'-panel').classList.remove('active');
    activePlayer = (activePlayer+1) % 2;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.p'+activePlayer+'-panel').classList.add('active');
}

function newGame(){
    document.location.reload(true);
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.roll').addEventListener('click', game);
document.querySelector('.hold').addEventListener('click', holdGame);
document.querySelector('.newGame').addEventListener('click', newGame);