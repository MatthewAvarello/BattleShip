import Gameboard from "../classes/Gameboard.js";

test('add ship to board',() => {
    let gameboard = new Gameboard()
    gameboard.placeShip([1,1],3,"x")
    let ships = gameboard.ships
    expect(ships.length).toBe(1)
})
