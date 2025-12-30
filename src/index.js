import "./style.css";
import RobotPlayer from "./classes/RobotPlayer.js";
import generateGameboard from "./dom/generateGameboard.js";
console.log("Webpack template!");
let robot = new RobotPlayer()
generateGameboard("w","friendlyboard")
generateGameboard("e","enemyboard")
