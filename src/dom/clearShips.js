export default function clearShips(board){
    let descendants = board.querySelectorAll("*")

    descendants.forEach(element => {
        element.style.backgroundColor = "white"
    });
}