const { expect } = require('chai');
const { mathEnforcer } = require('../math-enforcer');

describe('Test mathEnforcer, addFive functionality', () => {
  it('Test invalid input', () => {
    expect(mathEnforcer.addFive('str')).to.be.undefined;
    expect(mathEnforcer.addFive({})).to.be.undefined;
    expect(mathEnforcer.addFive([])).to.be.undefined;
    expect(mathEnforcer.addFive(undefined)).to.be.undefined;
  });
  it('Test expected result', () => {
    expect(mathEnforcer.addFive(5)).to.equal(10);
    expect(mathEnforcer.addFive(-10)).to.equal(-5);
    expect(mathEnforcer.addFive(1.5)).to.equal(6.5);
    // expect(mathEnforcer.addFive(-1.5)).to.equal(3.5);
  });
});

describe('Test mathEnforcer, subtractTen functionality', () => {
  it('Test invalid input', () => {
    expect(mathEnforcer.subtractTen('str')).to.be.undefined;
    expect(mathEnforcer.subtractTen({})).to.be.undefined;
    expect(mathEnforcer.subtractTen([])).to.be.undefined;
    expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
  });
  it('Test expected result', () => {
    expect(mathEnforcer.subtractTen(15)).to.equal(5);
    expect(mathEnforcer.subtractTen(-15)).to.equal(-25);
    expect(mathEnforcer.subtractTen(1.5)).to.equal(-8.5);
    // expect(mathEnforcer.subtractTen(-1.5)).to.equal(-11.5);
  });
});

describe('Test mathEnforcer, sum functionality', () => {
  it('Test invalid input', () => {
    expect(mathEnforcer.sum('str', 'str')).to.be.undefined;
    expect(mathEnforcer.sum('str', 1)).to.be.undefined;
    // expect(mathEnforcer.sum(1, 'str')).to.be.undefined;
    expect(mathEnforcer.sum(1, [])).to.be.undefined;
    // expect(mathEnforcer.sum([], 1)).to.be.undefined;
    expect(mathEnforcer.sum({}, 1)).to.be.undefined;
    // expect(mathEnforcer.sum(1, {})).to.be.undefined;
    expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
    // expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
    expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
    // expect(mathEnforcer.sum(NaN, undefined)).to.be.undefined;
  });
  it('Test valid output', () =>{
    expect(mathEnforcer.sum(1, 2)).to.equal(3);
    expect(mathEnforcer.sum(-1, 2)).to.equal(1);
    expect(mathEnforcer.sum(1, -2)).to.equal(-1);
    expect(mathEnforcer.sum(1.5, 1.5)).to.equal(3);
    expect(mathEnforcer.sum(-1.5, 1.5)).to.equal(0);
  })
});
