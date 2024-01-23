class Solution:
    def repeatedCharacter(self, s: str) -> str:
        letters = set()
        for i in range(len(s)):
            if s[i] in letters:
                return s[i]
            else:
                letters.add(s[i])


s = "nwcn"

solution = Solution()
solution.repeatedCharacter(s)