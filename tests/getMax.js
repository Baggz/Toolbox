// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘getMax’
 *
 * @param {function} test
 */
exports.getMax = function(test) {

  test.strictEqual(Toolbox.getMax([4, 3, 3, 2]), 4);
  
  test.done();
  

};