import math

class Solution:
    def percentageLetter(self, s: str, letter: str) -> int:
        countLetter = 0
        for i in range(len(s)):
            if s[i] == letter:
                countLetter += 1
        return math.floor((countLetter * 100) / len(s))


s = "foobar"; letter = "o"

solution = Solution()
solution.percentageLetter(s, letter)
