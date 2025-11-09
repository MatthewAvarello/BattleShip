export default class Ship {
  #timesHit = 0;
  constructor(length) {
    this.length = length;
    this.sunk = false;
  }

  get timesHit(){
    return this.#timesHit
  }
  hit(){
    this.#timesHit++
  }

  isSunk(){
    if (this.timesHit >= this.length){
        return true
    } else {
        return false
    }
  }
}
