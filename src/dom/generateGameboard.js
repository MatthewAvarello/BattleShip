import BOARD_LENGTH from "../config.js";
export default function generateGameboard(board,locationId){
    let boardDOM = document.querySelector("#" + locationId)

    //time complexity of O(n^2) - Quadratic Time
    for (let i = 0; i < BOARD_LENGTH; i++){
        let container = document.createElement("div");
        for (let j = 0; j < BOARD_LENGTH; j++){
            let div = document.createElement("div");
            div.setAttribute("class","square")
            div.setAttribute("data-x",i)
            div.setAttribute("data-y",j)
            container.append(div)
        }
        boardDOM.append(container)
    }
}