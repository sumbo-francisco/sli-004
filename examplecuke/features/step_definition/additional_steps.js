const { Before, Given, When, Then, expected } = require('cucumber');
const Calculator = require('../../lib/calculator');
const assert = require('assert');

let calculator;

Given('the numbers {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    calculator.add();
});

Then('should the result be {int}', function (int) {
    const i = calculator.getResult();
    assert.equal(i, int)   
});