/**
 * @param {number[]} mountain
 * @return {number[]}
 */

var findPeaks = function(mountain) {
    let peaks = []
    for (let i = 0; i < mountain.length; i++) {
            if (mountain[i - 1] < mountain[i] && mountain[i] > mountain[i + 1]) {
                peaks.push(i)   
            }
    }
    return peaks
};

let mountain = [2,4,4]
// let mountain = [1,4,3,8,5]

findPeaks(mountain)