from typing import List

class Solution:
    def findArray(self, pref: List[int]) -> List[int]:
        arr = [0] * len(pref)
        for i in range(len(pref)):
            if i == 0:
                arr[0] = pref[0]
            else:
                arr[i] = pref[i - 1] ^ pref[i]
        return arr


# pref = [5,2,0,3,1]
pref = [13]

solution = Solution()
solution.findArray(pref)