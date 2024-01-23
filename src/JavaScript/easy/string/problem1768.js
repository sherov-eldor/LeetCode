/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let maxLength = word1.length > word2.length ? word1.length : word2.length
    let res = ''
    for(let i = 0; i < maxLength; i++){
        res += word1.split("")[i] ? word1.split("")[i] : ''
        res += word2.split("")[i] ? word2.split("")[i] : ''
    }
    return res
};

// let word1 = "abc", word2 = "pqr"
let word1 = "ab", word2 = "pqrs"


mergeAlternately(word1, word2)