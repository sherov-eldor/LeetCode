from typing import List

class Solution:
    def prefixCount(self, words: List[str], pref: str) -> int:
        i = 0
        for word in words:
            if word.startswith(pref):
                i += 1
        return i

words = ["pay","attention","practice","attend"]; pref = "at"

solution = Solution()
solution.prefixCount(words, pref)