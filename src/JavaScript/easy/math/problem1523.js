/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// First solution

var countOdds = function(low, high) {
    let counter = 0
    for(let i = low; i <= high; i++){
        if(i % 2 == 1){
            counter++
        }
    }
    return counter
};

// Second solution

var countOdds = function(low, high) {
    let counter = 0
    while(low <= high){
        if(low % 2 == 1){
            counter++
        }
        low++
    }
    return counter
};

let low = 3, high = 7

countOdds(low, high)