from typing import List

class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        counter = 0
        for i in range(len(nums)):
            if nums[i] + diff in nums:
                if nums[i] + 2 * diff in nums:
                    counter += 1
                else:
                    continue
            else:
                continue
        return counter


nums = [0,1,4,6,7,10]; diff = 3

solution = Solution()
solution.arithmeticTriplets(nums, diff)