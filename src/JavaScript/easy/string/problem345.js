/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function (s) {
  let text = "";
  let vowels = ["a", "e", "i", "o", "u"];
  let vowels_in_s = [];
  let a = 0
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      vowels_in_s.push(s[i]);
    }
  }
  vowels_in_s.reverse();
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
        text += vowels_in_s[a];
        a += 1
    } else {
        text += s[i];
    }
    
  }
  return text
};

// let s = "hello";
let s = "leetcode"

reverseVowels(s);
