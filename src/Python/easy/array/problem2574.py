from typing import List

class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        answer = [0] * len(nums)
        for idx, _ in enumerate(nums):
            answer[idx] = abs(sum(nums[0:idx]) - sum(nums[idx + 1:len(nums)]))
        return answer
    
    
nums = [10,4,8,3]
# nums = [1]
    
solution = Solution()
solution.leftRightDifference(nums)