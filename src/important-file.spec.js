const importantFunction = require('./important-file');
const {expect} = require('chai');

describe('importantFunction()', function() {
  it('should add the numbers 3 and 4 and return 7', function() {
    var result = importantFunction(3, 4);
    expect(result).to.be.equal(7);
  });

  it('should add the numbers 0 and 10 and return 10', function() {
    var result = importantFunction(0, 10);
    expect(result).to.be.equal(10);
  });
});
