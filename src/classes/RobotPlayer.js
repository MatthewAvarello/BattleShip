import Player from "./playerInterface.js";


export default class RobotPlayer extends Player {
    addShip(){
        this.playerBoard.placeShip([0,0],2,"Y")
        this.playerBoard.placeShip([2,1],3,"Y")
        this.playerBoard.placeShip([7,0],4,"Y")
        this.playerBoard.placeShip([5,1],5,"Y")
        console.table(this.playerBoard.board)
    }
}