export default function clearNonPermShips(board) {
	let descendants = board.querySelectorAll(":not([data-perm])");

	descendants.forEach((element) => {
		element.style.backgroundColor = "white";
	});
}
