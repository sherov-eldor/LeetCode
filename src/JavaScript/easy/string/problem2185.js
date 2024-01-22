/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

// First solution

var prefixCount = function(words, pref) {
    let i = 0
    words.forEach(word => {
        if(word.indexOf(pref) == 0){
            i++
        }
    })
    return i
};


// Second solution

var prefixCount = function(words, pref) {
    let i = 0
    words.forEach(word => {
        if(word.startsWith(pref)){
            i++
        }
    })
    return i
};

// let words = ["pay","attention","practice","attend"], pref = "at"
let words = ["leetcode","win","loops","success"], pref = "code"

prefixCount(words, pref)