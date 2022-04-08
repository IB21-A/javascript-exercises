const removeFromArray = function (arr, ...numbers) {
  return arr.filter((num) => !numbers.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
