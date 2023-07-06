const board = Array(9).fill(null)

function play(clickedId) {

    const playerSpan = document.querySelector("#player")
    const clickedElement = document.getElementById(`${clickedId}`)

    clickedElement.innerText = playerSpan.innerText

    board[clickedId] = playerSpan.innerText;

    const winner = calculateWinner()
    if (winner) {
        alert(`${winner} is the winner`)
    }
    
    const isBoardFull = board.every((square) => square !== null)
    if (isBoardFull) {
    alert('Cat\'s game. There is no winner!')
    }


    if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O"
    } else {
        playerSpan.innerText = "X"
    }
}

function calculateWinner() {
    const lines = [
        // Horizontal lines
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical lines
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal lines
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let line of lines) {
        let [a, b, c] = line
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }

            
      }
}