const { expect } = require('chai');
const { lookupChar } = require('../char-lookup')

describe('Test Char Lookup', () => {
  it('Test invalid input', () =>{
    expect(lookupChar(1, 1)).to.be.undefined;
    expect(lookupChar('str', 'str')).to.be.undefined;
    expect(lookupChar('str', 1.3)).to.be.undefined;
  } )
  it('Test incorrect index', () =>{
    expect(lookupChar('str', 3)).to.equal('Incorrect index')
    expect(lookupChar('str', -3)).to.equal('Incorrect index')
  })
  it('Test correct output', () =>{
    expect(lookupChar('str', 1)).to.equal('t')
  })
});

