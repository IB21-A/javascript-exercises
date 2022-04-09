const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    typeof start === "string" ||
    typeof end === "string"
  ) {
    return "ERROR";
  }

  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
  }

  try {
    let range = Array.from({ length: end - start + 1 }, (_, i) => i + 1);
    return range.reduce((prev, current) => prev + current + 0);
  } catch (error) {
    return "ERROR";
  }
};

const swap = (a, b) => {};

// Do not edit below this line
module.exports = sumAll;
