from typing import List

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        unique_list = []
        for n in nums1:
            if n in nums2:
                unique_list.append(n)
        return list(set(unique_list))



nums1 = [1,2,2,1]; nums2 = [2,2]

solution = Solution()
solution.intersection(nums1, nums2)