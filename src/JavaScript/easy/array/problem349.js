/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    let unique_list = []
    nums1.forEach(num => {
        if(nums2.includes(num)){
            unique_list.push(num)
        }
    });
    return Array.from(new Set(unique_list))
};


// let nums1 = [1,2,2,1], nums2 = [2,2]
let nums1 = [4,9,5], nums2 = [9,4,9,8,4]

intersection(nums1, nums2)