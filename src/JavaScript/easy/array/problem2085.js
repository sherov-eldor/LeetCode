/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

var countWords = function(words1, words2) {
    let counter = 0
    let words1_count = {}
    let words2_count = {}
    for(let word of words1){
        words1_count?.[word] ? words1_count[word]++ : words1_count[word] = 1
    }
    for(let word of words2){
        words2_count?.[word] ? words2_count[word]++ : words2_count[word] = 1
    }
    for(let word in words1_count){
        if(words1_count[word] == 1 && words2_count?.[word] && words2_count[word] == 1){
            counter++
        }
    }
    return counter
};

let words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]

countWords(words1, words2)