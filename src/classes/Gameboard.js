import Ship from "./Ship.js"
import indexOutOfBounds from "../utility/indexOutOfBounds.js"
export default class Gameboard{
    #length = 10
    #ships = []
    #board = Array.from({length: this.#length}, () => new Array(this.#length).fill(""))

    get ships(){
        return this.#ships
    }

    logBoard(){
        console.table(this.#board)
    }

    placeShip(startCords,length,axis){
        let cords;
        let ship = new Ship(length)
        if (axis == "Y"){
            cords = this.placeYAxis(startCords,length)
        } else {
            cords = this.placeXAxis(startCords,length)
        }
        if (cords == false){
            console.error("Index out of bounds")
            return false
        }
        console.log(cords)
        this.#ships.push(ship);
        cords.forEach(cordPair => {
            let x = cordPair.x
            let y = cordPair.y
            this.#board[y][x] = ship
        });
    }

    placeYAxis(startCords,length){
        let [x,y] = startCords
        let cordsToPlace = []
        for(let i = 0; length > i; i++){
            if (indexOutOfBounds(x,y,this.#length) == true){
                return false
            }
            cordsToPlace.push({x: x, y: y})
            y++;
        }
        console.table(cordsToPlace)
        return cordsToPlace
    }

    placeXAxis(cords){

    }
}