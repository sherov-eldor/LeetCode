
# First solution

class Solution:
    def sumBase(self, n: int, k: int) -> int:
        sum = 0
        while True:
            q = n % k
            n = int(n / k)
            if n == 0 and q == 0:
                break
            sum += q
        return sum


# Second solution

class Solution:
    def sumBase(self, n: int, k: int) -> int:
        sum = 0
        while n > 0:
            sum += n % k
            n = n // k
        return sum


n = 34; k = 6

solution = Solution()
solution.sumBase(n, k)