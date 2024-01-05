/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let sentenceObj = {}
    let sentence = ''
    s.split(" ") .forEach(sen => {
        sentenceObj[sen.slice(-1)] = sen.slice(0, -1)
    })
    for(let [key, val] of Object.entries(sentenceObj)){
        sentence += val
        sentence += ' '
    }
    sentence = sentence.slice(0, -1)
    return sentence
};

// let s = "is2 sentence4 This1 a3"
let s = "Myself2 Me1 I4 and3"

sortSentence(s)