// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘getRandomNums’
 *
 * @param {function} test
 */
exports.getRandomNums = function(test) {
  
  for ( var i = 0; i < 1000; i++) {
  
    var output = Toolbox.getRandomNums(0, 5, 3);

    test.strictEqual(Array.isArray(output), true);
    test.strictEqual(output.length, 3);

  }

  for ( var i = 0; i < 1000; i++) {

    var output = Toolbox.getRandomNums(0, 5, 3, 2);
    
    test.strictEqual(Array.isArray(output), true);
    test.strictEqual(output.length, 3);
    test.strictEqual(output.indexOf(2), -1);
  
  }

  for ( var i = 0; i < 1000; i++) {

    var output = Toolbox.getRandomNums(0, 5, 3, [3, 4]);
    
    test.strictEqual(Array.isArray(output), true);
    test.strictEqual(output.length, 3);
    test.strictEqual(output.indexOf(3), -1);
    test.strictEqual(output.indexOf(4), -1);
  
  }
  
  test.done();
  

};