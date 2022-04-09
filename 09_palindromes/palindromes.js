const palindromes = function (str) {
  let filteredArray = str
    .toLowerCase()
    .split("")
    .filter((c) => c.match(/[a-z]/g));

  let forward = filteredArray.join("");
  let reversed = filteredArray.reverse().join("");

  return forward === reversed;
};

// Do not edit below this line
module.exports = palindromes;
