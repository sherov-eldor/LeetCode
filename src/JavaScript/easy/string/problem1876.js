/**
 * @param {string} s
 * @return {number}
 */

var countGoodSubstrings = function (s) {
  let goodChars = [];
  for (let i = 0; i <= s.length; i++) {
    if (i + 3 <= s.length) {
      let ss = s.split("").splice(i, 3).join("");
      if(new Set(ss.split("")).size == 3){
        goodChars.push(ss)
      }
    }
  }
  return goodChars.length
};

// let s = "xyzzaz";
let s = "aababcabc"

countGoodSubstrings(s);
