/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function (grid) {
    let counter = 0
    for (let item of grid) {
        for (let i = 0; i < item.length; i++) {
            if (0 > item[i]) {
                counter++
            }
        }
    }
    return counter
};

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

countNegatives(grid)