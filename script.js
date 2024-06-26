let currentPlayer = 'O';
let gameMode = 'single';
resetGame();

function setGameMode(mode) {
    gameMode = mode;
    resetGame();
}

function play(cell) {
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        let winner = checkWinner();
        if (winner) {
            alert(winner + ' wygrywa!');
            resetGame();
            return;
        } else if (!winner && gameMode === 'single') {
            computerMove();
            winner = checkWinner();
            if (winner) {
                alert(winner + ' wygrywa!');
                resetGame();
            }
        }
        if (gameMode === 'multi') {
            currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
        }
    }
}


function computerMove() {
    const availableCells = Array.from(document.querySelectorAll('.cell')).filter(c => c.textContent === '');
    if (availableCells.length > 0) {
        const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        randomCell.textContent = 'X';
        if (gameMode === 'single') currentPlayer = 'O';
    }
}


function resetGame() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'O';
}

function checkWinner() {
    const cells = document.querySelectorAll('.cell');
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent;
        }
    }
    return null;
}
