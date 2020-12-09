const statusDisplay = document.querySelector('.gameStatus');
let boardActive = true;
let currentPlayer = "X";

const winMsg = () => `player ${currentPlayer} has won!`;
const tieMsg = () => `game ended in a tie!`;
const currentPlayerTurn = () => `it's ${currentPlayer}'s turn`;

function restart () {
    board = ["", "", "", "", "", "", "", "", ""];
}

function play () {
    event.preventDefault();
    let firstPlayer = document.getElementById("player1").value;
    let secondPlayer = document.getElementById("player2").value;    
    document.getElementById("firstPlayerName").innerText = firstPlayer+":";
    document.getElementById("secondPlayerName").innerText = secondPlayer+":";
}


function changePlayer() {
    
    currentPlayer = currentPlayer === "X" ? "O" : "X";

}
function squareClicked(check_id) {
    console.log(check_id)
    console.log(currentPlayer)
}

statusDisplay.innerHTML = currentPlayerTurn();
changePlayer();