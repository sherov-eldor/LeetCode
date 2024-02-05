import math

class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        sum = 0
        for i in range(len(columnTitle)):
            sum += int((ord(columnTitle[i]) - 64) * math.pow(26, len(columnTitle) - i - 1))
        return sum



# columnTitle = "AB"
columnTitle = "ZY"

solution = Solution()
solution.titleToNumber(columnTitle)
