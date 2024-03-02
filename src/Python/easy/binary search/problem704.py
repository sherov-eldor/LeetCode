from typing import List
import math

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums) - 1
        while start <= end:
            mid = math.floor((start + end)/2)
            guess = nums[mid]
            if guess == target:
                return mid
            if target > guess:
                start = mid + 1
            else:
                end = mid - 1
        return -1

nums = [-1,0,3,5,9,12]; target = 9

solution = Solution()
solution.search(nums, target)