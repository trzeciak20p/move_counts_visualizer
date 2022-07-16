const main_board = document.getElementsByTagName("main")

let board = [new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8)]
let made_moves = [new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8)]
let previous_tile = [null, null]

for(let i = 0; i < 8; i++){         
    for(let j = 0; j < 8; j++){
        board[i][j] = document.querySelectorAll('main .row')[i].querySelectorAll('.tile')[j]   //putting tiles references into board table    
        board[i][j].addEventListener("click", () =>{        //adding them events
            movePiece(i, j)
        })
    } 
}



function movePiece(i, j){
    
}

