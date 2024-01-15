from typing import List


class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        a = 0
        for i in range(0, len(words)):
            for j in range(i + 1, len(words)):
                if words[i] =="".join([words[j][1],words[j][0]]):
                    a += 1
        return a
    
    
    

words = ["cd","ac","dc","ca","zz"]

solution = Solution()
solution.maximumNumberOfStringPairs(words)