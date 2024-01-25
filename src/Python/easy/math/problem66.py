from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        return [int(d) for d in str((int("".join(str(digit) for digit in digits)) + 1))]


digits = [1,2,3]

solution = Solution()
solution.plusOne(digits)
