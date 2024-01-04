/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let keyArr = Array.from(new Set(key.split("").filter((k) => k != " ")));
  let keyLettersObj = {};
  alphabetLetters.forEach((letter, idx) => {
    keyLettersObj[keyArr[idx]] = letter;
  });
  let decodedMessage = "";
  message.split("").forEach(msg => {
    decodedMessage += msg != " " ? keyLettersObj[msg] : " "
  });
  return decodedMessage
};

let key = "the quick brown fox jumps over the lazy dog",
  message = "vkbs bs t suepuv";

decodeMessage(key, message);
