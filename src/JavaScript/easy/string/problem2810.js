/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let finalStr = []
    s.split("").forEach(str => {
        str == "i" ? finalStr.reverse() : finalStr.push(str)
    })
    return finalStr.join("")
};

// let s = "string"
let  s = "poiinter"

finalString(s)