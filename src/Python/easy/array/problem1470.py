from typing import List

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        x = nums[0:n]
        y = nums[n:len(nums)]
        arr = []
        for idx, a in enumerate(x):
            arr.extend([a, y[idx]])
        return arr



nums = [2,5,1,3,4,7]
n = 3

solution = Solution()
solution.shuffle(nums, n)