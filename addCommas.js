function addCommas(num) {
  //if num is < 1000 or > -1000 return num
  if (Math.abs(num) < 1000) {
    return String(num);
  }

  let sign = "";
  if (num < 0) {
    sign = "-";
  }

  let numStr = String(Math.abs(num));
  let newNum = "";

  let i = 0;
  let j = 0;

  //for nums where the number of digists is odd.
  if (numStr.length % 3 != 0) {
    newNum = numStr.slice(0, numStr.length % 3) + ",";
    i = numStr.length % 3;
  }

  while (i < numStr.length) {
    if (j == 2 && i < numStr.length - 2) {
      newNum += numStr[i] + ",";
      j = 0;
    } else {
      newNum += numStr[i];
      j++;
    }

    i++;
  }
  return sign + newNum;
}

module.exports = addCommas;
