/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let a = 0
    for(let i = 0; i < words.length; i++){
        for(let j = i + 1; j < words.length; j++){
            if(words[i] == [...words[j][1],words[j][0]].join("")){
                a++
            }
        }
    }
    return a
};


let words = ["cd","ac","dc","ca","zz"]

maximumNumberOfStringPairs(words)