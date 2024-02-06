from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        for i in range(max(nums) + 1):
            if i not in nums:
                return i
        return max(nums) + 1



nums = [9,6,4,2,3,5,7,0,1]

solution = Solution()
solution.missingNumber(nums)