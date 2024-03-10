class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(s.rsplit()[-1])


s = "   fly me   to   the moon  "

solution = Solution()
solution.lengthOfLastWord(s)