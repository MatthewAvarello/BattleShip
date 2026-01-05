import Player from "./playerInterface.js";

export default class HumanPlayer extends Player{

    addShip(startCords, length, axis){
        this.playerBoard.placeShip(startCords,length,axis)
    }
}