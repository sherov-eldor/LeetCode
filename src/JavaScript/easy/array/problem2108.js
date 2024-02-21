/**
 * @param {string[]} words
 * @return {string}
 */

var firstPalindrome = function(words) {
    for(let word of words){
        if(word == word.split("").reverse().join("")){
            return console.log(word);
        }
    }
    return ""
};

let words = ["abc","car","ada","racecar","cool"]

firstPalindrome(words)