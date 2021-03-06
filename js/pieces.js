class Piece{
    constructor(name, moves, max_moves, image_url){
        this.name = name
        this.moves = moves
        this.max_moves = max_moves  //max amount of moves to go trough the whole board
        this.image_url = image_url
    }
    //  MOVES
    //  2-letter string
    //  1st determines vertical and horizontal movement, 2nd - diagonal movement
    //  letters meaning: number - self explainatory, x - no limit of moved tiles, l - the knight move (special case)  

    showMoves(i, j){
        
        let move = 1
        while(move <= this.max_moves){
            for(let x = 0; x < 8; x++){         
                for(let y = 0; y < 8; y++){
                        // tu se przechodzimy przez całą tablice i po kolei patrzymy czy z danego pola można było ruch wykonać
                } 
            }



            move++
        }

    }

    movePiece(i, j){
        console.log(i, j)
        if(previous_tile[0] != null){          //wywalenie poprzedniej figury
            board[previous_tile[0]][previous_tile[1]].style.backgroundImage = "none"
        }
        board[i][j].style.backgroundImage = "url(" + this.image_url + ")"
    
        for(let x = 0; x < 8; x++){         
            for(let y = 0; y < 8; y++){
                made_moves[x][y] = null        //clearing table with previously shown moves
            } 
        }
            
        made_moves[i, j] = 0
        this.showMoves(i, j)

        previous_tile = [i, j]
    }
}

let Rook = new Piece("Rook", "x0", 2, "img/rook.svg")
let Bishop = new Piece("Bishop", "0x", 2, "img/bishop.svg")
let Knight = new Piece("Knight", "l", 6, "img/knight.svg")
let Queen = new Piece("Queen", "xx", 2, "img/queen.svg")
let King = new Piece("King", "11", 7, "img/king.svg")
const pieces = [Rook, Bishop, Knight, Queen, King]






