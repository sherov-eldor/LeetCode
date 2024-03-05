from typing import List

class Solution:
    def findOcurrences(self, text: str, first: str, second: str) -> List[str]:
        text = text.split()
        third_words = []
        for i in range(len(text)):
            if i + 2 < len(text):
                if text[i] == first and text[i + 1] == second:
                    third_words.append(text[i + 2])
        return third_words


text = "alice is a good girl she is a good student"; first = "a"; second = "good"

solution = Solution()
solution.findOcurrences(text, first, second)