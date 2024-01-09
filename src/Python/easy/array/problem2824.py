from typing import List

class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        pairs = 0
        for i, _ in enumerate(nums):
            for j in range(i + 1,len(nums) + 1):
                if j < len(nums):
                    if nums[i] + nums[j] < target: 
                        pairs += 1
        return pairs
    

# nums = [-1,1,2,3,1]; target = 2
nums = [-6,2,5,-2,-7,-1,3]; target = -2

solution = Solution()
solution.countPairs(nums, target)