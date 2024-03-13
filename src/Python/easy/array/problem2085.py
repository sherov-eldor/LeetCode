from typing import List

class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        counter = 0
        words1_count = {}
        words2_count = {}
        for word in words1:
            words1_count[word] = words1_count[word] + 1 if word in words1_count else 1  
        for word in words2:
            words2_count[word] = words2_count[word] + 1 if word in words2_count else 1  
        for word in words1_count:
            if words1_count[word] == 1 and word in words2_count and words2_count[word] == 1:
                counter += 1
        return counter


words1 = ["leetcode","is","amazing","as","is"]; words2 = ["amazing","leetcode","is"]

solution = Solution()
solution.countWords(words1, words2)