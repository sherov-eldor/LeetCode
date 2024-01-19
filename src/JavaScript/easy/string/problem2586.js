/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var vowelStrings = function (words, left, right) {
    let vowels = ["a", "e", "i", "o", "u"];
    let i = 0
    for(let j = left; j <= right; j++){
        if(vowels.includes([...words[j]][0]) && vowels.includes([...words[j]][words[j].length - 1])){
            i++
        }
    }
    return i
};

// let words = ["are", "amy", "u"], left = 0, right = 2;
let words = ["vo","j","i","s","i"], left = 0, right = 3;

vowelStrings(words, left, right);
