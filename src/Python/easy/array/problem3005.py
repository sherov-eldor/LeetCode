from typing import List

class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        nums_obj = {}
        max = 0
        sum = 0
        for i in range(len(nums)):
            nums_obj[nums[i]] = nums_obj[nums[i]] + 1 if nums[i] in nums_obj else 1
            if max < nums_obj[nums[i]]:
                max = nums_obj[nums[i]]
        for num in nums_obj:
            if nums_obj[num] == max:
                sum += nums_obj[num]
        return sum

nums = [1,2,2,3,1,4]

solution = Solution()
solution.maxFrequencyElements(nums)