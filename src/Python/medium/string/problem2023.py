from typing import List

class Solution:
    def numOfPairs(self, nums: List[str], target: str) -> int:
        count = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                print(nums[i], nums[j])
                if nums[i] + nums[j] == target:
                    count += 1
                if nums[j] + nums[i] == target:
                    count += 1
        return print(count)


nums = ["777","7","77","77"]; target = "7777"

solution = Solution()
solution.numOfPairs(nums, target)