var boilerplate = require('../');
var should = require('should');

describe('boilerplate', () => {
  it('should return true' ,() => {
    boilerplate().should.be.true();
  });
});
