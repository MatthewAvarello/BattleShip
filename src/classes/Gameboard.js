import Ship from "./Ship.js";
import indexOutOfBounds from "../utility/indexOutOfBounds.js";
import Length from "../config.js"
export default class Gameboard {
	#length = Length;
	#ships = [];
	#board = Array.from({ length: this.#length }, () =>
		new Array(this.#length).fill(""),
	);

	get ships() {
		return this.#ships;
	}

	get board() {
		return this.#board;
	}

	logBoard() {
		console.table(this.#board);
	}

	placeShip(startCords, length, axis) {
		let cords;
		let ship = new Ship(length);
		if (axis == "Y") {
			cords = this.placeYAxis(startCords, length);
		} else if (axis == "X") {
			cords = this.placeXAxis(startCords, length);
		} else {
			console.error("Error: Invalid Axis");
			return false;
		}
		if (cords == false) {
			console.error("Index out of bounds");
			return false;
		}
		this.#ships.push(ship);
		for (let cordPair of cords){
			let x = cordPair.x;
			let y = cordPair.y;
			if (this.#board[y][x] instanceof Ship){
				console.error("Error: Attempting to place in occupied spot")
				return false
			}
		}
		cords.forEach((cordPair) => {
			let x = cordPair.x;
			let y = cordPair.y;
			this.#board[y][x] = ship;
		});
	}

	placeYAxis(startCords, length) {
		let [x, y] = startCords;
		let cordsToPlace = [];
		for (let i = 0; length > i; i++) {
			if (indexOutOfBounds(x, y, this.#length) == true) {
				return false;
			}
			cordsToPlace.push({ x: x, y: y });
			y++;
		}
		return cordsToPlace;
	}

	placeXAxis(startCords, length) {
		let [x, y] = startCords;
		let cordsToPlace = [];
		for (let i = 0; length > i; i++) {
			if (indexOutOfBounds(x, y, this.#length) == true) {
				return false;
			}
			cordsToPlace.push({ x: x, y: y });
			x++;
		}
		return cordsToPlace;
	}

	recieveAttack(cords) {
		const [x, y] = cords;
		if (indexOutOfBounds(x, y, this.#length) == true) {
			console.error("Invalid attack. Index out of bounds");
			return false;
		}
		let target = this.#board[y][x];
		if (target == "") {
			this.#board[y][x] = "x"
		} else if (target instanceof Ship == true) {
			console.log("Condition met")
			target.hit();
			this.#board[y][x] = "X";
		} else if (target == "x" || target == "X") {
			console.error("Invalid attack. You have already shot here before");
			return false;
		}
	}

	allSunk() {
		for (const ship of this.#ships) {
			if (ship.sunk == false) {
				return false;
			}
		}
		return true;
	}
}
