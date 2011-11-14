// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘shuffle’
 *
 * @param {function} test
 */
exports.shuffle = function(test) {
  
  var output = Toolbox.shuffle([1, 2, 3]);
  test.strictEqual(typeof output, 'object');
  test.strictEqual(Array.isArray(output), true);
  test.strictEqual(output.indexOf(1) !== -1 , true);
  test.strictEqual(output.indexOf(2) !== -1 , true);
  test.strictEqual(output.indexOf(3) !== -1 , true);

  test.done();

};