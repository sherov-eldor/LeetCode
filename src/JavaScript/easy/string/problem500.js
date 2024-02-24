/**
 * @param {string} s
 * @return {number}
 */

var maxLengthBetweenEqualCharacters = function(s) {
    let max = 0
    let char_idx = {}
    let flag = false
    for(let i = 0; i < s.length; i++){
        if(char_idx?.[s[i]]){
            flag = true
            if(i - (char_idx[s[i]][0] + 1) > max){
                max = i - (char_idx[s[i]][0] + 1)
            } 
        } else {
            char_idx[s[i]] = [i]
        }
    }
    return flag ? max : -1
};

let s = "aa"
// let s = "abca"
// let s = "cbzxy"
// let s = "mgntdygtxrvxjnwksqhxuxtrv"

maxLengthBetweenEqualCharacters(s)