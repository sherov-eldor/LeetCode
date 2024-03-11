from typing import List

class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        nums_set = set(nums2)
        print(nums_set)
        for num in nums1:
            if num in nums_set:
                return num
        return -1


nums1 = [1,2,3,6]; nums2 = [2,3,4,5]

solution = Solution()
solution.getCommon(nums1, nums2)
