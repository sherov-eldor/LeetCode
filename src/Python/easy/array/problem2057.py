from typing import List

class Solution:
    def smallestEqual(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            if i % 10 == nums[i]:
                return i
        return -1

nums = [4,3,2,1]

solution = Solution()
solution.smallestEqual(nums)