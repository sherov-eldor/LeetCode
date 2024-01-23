class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        goodChars = []
        for i in range(len(s)):
            if i + 3 <= len(s):
                ss = s[i:i + 3]
                if len(set(ss)) == 3:
                    goodChars.append(ss)
        return len(goodChars)




s = "xyzzaz"

solution = Solution()
solution.countGoodSubstrings(s)