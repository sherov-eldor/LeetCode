/**
 * @param {string} s
 * @return {string[]}
 */

var cellsInRange = function(s) {
    let [col1, col2] = s.split(":")
    let sheets = []
    for(let char = col1[0].charCodeAt(0); char <= col2[0].charCodeAt(0); char++){
        for(let i = parseInt(col1[1]); i <= parseInt(col2[1]); i++){
            sheets.push(String.fromCharCode(char) + i)
        }
    }
    return sheets
};

let s = "K1:L2"
// let s = "A1:F1"

cellsInRange(s)