/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */

var findOcurrences = function (text, first, second) {
  text = text.split(" ");
  let third_words = [];
  for (let i = 0; i < text.length; i++) {
    if (i + 2 < text.length) {
      if (text[i] == first && text[i + 1] == second) {
        third_words.push(text[i + 2]);
      }
    }
  }
  return third_words
};

// let text = "alice is a good girl she is a good student", first = "a", second = "good"
// let text = "we will we will rock you", first = "we", second = "will"
let text = "ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk",
    first = "lnlqhmaohv", second = "ypkk"

findOcurrences(text, first, second);
