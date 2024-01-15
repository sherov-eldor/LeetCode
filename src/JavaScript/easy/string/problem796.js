/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let res = null;
  for (let i = 0; i < s.length; i++) {
    s = [...s.split("").splice(1, s.length), ...s.split("").splice(0, 1)].join("");
    if (s == goal) {
      res = true;
      break;
    } else {
      res = false;
    }
  }
  return res
};

// let s = "abcde", goal = "cdeab";
let s = "abcde", goal = "abced"

rotateString(s, goal);
