from typing import List

class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        nums = list(set(nums))
        nums.sort(reverse=True)
        return nums[2] if len(nums) >= 3 else nums[0]



# nums = [2,2,3,1]
nums = [-1,2,3]

solution = Solution()
solution.thirdMax(nums)

