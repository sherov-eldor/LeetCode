from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        numbersObj = {}
        for num in nums:
            if num in numbersObj:
                numbersObj[num] += 1
            else:
                numbersObj[num] = 1
        for k in numbersObj:
            if numbersObj[k] == 1:
                return k


nums = [2,2,1]

solution = Solution()
solution.singleNumber(nums)
