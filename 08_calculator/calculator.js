const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  if (!nums || nums.length === 0) return 0;

  return nums.reduce((prev, current) => prev + current);
};

const multiply = function (nums) {
  return nums.reduce((prev, current) => prev * current);
};

const power = function (num, power) {
  return Math.pow(num, power);
};

const factorial = function (num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
