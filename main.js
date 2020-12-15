let board;
let currentPlayer = 'X';
let compPlayer = 'O';
let win;
let xScore = 0;
let oScore = 0;
let firstPlayer;
let secondPlayer;
let active = 1;

const winningMoves = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
const squares = Array.from(document.querySelectorAll('#board div'));
const statusMsg = document.getElementById('status');


document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('restart').addEventListener('click', start);

function play () {
    event.preventDefault();
    let firstPlayer = document.getElementById("player1").value;
    let secondPlayer = document.getElementById("player2").value;    
    document.getElementById("firstPlayer").innerText = firstPlayer + " is X";
    document.getElementById("firstPlayer").style.animation = "bounceIn 2s";
    document.getElementById("secondPlayer").innerText = secondPlayer + " is O";
    document.getElementById("secondPlayer").style.animation = "bounceIn 2s";
    start();
}

function start() {
    document.getElementById('board').addEventListener('click', handleTurn);
    board = [ '', '', '', '', '', '', '', '', '' ];
    gamePlay();
};

function gamePlay() {
    board.forEach(function(mark, index) {
    squares[index].textContent = mark;
});
    statusMsg.textContent = win === 'tie' ? `play again, it's a TIE !` : win ? `${win} is the winner !` : `it's now ${currentPlayer}'s turn`;
   
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    win = getWinner();
    gamePlay();
    // if ([idx]) has X's in winningMoves, draw a line through the squares and alert winner
    if (win === "X" || win === "O") {
        gameOver();
    }
};

function getWinner() {
    let winner = null;
    winningMoves.forEach(function(move, index) {
        // <condition1 && condition2 && condition3 > ? <if all 3 conditions are true, this> : <else, this>
        if (board[move[0]] && board[move[0]] === board[move[1]] && board[move[0]] === board[move[2]]) winner = board[move[0]];
        });
        return winner ? winner : board.includes('') ? null : 'tie';
};

function gameOver() {
    //for (var i = 0; i < squares.length; i++) {
        active = 0;
        document.getElementById('board').removeEventListener('click', handleTurn, false);
        alert(`${win} is the winner. play again ?`);
        start();
    }


function computerPlayer(board) {
    
}

start();
