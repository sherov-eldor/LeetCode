from typing import List
import math

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums_obj = {}
        major = math.floor(len(nums)/2)
        n = 0
        for i in range(len(nums)):
            nums_obj[nums[i]] = nums_obj[nums[i]] = nums_obj[nums[i]] +  1 if nums[i] in nums_obj else 1
            if major <= nums_obj[nums[i]]:
                major = nums_obj[nums[i]]
                n = nums[i]
        return n

nums = [3,2,3]

solution = Solution()
solution.majorityElement(nums)