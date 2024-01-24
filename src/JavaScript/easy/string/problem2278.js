/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */

// Not worked in Leetcode compiler

// var percentageLetter = function (s, letter) {
//     return ((s.match(new RegExp(letter, 'g') || []).length * 100) / s.length).toFixed(0)
// };

var percentageLetter = function (s, letter) {
    let countLetter = 0
    for (let i = 0; i < s.length; i++) {
        if ([...s][i] == letter) {
            countLetter++
        }
    }
    return Math.floor((countLetter * 100) / s.length)
};
