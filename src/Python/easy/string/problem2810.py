class Solution:
    def finalString(self, s: str) -> str:
        finalStr = []
        for str in s:
           finalStr.reverse() if str == "i" else finalStr.append(str)
        return "".join(finalStr)


s = "string"

solution = Solution()
solution.finalString(s)