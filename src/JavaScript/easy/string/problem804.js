/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morzeAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let alphabetObj = {}
    alphabetLetters.forEach((letter, idx) => {
        alphabetObj[letter] = morzeAlphabet[idx]
    })
    let incodedWords = []
    words.forEach(word => {
        let incode = ''
        word.split("").forEach(w => {
            incode += alphabetObj[w]
        })
        incodedWords.push(incode)
    })
    let uniqueIncode = new Set(incodedWords)
    return uniqueIncode.size
};

// let words = ["gin","zen","gig","msg"]
let words = ["a"]

uniqueMorseRepresentations(words)