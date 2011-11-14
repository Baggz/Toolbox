// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘getSum’
 *
 * @param {function} test
 */
exports.getSum = function(test) {

  test.strictEqual(Toolbox.getSum([2, 3]), 5);
  
  test.done();
  

};