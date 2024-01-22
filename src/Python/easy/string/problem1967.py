from typing import List

class Solution:
    def numOfStrings(self, patterns: List[str], word: str) -> int:
        i = 0
        for pattern in patterns:
            if pattern in word:
                i += 1
        return i

patterns = ["a","abc","bc","d"]; word = "abc"

solution = Solution()
solution.numOfStrings(patterns, word)