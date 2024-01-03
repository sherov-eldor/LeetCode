/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let wordsFirstLetter = []
    words.forEach(word => {
        wordsFirstLetter.push(word[0])
    })
    if(JSON.stringify(s.split('')) == JSON.stringify(wordsFirstLetter)) {
        return true
    } else {
        return false
    }
};

// let words = ["alice","bob","charlie"], s = "abc"
// let words = ["an","apple"], s = "a"
let words = ["never","gonna","give","up","on","you"], s = "ngguoy"

isAcronym(words, s)