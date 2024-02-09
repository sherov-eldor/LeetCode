/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let text = "";
  for (let i = 0; i < sentence.split(" ").length; i++) {
    if (["a", "e", "i", "o", "u"].includes(sentence.split(" ")[i][0].toLowerCase())) {
      let b = sentence.split(" ")[i] + "ma" + "a".repeat(i + 1);
      text += text.length == 0 ? b : " " + b;
    } else {
      let a = sentence.split(" ")[i].slice(1, sentence.split(" ")[i].length) +
      sentence.split(" ")[i][0] +"ma" + "a".repeat(i + 1);
      text += text.length == 0 ? a : " " + a;
    }
  }
  return text;
};

let sentence = "I speak Goat Latin";

toGoatLatin(sentence);
