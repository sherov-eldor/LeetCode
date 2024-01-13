/**
 * @param {number[]} nums
 * @return {number[]}
 */

// First solution

var numberGame = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let j = nums.length;
  let new_arr = [];
  for (let i = 0; i < j; i++) {
    let f = nums[0];
    let s = nums[1];
    new_arr.push(s);
    new_arr.push(f);
    nums = nums.slice(2, nums.length);
    if (nums.length == 0) {
      break;
    }
  }
  return new_arr;
};

// Second solution

var numberGame = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let new_arr = [];
  for (let i = 0; i < nums.length; i += 2) {
    new_arr.push(nums[i + 1]);
    new_arr.push(nums[i]);
  }
  return new_arr;
};

let nums = [5, 4, 2, 3];
// let nums = [2,5]
// let nums = [2,7,9,6,4,6]

numberGame(nums);
