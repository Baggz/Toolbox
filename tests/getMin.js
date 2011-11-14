// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘getMin’
 *
 * @param {function} test
 */
exports.getMin = function(test) {

  test.strictEqual(Toolbox.getMin([4, 3, 3, 2]), 2);
  
  test.done();
  

};