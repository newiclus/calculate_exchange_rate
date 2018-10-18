/* test/sum.js */

var getQuote = require('./get_quote');
var expect = require('chai').expect;

describe('#getQuote()', function() {

  context('without arguments', function() {
    it('should return 0', function() {
      expect(getQuote()).to.equal(0)
    })
  })
  
  context('with arguments', function() {
    it('should return multiplication of arguments', function() {
      expect( getQuote(1000, 0.86990) ).to.equal(869.90)
    })
    
    it('should return 0', function() {
      expect( getQuote("", 0.345) ).to.equal(0)
    })
  });
});