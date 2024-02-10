/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let arr = []
    for(let i = 0; i < pref.length; i++){
        if(arr.length){
            arr[i] = pref[i] ^ pref[i - 1]
        } else {
            arr[0] = pref[0]
        }
    }
    return console.log(arr);
};

let pref = [5,2,0,3,1]
// let pref = [13]

findArray(pref)