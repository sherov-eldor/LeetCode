import math

class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        return math.sqrt(num).is_integer()


num = 16
num = 14

solution = Solution()
solution.isPerfectSquare(num)