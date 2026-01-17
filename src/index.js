import "./style.css";
import RobotPlayer from "./classes/RobotPlayer.js";
import generateGameboard from "./dom/generateGameboard.js";
import HumanPlayer from "./classes/HumanPlayer.js";
import displayShipPlacement from "./dom/displayShipPlacement.js";
import gamecontroller from "./gamecontroller.js";

let rotation = "X";
function shipRotation(keyevent) {
	if (keyevent.code == "KeyR") {
		if (rotation == "X") {
			rotation = "Y";
		} else {
			rotation = "X";
		}
		console.log(rotation);
	}
}
window.addEventListener("keypress", shipRotation);

generateGameboard("w", "friendlyboard");
generateGameboard("e", "enemyboard");

let robot = new RobotPlayer();
let player = new HumanPlayer();
console.log("g");
//displayShipPlacement("friendlyboard",5,5,"Y",5)
//displayShipPlacement("friendlyboard",0,0,"X",3)

let Maingamecontroller = new gamecontroller(player, robot);
Maingamecontroller.startMatch();

export { rotation };
