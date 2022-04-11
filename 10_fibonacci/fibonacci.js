const fibonacci = function (num) {
  // num = parseInt(num);
  if (num < 1) return "OOPS";
  // if (num === 1) return 1;
  // if (num === 2) return 1;

  // return fibonacci(num - 1) + fibonacci(num - 2);

  // Iterative approach
  let a = 1;
  let b = 1;
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
