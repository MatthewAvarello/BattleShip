import Player from "./playerInterface.js";

export default class HumanPlayer extends Player {
	addShip(startCords, length, axis) {
		return this.playerBoard.placeShip(startCords, length, axis);
	}
}
