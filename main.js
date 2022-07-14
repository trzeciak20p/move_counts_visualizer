const main_board = document.getElementsByTagName("main")

let board = [new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8)]
let made_moves = [new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8)]
let previous_tile = [null, null]

for(i = 0; i < 8; i++){     //putting tiles references into board table
    for(j = 0; j < 8; j++){
        board[i][j] = document.querySelectorAll('main .row')[i].querySelectorAll('.tile')[j]
        board[i][j].addEventListener("click", (i, j) =>{
            movePiece(i, j)
        })

        console.log(board[i][j])

    }
}

function movePiece(i, j){
    if(previous_tile[0] != null){
        board[previous_tile[i]][previous_tile[j]].style.backgroundImage = "none"
    }
    
}

