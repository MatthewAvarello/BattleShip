import { rotation } from "./index.js";
import displayShipPlacement from "./dom/displayShipPlacement.js";
import clearShips from "./dom/clearShips.js";
import clearNonPermShips from "./dom/clearNonPermShips.js";
import displayAttacks from "./dom/displayAttacks.js";
export default class GameController {
	constructor(humanplayer, robotplayer) {
		this.humanplayer = humanplayer;
		this.robotplayer = robotplayer;
		this.shipsAdded = 0;
		this.shipsLength = [5, 4, 3, 3, 2];
		this.gameWon = false;
	}

	startMatch() {
		let ready = false;
		let playerboard = document.querySelector("#friendlyboard");
		playerboard.addEventListener("mouseover", (event) => {
			if (this.shipsAdded >= this.shipsLength.length) {
				return;
			}
			clearNonPermShips(playerboard);
			displayShipPlacement(
				"friendlyboard",
				Number(event.target.getAttribute("data-x")),
				Number(event.target.getAttribute("data-y")),
				rotation,
				this.shipsLength[this.shipsAdded],
				false,
			);
		});
		playerboard.addEventListener("click", (event) => {
			clearNonPermShips(playerboard);
			if (event.target.getAttribute("id") == "friendlyboard") {
				return;
			}
			if (
					this.humanplayer.addShip(
					[
						Number(event.target.getAttribute("data-x")),
						Number(event.target.getAttribute("data-y")),
					],
					this.shipsLength[this.shipsAdded],
					rotation,
					this.shipsAdded,
				)
				 != false
			) {
				displayShipPlacement(
					"friendlyboard",
					Number(event.target.getAttribute("data-x")),
					Number(event.target.getAttribute("data-y")),
					rotation,
					this.shipsLength[this.shipsAdded],
					true,
				)
				this.shipsAdded++;
				console.log(this.shipsAdded);
				if (this.shipsAdded >= this.shipsLength.length) {
					this.playMatch();
				}
			}
		
		});
	}
	playMatch() {
		console.log("condition met");
		this.humanplayer.playerBoard.logBoard();
		this.robotplayer.addShip(0)
		let robotBoardDom = document.querySelector("#enemyboard")
		let playerBoardDom = document.querySelector("#friendlyboard")
		let playerBoard = this.humanplayer.playerBoard
		let robotBoard = this.robotplayer.playerBoard
		robotBoardDom.addEventListener("click", (event) => {
			if (this.gameWon == true){
				return;
			}
			if (event.target.getAttribute("id") == "enemyboard") {
				return;
			}
			if (robotBoard.recieveAttack([Number(event.target.getAttribute("data-x")),Number(event.target.getAttribute("data-y"))]) == false){
				return;
			}
			//console.log(robotBoard.ships)
			displayAttacks(robotBoardDom,robotBoard)
			let cordtoship = playerBoard.cordToShip
			let sunkById = playerBoard.sunkById()
			console.log("Begin:")
			console.log(cordtoship)
			console.log(sunkById)
			console.log(robotBoard.cordToShip)
			console.log(robotBoard.sunkById())
			if (robotBoard.sunkById().length){
				let sunkIds = robotBoard.sunkById()
				sunkIds.forEach(id => {
				    robotBoard.cordToShip.forEach(array => {
						if (!array.find((element) => element == id)){
							return false
						}
					})
						let properarray;
						let propperelement;
						for (const array of robotBoard.cordToShip) {
							propperelement = array.find((element) => element == id)
							if (propperelement != undefined){
								console.log("Success")
								properarray = array;
								break;
							}
						}
						/*
						robotBoard.cordToShip.forEach(array => {
							propperelement = array.find((element) => element == id)
							if (propperelement){
								console.log("Success")
								properarray = array;
								return
							}
						})*/
						properarray[1].forEach(cordobject => {
							let x = cordobject.x;
							let y = cordobject.y;
							let targetDiv = document.querySelector(
								`#enemyboard div[data-x='${x}'][data-y='${y}']`,
							);
							targetDiv.style.backgroundColor = "red";
						})
					
				});
			}




			if (robotBoard.allSunk() == true){
				alert('Player Won!')
				console.log("PlayerWon!")
				this.gameWon = true
				return;
			}
			this.robotplayer.attack(playerBoard)
			displayAttacks(playerBoardDom,playerBoard)
			if(playerBoard.allSunk() == true){
				alert("robot won!")
				console.log("RobotWon!")
				this.gameWon = true
				return;
			}
			console.log("Playerboard:")
			console.table(playerBoard.board)
			console.log("Robotboard")
			console.table(robotBoard.board)
		})
	}
}
