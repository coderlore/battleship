import Ship, { hits } from '../ship';

describe('ship details', () => {
  // assign variables to avoid beforeEach scoping issues
  let testCarrier;
  let testDestroyerShip;
  beforeEach(() => {
    testCarrier = new Ship('carrier', 6);
    testDestroyerShip = new Ship('destroyerShip', 2);
    return hits;
  });
  test('length equal to 6', () => {
    expect(testCarrier.length).toEqual(6);
  });
  test('hit equal to 3', () => {
    testCarrier.hit(3);
    expect(hits).toEqual([3]);
  });
  test('multiple hits', () => {
    testCarrier.hit(5);
    testCarrier.hit(6);
    expect(hits).toEqual([3, 5, 6]);
  });
  test('shows that a boat is sunk', () => {
    testDestroyerShip.hit(10);
    testDestroyerShip.hit(11);
    testDestroyerShip.hit(12);
    expect(testDestroyerShip.isSunk()).toBe(true);
  });
});
