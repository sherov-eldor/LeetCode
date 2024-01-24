class Solution:
    def areOccurrencesEqual(self, s: str) -> bool:
        lettersObj = {}
        lettersSet = set()
        for i in range(len(s)):
            if s[i] in lettersObj:
                lettersObj[s[i]] += 1
            else:
                lettersObj[s[i]] = 1 
        for k in lettersObj:
            lettersSet.add(lettersObj[k])
        return True if len(lettersSet) == 1 else False



s = "abacbc"

solution = Solution()
solution.areOccurrencesEqual(s)
