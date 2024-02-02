/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

// First solution
// not worked in Leetcode

// var arithmeticTriplets = function (nums, diff) {
//   let arr = [];
//   let triplets = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] - nums[i] == diff) {
//         if (triplets.length == 0) {
//           triplets.push(...[nums[i], nums[j]]);
//         } else if (nums[j] - triplets[triplets.length - 1] == diff) {
//           triplets.push(nums[j]);
//           if (triplets.length === 3) {
//             let index = nums.indexOf(triplets[0]);
//             nums = nums.splice(index, nums.length);
//             if (nums.length < 3) {
//               break;
//             }
//             i = 0;
//             j = i + 1;
//             arr.push(...triplets);
//             triplets = [];
//           }
//         }
//       }
//     }
//   }
//   return console.log(arr);
// };


// Second solution *worked
// not my solution

var arithmeticTriplets = function (nums, diff) {
    let counter = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if(nums.includes(nums[i] + diff)){
            if (nums.includes(nums[i] + 2 * diff)) {
                counter++;
            } else {
                continue
            }
        } else {
            continue
        }
    }
    return counter
};


// let nums = [0,1,4,6,7,10], diff = 3
// let nums = [4, 5, 6, 7, 8, 9], diff = 2;
// let nums = [0, 2, 5, 6, 10], diff = 4;
// let nums = [0, 1, 2], diff = 1;
let nums = [6, 14, 15, 26, 31, 36, 38, 41, 42, 45], diff = 5;

arithmeticTriplets(nums, diff);

