/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    s = s.trim().split(" ")
    return s[s.length - 1].length
};

let s = "   fly me   to   the moon  "

lengthOfLastWord(s)