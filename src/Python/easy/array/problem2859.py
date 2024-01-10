from typing import List

class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        binaryList = []
        sum = 0
        for idx, num in enumerate(nums):
            strBin = "{0:b}".format(int(idx))
            binaryList.append(f"{strBin}")
        for idx, binary in enumerate(binaryList):
            if binary.count("1") == k:
                sum += nums[idx]
        return sum
            

# nums = [5,10,1,5,2]; k = 1
nums = [4,3,2,1];  k = 2

solution = Solution()
solution.sumIndicesWithKSetBits(nums, k)