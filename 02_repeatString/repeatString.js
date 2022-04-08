const repeatString = function (str, numberOfRepeats) {
  if (numberOfRepeats < 0) return "ERROR";
  if (str === "") return "";

  outputString = "";
  for (let i = 0; i < numberOfRepeats; i++) {
    outputString += str;
  }

  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
