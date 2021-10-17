const { expect } = require('chai');
const { isOddOrEven } = require('../odd-or-even');


describe('Test odd or even', () => {
  it('Test invalid input', () => {
    expect(isOddOrEven(1)).to.be.undefined;
    expect(isOddOrEven({})).to.be.undefined;
    expect(isOddOrEven([])).to.be.undefined;
  });
  it('Test if string length is even', () => {
    expect(isOddOrEven('stri')).to.equal('even');
  });
  it('Test if string length is odd', () => {
    expect(isOddOrEven('str')).to.equal('odd');
  });
});

