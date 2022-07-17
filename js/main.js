const main_board = document.getElementsByTagName("main")

let board = [new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8)]
let made_moves = [new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8), new Array(8)]
let previous_tile = [null, null]
let actuall_piece = 0

for(let i = 0; i < 8; i++){         
    for(let j = 0; j < 8; j++){
        board[i][j] = document.querySelectorAll('main .row')[i].querySelectorAll('.tile')[j]   //putting tiles references into board table    
        board[i][j].addEventListener("click", () =>{        //adding them events
            movePieceIndicator(i, j)
        })
    } 
}

for(let i = 0; i < 5; i++){    
    document.querySelectorAll('#choose_piece input')[i].addEventListener("click", () =>{  
        console.log(actuall_piece, i)
        document.querySelectorAll('#choose_piece input')[actuall_piece].style.backgroundColor = "var(--tile2)"
        document.querySelectorAll('#choose_piece input')[i].style.backgroundColor = "var(--green)"
        
        actuall_piece = i   //updateing choosen piece
    })
} 

function movePieceIndicator(i, j){
    pieces[actuall_piece].movePiece(i, j)
}

