/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let x = []
    let maxLength = 0
    points.forEach(point => {
        x.push(point[0])
    })
    x = x.sort((a,b) => a - b)
    x.forEach((xx, idx) => {
        if(x[idx + 1] != undefined){
            if(maxLength < x[idx + 1] - x[idx]){
                maxLength = x[idx + 1] - x[idx]
            }
        }
    })
    return maxLength
};


// let points = [[8,7],[9,9],[7,4],[9,7]]
let points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]

maxWidthOfVerticalArea(points)