const hits = [];

class Ship {
  constructor(ship, length) {
    this.ship = ship;
    this.length = length;
  }

  hit(index) {
    // check to see if the ship is hit and return at what index
    // takes a number and then marks that position as ‘hit’
    this.index = index;
    hits.push(index);
    console.log(hits);
    // this.hit.push(index);
  }

  isSunk() {
    // check to see if ship is sunk
    return hits.length === this.length;
  }
}

export default Ship;

const carrierShip = new Ship('carrier', 5);
const battleShip = new Ship('battle', 4);
const destroyerShip = new Ship('destroyer', 3);
const submarineShip = new Ship('submarine', 3);
const patrolShip = new Ship('patrol', 2);

// carrierShip.hit(3);
// battleShip.hit(4);
// carrierShip.isSunk();
// document.getElementById('content').innerHTML = `The ${carrierShip.ship} is ${carrierShip.length} spaces and`;
