/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let a = 0;
  let b = 0;
  let res = null;
  for (let i = n; i > 0; i--) {
    a += i;
    b = 0;
    for (let j = 1; j <= i; j++) {
      b += j;
    }
    if (a == b) {
      res = i;
      break;
    } else {
      res = null;
    }
  }
  return res != null ? res : -1;
};

let n = 8;
// let n = 1
// let n = 4

pivotInteger(n);
