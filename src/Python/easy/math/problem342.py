import math

class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n <= 0:
            return False
        return (math.log2(n)/2).is_integer()


n = 16
# n = 5
# n = -2147483648
# n = -64
# n = 0

solution = Solution()
solution.isPowerOfFour(n)