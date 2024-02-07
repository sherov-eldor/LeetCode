/**
 * @param {string} s
 * @return {number}
 */


// First solution

var countSegments = function(s) {
    let arr = []
    for(let i = 0; i < s.split(" ").length; i++){
        if(s.split(" ")[i] != ''){
            arr.push(s.split(" ")[i])
        }
    }
    return arr.length
};


// Second solution

var countSegments = function(s) {
    return s.split(" ").filter(char => char != "").length
};



// let s = "Hello, my name is John"
// let s = ""
// let s = "                "
let s = ", , , ,        a, eaefa"

countSegments(s)