import Player from "./playerInterface.js";
import { SHIP_LENGTHS,BOARD_LENGTH } from "../config.js";

export default class RobotPlayer extends Player {
	constructor() {
		super();
		this.shipsAdded = 0;
	}

	addShip() {
		let axis;
		while (this.shipsAdded <= 4) {
			let num = Math.random()
			if(num > 0.5){
				axis = "Y"
			} else {
				axis = "X"
			}
			if (this.playerBoard.placeShip([Math.floor(Math.random() * BOARD_LENGTH + 1),Math.floor(Math.random() * BOARD_LENGTH + 1)],SHIP_LENGTHS[this.shipsAdded],axis) == false){
				console.log("Random attemp failed. Trying again.")
				continue;
			}
			this.shipsAdded++;
		}
		//console.table(this.playerBoard.board);
	}
}
