class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        flag = False
        max = 0
        char_idx = {}
        for i in range(len(s)):
            if s[i] in char_idx:
                flag = True
                if max < i - (char_idx[s[i]][0] + 1):
                    max = i - (char_idx[s[i]][0] + 1)
            else:
                char_idx[s[i]] = [i]
        return max if flag else -1

s = "abca"

solution = Solution()
solution.maxLengthBetweenEqualCharacters(s)