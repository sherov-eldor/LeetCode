from typing import List

class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        greaterCandy = max(candies)
        res = []
        for candy in candies:
            if candy + extraCandies >= greaterCandy:
                res.append(True)
            else:
                res.append(False)
        return res

candies = [2,3,5,1,3]; extraCandies = 3

solution = Solution()
solution.kidsWithCandies(candies, extraCandies)