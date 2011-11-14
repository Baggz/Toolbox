// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘detectMimeType’
 *
 * @param {function} test
 */
exports.detectMimeType = function(test) {

  test.strictEqual(Toolbox.detectMimeType('json'), 'application/json');
  test.strictEqual(Toolbox.detectMimeType('application/json'), 'json');

  test.done();

};