/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
  s = s.toLowerCase();
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      if (s[i] != s[i + 1]) {
        counter++;
      }
    }
  }
  return counter
};

// let s = "aAbBcC"
let s = "AaAaAaaA";

countKeyChanges(s);
