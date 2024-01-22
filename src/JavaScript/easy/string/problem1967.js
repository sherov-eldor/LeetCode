/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */

var numOfStrings = function(patterns, word) {
    let i = 0
    patterns.forEach(pattern => {
        if(word.includes(pattern)){
            i++
        }
    })
    return i
};


// let patterns = ["a","abc","bc","d"], word = "abc"
let patterns = ["a","b","c"], word = "aaaaabbbbb"

numOfStrings(patterns, word)