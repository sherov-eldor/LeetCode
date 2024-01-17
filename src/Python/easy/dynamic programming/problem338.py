from typing import List

class Solution:
    def countBits(self, n: int) -> List[int]:
        ans = []
        for i in range(n + 1):
            ans.append(bin(i).replace("0b", "").count("1"))
        return ans


n = 5

solution = Solution()
solution.countBits(n)