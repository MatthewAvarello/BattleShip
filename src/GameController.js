import { rotation } from "./index.js";
import displayShipPlacement from "./dom/displayShipPlacement.js";
import clearShips from "./dom/clearShips.js";
import clearNonPermShips from "./dom/clearNonPermShips.js";
export default class Gamecontroller{
    constructor(humanplayer, robotplayer){
        this.humanplayer = humanplayer
        this.robotplayer = robotplayer
        this.shipsAdded = 0
        this.shipsLength = [5,4,3,3,2]
    }

    startMatch(){
        let ready = false;
        let playerboard = document.querySelector("#friendlyboard")
        playerboard.addEventListener("mouseover",(event) => {
            if (this.shipsAdded >= this.shipsLength.length){
                return
            }
            clearNonPermShips(playerboard)
            displayShipPlacement("friendlyboard",Number(event.target.getAttribute("data-x")),Number(event.target.getAttribute("data-y")),rotation,this.shipsLength[this.shipsAdded],false)
        })
        playerboard.addEventListener("click",(event) => {
            clearNonPermShips(playerboard)
            if(event.target.getAttribute("id") == "friendlyboard"){
                return
            }
            if (displayShipPlacement("friendlyboard",Number(event.target.getAttribute("data-x")),Number(event.target.getAttribute("data-y")),rotation,this.shipsLength[this.shipsAdded],true) == true){
                this.humanplayer.addShip([Number(event.target.getAttribute("data-x")),Number(event.target.getAttribute("data-y"))],this.shipsLength[this.shipsAdded],rotation,)
            }
            this.shipsAdded++;
            console.log(this.shipsAdded)
            if (this.shipsAdded >= this.shipsLength.length){
                this.playMatch()
            }
        })
    }
    playMatch(){
        console.log("condition met")
        this.humanplayer.playerBoard.logBoard()
    }
}