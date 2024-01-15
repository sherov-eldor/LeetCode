/**
 * @param {string} s
 * @return {number}
 */

var balancedStringSplit = function(s) {
    let r = 0
    let l = 0
    let count = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] == "R"){
            r++
        } else if(s[i] == "L"){
            l++
        }
        if(r == l){
            count++
            s = s.slice(s[i] + 1, s.length)
        }
    }
    return count
};


// let s = "RLRRLLRLRL"
// let s = "RLRRRLLRLL"
let s = "LLLLRRRR"

balancedStringSplit(s)