from typing import List

# First solution

class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        ans = [0] * len(nums)
        for idx, num in enumerate(nums):
            ans[idx] = nums[num]
        return ans
        
        
# Second solution

class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        ans = []
        for num in nums:
            ans.append(nums[num])
        return ans

    
    
nums = [0,2,1,5,3,4]
nums = [5,0,1,2,3,4]

solution = Solution()
solution.buildArray(nums)