let currentPlayer = 'O';
let gameMode = ''; // 'single' dla gry z komputerem, 'multi' dla gry z drugim graczem

function setGameMode(mode) {
    gameMode = mode;
    resetGame();
}

function play(cell) {
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (gameMode === 'single' && currentPlayer === 'O') {
            setTimeout(computerMove, 500); // Komputer wykonuje ruch po 0.5 sekundy
        } else {
            currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
        }
    }
}

function computerMove() {
    const availableCells = Array.from(document.querySelectorAll('.cell')).filter(c => c.textContent === '');
    if (availableCells.length > 0) {
        const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        randomCell.textContent = currentPlayer;
        currentPlayer = 'O';
    }
}

function resetGame() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'O';
}
