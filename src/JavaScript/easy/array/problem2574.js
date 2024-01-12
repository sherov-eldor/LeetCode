/**
 * @param {number[]} nums
 * @return {number[]}
 */

var leftRightDifference = function (nums) {
  let answer = [];
  let leftSum = [];
  let rightSum = [];
  for (let i = 0; i < nums.length; i++) {
    leftSum.push(
      nums.slice(0, i).reduce((acc, item) => {
        return acc + item;
      }, 0)
    );
    rightSum.push(
      nums.slice(i + 1, nums.length).reduce((acc, item) => {
        return acc + item;
      }, 0)
    );
    answer[i] = Math.abs(leftSum[i] - rightSum[i]);
  }
  return answer
};

// let nums = [10, 4, 8, 3];
let nums = [1]

leftRightDifference(nums);
