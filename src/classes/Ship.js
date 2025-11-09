export default class Ship {
	#timesHit = 0;
	#sunk = false;
	constructor(length) {
		this.length = length;
	}

	get timesHit() {
		return this.#timesHit;
	}

	get sunk() {
		return this.#sunk;
	}

	hit() {
		this.#timesHit++;
		if (this.#timesHit >= this.length) this.#sunk = true;
	}
}
