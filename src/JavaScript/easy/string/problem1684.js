/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let a = 0
    label : for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].split("").length; j++){
            if(!allowed.includes(words[i][j])){
                a++
                continue label;
            }
        }
    }
    return words.length - a
};

// let allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// let allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// let allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
let allowed = "fstqyienx", words = ["n","eeitfns","eqqqsfs","i","feniqis","lhoa","yqyitei","sqtn","kug","z","neqqis"]

countConsistentStrings(allowed, words)