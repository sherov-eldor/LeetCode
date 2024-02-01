from typing import List

class Solution:
    def cellsInRange(self, s: str) -> List[str]:
        col1, col2 = s.split(":")
        sheets = []
        for char in range(ord(col1[0]), ord(col2[0]) + 1):
            for i in range(int(col1[1]), int(col2[1]) + 1):
                sheets.append(chr(char) + str(i))
        return sheets


s = "K1:L2"

solution = Solution()
solution.cellsInRange(s)