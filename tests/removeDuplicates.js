// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘removeDuplicates’
 *
 * @param {function} test
 */
exports.removeDuplicates = function(test) {

  var output = Toolbox.removeDuplicates([1, 1, 2, 2, 3, 3]);

  test.deepEqual(output, [1, 2, 3]);
  
  test.done();
  

};