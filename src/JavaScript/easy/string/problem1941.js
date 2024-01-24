/**
 * @param {string} s
 * @return {boolean}
 */

// First solution

var areOccurrencesEqual = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s.match(new RegExp(`${s[i]}`, 'g')).length * new Set([...s]).size != s.length){
            return false
        }
    }
    return true
};



// Second solution

var areOccurrencesEqual = function(s) {
    let objLetters = {}
    let lettersSet  =new Set()
    for(let i = 0; i < s.length; i++){
        objLetters?.[s[i]] ? objLetters[s[i]]++ : objLetters[s[i]] = 1
    }
    for(let k in objLetters){
        lettersSet.add(objLetters[k])
    }
    return lettersSet.size == 1 ? true : false
};


// let s = "abacbc"
let s = "aaabb"
// let s = "vvvvvvvvvvvvvvvvvvv"
// let s = "rmvlshxoylylmnejinoikmdbxqhebkxhxrrmnjhvyptbimlndqqvlessktortxjsenspyjkivqidebojdppbqrhdtvytkop"

areOccurrencesEqual(s)