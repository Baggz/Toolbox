// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘getAvg’
 *
 * @param {function} test
 */
exports.getAvg = function(test) {
  
  test.strictEqual(Toolbox.getAvg([4, 3, 3, 2]), 3);
  
  test.done();
  

};