let board;
let currentPlayer = 'X';
let compPlayer = 'O';
let win;
let xScore = 0;
let oScore = 0;

const winningMoves = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
const squares = Array.from(document.querySelectorAll('#board div'));
const statusMsg = document.getElementById('intro');

document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('restart').addEventListener('click', start);



function getWinner() {
    let winner = null;
    winningMoves.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'tie';
};

function gameOver() {
    for (var i = 0; i < squares.length; i++) {
        squares[index].removeEventListener('click', handleTurn, false);
    }
}

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    win = getWinner();
    gamePlay();
};

function computerPlayer(board) {
    
}

function start() {
    board = [ '', '', '', '', '', '', '', '', '' ];
    gamePlay();
};

function gamePlay() {
    board.forEach(function(mark, index) {
    squares[index].textContent = mark;
    });

    statusMsg.textContent = win === 'tie' ? `it's a TIE!` : win ? `${win} is the winner !` : `It's ${currentPlayer}'s turn!`;
    
    };

function play () {
    event.preventDefault();
    let firstPlayer = document.getElementById("player1").value;
    let secondPlayer = document.getElementById("player2").value;    
    document.getElementById("firstPlayer").innerText = firstPlayer+":";
    document.getElementById("secondPlayer").innerText = secondPlayer+":";
}

start();

