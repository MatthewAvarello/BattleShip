import Gameboard from "../classes/Gameboard.js";
import Ship from "../classes/Ship.js";
let gameboard;
beforeEach(() => {
	gameboard = new Gameboard();
});

test("add ship to ships array", () => {
	gameboard.placeShip([1, 1], 3, "Y");
	let ships = gameboard.ships;
	expect(ships.length).toBe(1);
});

test("add ship to cordinates array with y axis", () => {
	gameboard.placeShip([5, 5], 3, "Y");
	let board = gameboard.board;
	expect(board[5][5] && board[6][5] && board[7][5]).toBeInstanceOf(Ship);
	expect(board[8][5]).not.toBeInstanceOf(Ship);
});

test("add ship to cordinates array with x axis", () => {
	gameboard.placeShip([5, 5], 4, "X");
	let board = gameboard.board;
	expect(
		board[5][5] && board[5][6] && board[5][7] && board[5][8],
	).toBeInstanceOf(Ship);
	expect(board[5][9]).not.toBeInstanceOf(Ship);
});

test("prevents invalid placemen(out of bounds)", () => {
	expect(gameboard.placeShip([8, 8], 3, "Y")).toBe(false);
	let board = gameboard.board;
	expect(board[8][8]).toBe("");
});
test('prevents invalid placement(intersecting another ship)',() => {
	gameboard.placeShip([3,7],3,"X")// 3,7 4,7 5,7
	expect(gameboard.placeShip([4,6],3,"Y")).toBe(false)// 4,6 4,7 4,8
})
test("marks missed attack", () => {
	gameboard.recieveAttack([5,5])
	let board = gameboard.board
	expect(board[5][5]).toBe("x")
});
test("marks hit attack",() => {
	gameboard.placeShip([7,5],3,"Y")
	gameboard.recieveAttack([7,5])
	let board = gameboard.board
	expect(board[5][7]).toBe("X")
})
test("all ships not sunk", () => {
	gameboard.placeShip([2,3],2,"Y")
	gameboard.placeShip([6,7],2,"X")
	gameboard.recieveAttack([2,3])
	gameboard.recieveAttack([2,4])
	expect(gameboard.allSunk()).toBe(false)
})
test("all ships sink", () => {
	gameboard.placeShip([2,3],2,"Y")
	gameboard.placeShip([6,7],2,"X")
	gameboard.recieveAttack([2,3])
	gameboard.recieveAttack([2,4])
	gameboard.recieveAttack([6,7])
	gameboard.recieveAttack([7,7])
	expect(gameboard.allSunk()).toBe(true)
})