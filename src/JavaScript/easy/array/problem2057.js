/**
 * @param {number[]} nums
 * @return {number}
 */

// First solution

var smallestEqual = function (nums) {
  let flag = false;
  let min = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 == nums[i]) {
      flag = true;
      if (min > i) {
        min = i;
      }
    }
  }
  return flag ? min : -1;
};

// Second solution

var smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 == nums[i]) {
      return 1;
    }
  }
  return -1;
};

// let nums = [0,1,2]
// let nums = [4,3,2,1]
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

smallestEqual(nums);
