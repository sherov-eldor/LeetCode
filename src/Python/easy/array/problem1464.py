from typing import List


class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        firstMaxNumber = max(nums)
        nums.remove(firstMaxNumber)
        secondMaxNumber = max(nums)
        return (firstMaxNumber - 1) * (secondMaxNumber - 1)


nums = [3,4,5,2]

solution = Solution()
solution.maxProduct(nums)