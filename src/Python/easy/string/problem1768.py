class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        maxLength = max([len(word1), len(word2)])
        res = ''
        for i in range(maxLength):
            res += word1[i] if i < len(word1) else '' 
            res += word2[i] if i < len(word2) else '' 
        return res


word1 = "ab";  word2 = "pqrs"


solution = Solution()
solution.mergeAlternately(word1, word2)