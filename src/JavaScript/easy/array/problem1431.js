/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greaterCandy = Math.max(...candies)
    let res = []
    candies.forEach(candy => {
        (extraCandies + candy >= greaterCandy) ? res.push(true) : res.push(false)
    })
    return res
};


// let candies = [2,3,5,1,3], extraCandies = 3
// let candies = [4,2,1,1,2], extraCandies = 1
let candies = [12,1,12], extraCandies = 10

kidsWithCandies(candies, extraCandies)