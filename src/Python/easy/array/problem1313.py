from typing import List

class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        answer = []
        for i in range(0,len(nums), 2):
            arr = [nums[i], nums[i + 1]]
            for k in range(0, arr[0]):
                answer.append(arr[1])
        return answer



nums = [1,2,3,4]

solution = Solution()
solution.decompressRLElist(nums)