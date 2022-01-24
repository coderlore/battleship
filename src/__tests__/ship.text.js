/* const ship = require('../ship');

// const carrierShip = new ship('carrier', 5);

test('return ship hit of 3', () => {
  expect(ship.hit(3)).toBe(3);
}); */

import Ship from '../ship';

describe('ship details', () => {
  // assign variables to avoid beforeEach scoping issues
  let testCarrier;
  beforeEach(() => {
    testCarrier = new Ship('carrier', 6);
  });
  it('length equal to 6', () => {
    expect(testCarrier.length).toEqual(6);
  });
  /* it('hit equal to 3', () => {
    testCarrier.hit(3);
    expect(testCarrier.hit).toEqual(3);
  }); */
});
