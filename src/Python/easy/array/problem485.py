from typing import List

class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        counter = 0
        max_consecutive = 0
        for i in range(len(nums)):
            counter = counter = counter + 1 if nums[i] == 1 else 0
            max_consecutive = max([counter, max_consecutive])
        return max_consecutive


# nums = [1,1,0,1,1,1]
nums = [1,0,1,1,0,1]

solution = Solution()
solution.findMaxConsecutiveOnes(nums)
