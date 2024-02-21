from typing import List

class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            if word == "".join(list(word)[::-1]):
                return word
        return ""


words = ["abc","car","ada","racecar","cool"]

solution = Solution()
solution.firstPalindrome(words)