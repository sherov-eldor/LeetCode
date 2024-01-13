from typing import List

class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        nums.sort()
        new_arr = []
        for idx in range(0, len(nums), 2):
            new_arr.append(nums[idx + 1])
            new_arr.append(nums[idx])
        return new_arr


# nums = [5,4,2,3]
nums = [2,5]


solution = Solution()
solution.numberGame(nums)