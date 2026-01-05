import indexOutOfBounds from "../utility/indexOutOfBounds.js"
import BOARD_LENGTH from "../config.js"
export default function displayShipPlacement(locationID,x,y,Axis,length,permanent){
    let board = document.querySelector("#" + locationID)

    if (Axis == "Y"){
        for (let i = 0; length > i; i++){
            if (indexOutOfBounds(x,y + i,BOARD_LENGTH)){
                return
            }
        }
        if (permanent == true){
            for (let i = 0; length > i; i++){
            let targetDiv = document.querySelector(`div[data-x='${x}'][data-y='${y + i}']`)
            targetDiv.setAttribute("data-perm","true")
        }
        }
        for (let i = 0; length > i; i++){
            let targetDiv = document.querySelector(`div[data-x='${x}'][data-y='${y + i}']`)
            targetDiv.style.backgroundColor = "blue"
        }
    } else if (Axis == "X"){
         for (let i = 0; length > i; i++){
            if (indexOutOfBounds(x + i,y,BOARD_LENGTH)){
                return
            }
        }
        if (permanent == true){
            for (let i = 0; length > i; i++){
            let targetDiv = document.querySelector(`div[data-x='${x + i}'][data-y='${y}']`)
            targetDiv.setAttribute("data-perm","true")
        }
        }
        for (let i = 0; length > i; i++){
            let targetDiv = document.querySelector(`div[data-x='${x + i}'][data-y='${y}']`)
            targetDiv.style.backgroundColor = "blue"
        }
    }

    return true
}