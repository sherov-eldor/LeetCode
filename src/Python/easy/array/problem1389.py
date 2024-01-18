from typing import List

class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
        target = []
        for idx, num in enumerate(nums):
            target.insert(index[idx], num)
        return target

nums = [0,1,2,3,4]; index = [0,1,2,2,1]

solution = Solution()
solution.createTargetArray(nums, index)