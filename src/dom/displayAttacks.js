import { BOARD_LENGTH } from "../config.js";

export default function displayAttacks(boardDom,gameboard){
    let board = gameboard.board;
    //console.log(gameboard)
    //console.log(board)
    for(let y = 0; BOARD_LENGTH > y; y++){
        for (let x = 0; BOARD_LENGTH > x; x++){
            let box = boardDom.querySelector(`div[data-x='${x}'][data-y='${y}']`)
            if (board[y][x] == "x"){
                box.innerHTML = "x"
            } else if (board[y][x] == "X"){
                box.innerHTML = "X"
            }
        }
    }
}