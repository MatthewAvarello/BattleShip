import Ship from "../classes/Ship";

test("recieves hits", () => {
	let ship = new Ship(4);
	ship.hit();
	expect(ship.timesHit).toBe(1);
});
test("will sink", () => {
	let ship = new Ship(4);
	ship.hit();
	ship.hit();
	ship.hit();
	ship.hit();
	expect(ship.sunk).toBe(true);
});
test("wont sink", () => {
	let ship = new Ship(4);
	ship.hit();
	ship.hit();
	ship.hit();
	expect(ship.sunk).toBe(false);
});
