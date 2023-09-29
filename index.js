const restartButton = document.getElementById("restart")
const statusText = document.getElementById("statusText")
const cells = document.querySelectorAll(".cell")


let gameState = ["","","","","","","","","",]
let currentPlayer ="X"
let running = false

const winConditions = [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],

]

function checkWinner(){
    let isWinner = false
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const [cell1, cell2, cell3] = condition

        if(gameState[cell1] == currentPlayer && gameState[cell2] == currentPlayer && gameState[cell3] == currentPlayer) {
            isWinner = true
            break
        }

}
if(isWinner) {
    statusText.textContent = `${currentPlayer} wins!`
    running = false
} else if(!gameState.includes("")) {
    statusText.textContent = "Draw!"
}
}



function clickCell(event){
    const cell = event.target
   const position = cell.dataset.index
   console.log(position)
 if (gameState[position] !== "" || !running) {
    return
 }
   gameState[position] = currentPlayer
   cell.textContent = currentPlayer
   checkWinner()

   if (currentPlayer == "X") {
    currentPlayer = "O"
   } else {
    currentPlayer = "X"
   }

   
}

function restart() {
    running = true
    gameState = ["","","","","","","","","",]
    for (let i=0; i < cells.length; i++){
        const cell = cells[i];
        cell.textContent = ""
    }
    currentPlayer = "X"
    statusText.textContent = ""
}

function init() {
    for (let i=0; i < cells.length; i++){
        const cell = cells[i];
        cell.addEventListener("click", clickCell)
    }
    
    running = true
    gameState = ["","","","","","","","","",]
    restartButton.addEventListener("click", restart)
}


init()




