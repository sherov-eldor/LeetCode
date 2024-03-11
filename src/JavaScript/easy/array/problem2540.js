/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let set = new Set(nums2)
    for (let i = 0; i < nums1.length; i++) {
        if (set.has(nums1[i])) {
            return nums1[i]
        }
    }
    return -1
};

// let nums1 = [1,2,3], nums2 = [2,4]
let nums1 = [1,2,3,6], nums2 = [2,3,4,5]

getCommon(nums1, nums2)