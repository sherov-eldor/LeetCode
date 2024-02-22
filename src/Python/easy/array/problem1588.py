from typing import List

class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        subArr = []
        for i in range(1, len(arr) + 1, 2):
           for j in range(len(arr)):
               if j + i <= len(arr):
                  subArr.append(sum(arr[j:i + j]))
        return sum(subArr)



arr = [1,4,2,5,3]

solution = Solution()
solution.sumOddLengthSubarrays(arr)