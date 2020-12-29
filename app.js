const player1btn = document.querySelector('#player1btn');
const player2btn = document.querySelector('#player2btn');
const reset = document.querySelector('#resetbtn');
const player1score = document.querySelector('#player1');
const player2score = document.querySelector('#player2');
const winDeclare = document.querySelector('#winner');
const scoreSetting = document.querySelector('#scoresetting');



player1btn.addEventListener('click', () => {
    const newScore = scoreIncrement(player1score);
    player1score.innerText = newScore;
    if (player1score.innerText > scoreSetting.value) {
        winDeclare.innerText = 'Player 1 Won!';
        player1btn.disabled = true;
        player2btn.disabled = true;
        player1btn.classList.add('disable');
        player2btn.classList.add('disable');
        player1score.classList.add('win');
        player2score.classList.add('lose');

    }
});
player2btn.addEventListener('click', () => {
    const newScore = scoreIncrement(player2score);
    player2score.innerText = newScore;
    if (player2score.innerText > scoreSetting.value) {
        winDeclare.innerText = 'Player 2 Won!';
        player1btn.disabled = true;
        player2btn.disabled = true;
        player1btn.classList.add('disable');
        player2btn.classList.add('disable');
        player1score.classList.add('lose');
        player2score.classList.add('win');

    }
});
reset.addEventListener('click', () => {
    player1score.innerText = 0;
    player2score.innerText = 0;
    player1btn.disabled = false;
    player2btn.disabled = false;
    player1btn.classList.remove('disable');
    player2btn.classList.remove('disable');
    player1score.classList.remove('win', 'lose')
    player2score.classList.remove('win', 'lose')
    winDeclare.innerText = '';
});

function scoreIncrement(score) {
    const newScore = parseInt(score.innerText) + 1;
    return newScore;
}
