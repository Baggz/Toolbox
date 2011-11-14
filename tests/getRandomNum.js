// Loads ‘Toolbox’
var Toolbox = require('../src/toolbox.js');

/**
 * Test ‘getRandomNum’
 *
 * @param {function} test
 */
exports.getRandomNum = function(test) {

  for ( var i = 0; i < 1000; i++) {

    var output = Toolbox.getRandomNum(0, 5);
    
    test.strictEqual(typeof output, 'number');
    test.strictEqual(output <= 5, true);
    test.strictEqual(output >= 0, true);
  
  }

  for ( var i = 0; i < 1000; i++) {

    var output = Toolbox.getRandomNum(0, 5, 2);
    
    test.strictEqual(typeof output, 'number');
    test.strictEqual(output <= 5, true);
    test.strictEqual(output >= 0, true);
    test.strictEqual(output !== 2, true);
  
  }

  for ( var i = 0; i < 1000; i++) {

    var output = Toolbox.getRandomNum(0, 5, [1, 2, 3]);
    
    test.strictEqual(typeof output, 'number');
    test.strictEqual(output <= 5, true);
    test.strictEqual(output >= 0, true);
    test.strictEqual(output !== 1, true);
    test.strictEqual(output !== 2, true);
    test.strictEqual(output !== 3, true);
  
  }
  
  test.done();
  

};