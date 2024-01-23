/**
 * @param {string} s
 * @return {character}
 */

// First solution

var repeatedCharacter = function (s) {
  let letterObj = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      return s[i];
    }
    letterObj?.[s[i]] ? letterObj[s[i]]++ : (letterObj[s[i]] = 1);
    for (let k in letterObj) {
      if (letterObj[k] == 2) {
        return k;
      }
    }
  }
};

// Second solution

var repeatedCharacter = function (s) {
  let letters = new Set();
  for (let i = 0; i < s.length; i++) {
    if (letters.has(s[i])) {
      return s[i];
    } else {
      letters.add(s[i]);
    }
  }
};

// let s = "abccbaacz";
let s = "nwcn";

repeatedCharacter(s);
