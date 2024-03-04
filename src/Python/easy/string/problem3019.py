class Solution:
    def countKeyChanges(self, s: str) -> int:
        s = s.lower()
        counter = 0
        for i in range(len(s)):
            if i + 1 < len(s):
                if s[i] != s[i + 1]:
                    counter += 1
        return counter 

s = "aAbBcC"

solution = Solution()
solution.countKeyChanges(s)