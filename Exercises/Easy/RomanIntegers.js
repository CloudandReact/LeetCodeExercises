var reduceNumber = function (str, index, char1, char2) {
  if (str.charAt(index + 1) === char1 || str.charAt(index + 1) === char2) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var sum = 0;

  for (var i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case "I":
        //if next one is larger than subtract one
        if (i + 1 < s.length && reduceNumber(s, i, "V", "X")) {
          sum = sum - 1;
        } else {
          sum = sum + 1;
        }

        break;
      case "V":
        sum = sum + 5;
        break;
      case "X":
        if (i + 1 < s.length && reduceNumber(s, i, "L", "C")) {
          sum = sum - 10;
        } else {
          sum = sum + 10;
        }
        break;
      case "L":
        sum = sum + 50;
        break;
      case "C":
        if (i + 1 < s.length && reduceNumber(s, i, "D", "M")) {
          sum = sum - 100;
        } else {
          sum = sum + 100;
        }
        break;
      case "D":
        sum = sum + 500;
        break;
      case "M":
        sum = sum + 1000;
        break;
      default:
      // code block
    }
  }
  return sum;
};

console.log(romanToInt("XIII"));
console.log(romanToInt("IX"));
console.log(romanToInt("XIV"));
