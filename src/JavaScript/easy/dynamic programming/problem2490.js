/**
 * @param {string} sentence
 * @return {boolean}
 */

// Firts solution

// var isCircularSentence = function(sentence) {
//     let c = 0
//     if(sentence.split(" ").length == 1){
//         if(sentence.split("")[0] == sentence.split("")[sentence.length - 1]){
//             return true
//         } else {
//             return false
//         }
//     } else {
//         if(sentence.split("")[0] == sentence.split("")[sentence.split("").length -1]){
//             for(let i = 0; i < sentence.split("").length; i++){
//                 if(sentence[i] == " "){
//                     if(sentence[i - 1] == sentence[i + 1]){
//                         c++
//                         if(c == sentence.split(" ").length - 1){
//                             return true
//                         }
//                     } else {
//                         return false
//                     }
//                 }
//             }
//         } else {
//             return false
//         }
//     }
// };

// Second solution

var isCircularSentence = function(sentence) {
    if(sentence.split("")[0] != sentence.split("").at(-1)) return false
    for(let i = 0; i < sentence.split("").length; i++){
        if(sentence[i] == " "){
            if(sentence[i - 1] != sentence[i + 1]) return false
        }
    }   
    return true
};

let sentence = "leetcode exercises sound delightful"
// let sentence = "eetcode"
// let sentence = "Leetcode is cool"
// let sentence = "a a ba"

isCircularSentence(sentence)