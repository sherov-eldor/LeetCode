/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */

// First solution

// var decode = function(encoded, first) {
//     let arr = new Array(encoded.length + 1)
//     arr[0] = first
//     encoded.forEach((encode, idx) => {
//         arr[idx + 1] = encode ^ arr[idx]
//     })
//     return arr
// };


// Second solution

var decode = function(encoded, first) {
    let arr = [first]
    encoded.forEach((encode, idx) => {
        arr[idx + 1] = encode ^ arr[idx]
    })
    return arr
};


// let encoded = [1,2,3], first = 1
let encoded = [6,2,7,3], first = 4

decode(encoded, first)

