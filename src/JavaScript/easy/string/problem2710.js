/**
 * @param {string} num
 * @return {string}
 */

var removeTrailingZeros = function(num) {
    let j = 0
    for(let i = num.split("").length - 1; i >= 0; i--){
        if(+num.split("")[i] > 0){
            break
        } else {
            j++
        }
    }
    return j > 0 ? num.slice(0, num.split("").length - j) : num
};

// let num = "123"
// let num = "51230100"
let num = "31514216007864075756059111751787923413952537015859352242147727420"

removeTrailingZeros(num)