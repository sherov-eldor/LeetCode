from typing import List

class Solution:
    def maxWidthOfVerticalArea(self, points: List[List[int]]) -> int:
        x = []
        maxLength = 0
        for point in points:
            x.append(point[0])
        x.sort()
        for idx, xx in enumerate(x):
            if idx + 1 < len(x):
                if maxLength < x[idx + 1] - xx:
                    maxLength = x[idx + 1] - xx
        return maxLength
    
    
# points = [[8,7],[9,9],[7,4],[9,7]]
points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]

solution = Solution()
solution.maxWidthOfVerticalArea(points)