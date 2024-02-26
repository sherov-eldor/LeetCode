from typing import List

class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        count = 0
        for arr in grid:
            for item in arr:
                if item < 0:
                    count += 1
        return count



grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

solution = Solution()
solution.countNegatives(grid)