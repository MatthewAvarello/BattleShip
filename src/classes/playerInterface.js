import Gameboard from "./Gameboard.js";

export default class Player {
	playerBoard = new Gameboard();
	constructor() {}
	addShip() {
		throw new Error("Inherited class has not added functionality");
	}
}
