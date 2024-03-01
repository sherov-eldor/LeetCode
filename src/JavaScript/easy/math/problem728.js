/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let self_dividing_numbers = []
    for(let i = left; i <= right; i++){
        if(i > 9){
            let splitted_nums = i.toString().split("")
            for(let j = 0; j < splitted_nums.length; j++){
                if(i % +splitted_nums[j] == 0){
                } else {
                    break
                }
                if(j == splitted_nums.length - 1){
                    self_dividing_numbers.push(i)
                }
            }
        } else {
            if(i % i == 0){
                self_dividing_numbers.push(i)
            }
        }
    }
    return self_dividing_numbers
};

// let left = 1, right = 22
let left = 47, right = 85

selfDividingNumbers(left, right)