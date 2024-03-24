let currentPlayer = 'O';
function markCell(cell, player) {
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    }
}

function resetGame() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'O';
}
