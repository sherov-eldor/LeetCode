from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        numsObj = {}
        for num in nums:
            if num in numsObj:
                return True
            else:
                numsObj[num] = 1
        return False
    

nums = [1,2,3,1]


solution = Solution()
solution.containsDuplicate(nums)