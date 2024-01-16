
# First solution

class Solution:
    def pivotInteger(self, n: int) -> int:
        a = 0
        b = 0
        res = 0
        for i in range(n, 0, -1):
           a += i
           b = 0
           for j in range(1, i + 1):
               b += j
           if a == b:
               res = i
               break
        return res if res != 0 else -1

               
# Second solution

class Solution:
    def pivotInteger(self, n: int) -> int:
        a = sum(list(range(n + 1)))
        b = 0
        for i in range(n, 0, -1):
            a -= i
            if a == b:
                return i
            b += i
        return -1

n = 8
n = 4

solution = Solution()
solution.pivotInteger(n)