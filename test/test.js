/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

import assert from 'assert';
import processList from '../program.js'; // Update with the actual module name

describe('processList', function() {
  it('Empty List', function() {
    assert.deepStrictEqual(processList([]), []);
  });

  it('All Elements Removed', function() {
    assert.deepStrictEqual(processList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), [1, 5, 7, 11, 13, 17, 19]);
  });

  it('List of Length 10 with Alternating Numbers', function() {
    assert.deepStrictEqual(processList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), [1, 5, 7, 11, 13, 17, 19]);
  });

  it('Negative Numbers in the List', function() {
    assert.deepStrictEqual(processList([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), [-1, -5, -7, -11, -13, -17, -19]);
  });

  it('Floating Point Numbers in the List', function() {
    assert.deepStrictEqual(processList([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 10.1, 11.2, 12.3, 13.4, 14.5, 15.6, 16.7, 17.8, 18.9, 19.1, 20.2]), [1.1, 5.5, 7.7, 11.2, 13.4, 17.8, 19.1]);
  });

  it('String Values in the List', function() {
    assert.deepStrictEqual(processList['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'], undefined);
  });

  it('Large Numbers in the List', function() {
    assert.deepStrictEqual(processList([1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 11000000, 12000000, 13000000, 14000000, 15000000, 16000000, 17000000, 18000000, 19000000, 20000000]), [1000000, 5000000, 7000000, 11000000, 13000000, 17000000, 19000000]);
  });
});


