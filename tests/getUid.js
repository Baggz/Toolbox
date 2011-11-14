// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘getUid’
 *
 * @param {function} test
 */
exports.getUid = function(test) {
  
  var output = Toolbox.getUid();
  
  test.strictEqual(typeof output, 'string');

  test.done();
  

};