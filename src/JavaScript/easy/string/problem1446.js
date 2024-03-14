/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let counter = 1
    let max = 1;
    for (let i = 0; i < s.length; i++) {
      if (i + 1 <= s.length) {
        if (s[i] == s[i + 1]) {
          counter++
        } else {
          if(max < counter){
              max = counter
          }
          counter = 1
        }
      }
    }
    return max
  };
  
  // let s = "leetcode";
  // s = "abbcccddddeeeeedcba"
  // let s = "ccbccbb"
  let s = "cbcb"
  
  maxPower(s);
  