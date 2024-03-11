/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
        counter++;
      } else {
        if (max < counter) {
          max = counter;
        }
        counter = 0;
      }
    }
    if (max < counter) {
      max = counter;
    }
    return max
  };
  
  let nums = [1, 1, 0, 1, 1, 1];
  // let nums = [1,0,1,1,0,1]
  
  findMaxConsecutiveOnes(nums);
  