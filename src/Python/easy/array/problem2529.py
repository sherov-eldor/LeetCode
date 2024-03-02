from typing import List

class Solution:
    def maximumCount(self, nums: List[int]) -> int:
       pos = 0
       neg = 0
       for num in nums:
           if num > 0:
               pos += 1
           elif num < 0:
               neg += 1
       return pos if pos > neg else neg 
        
nums = [-2,-1,-1,1,2,3]

solution = Solution()
solution.maximumCount(nums)