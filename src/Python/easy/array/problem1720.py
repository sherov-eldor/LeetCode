from typing import List

class Solution:
    def decode(self, encoded: List[int], first: int) -> List[int]:
        arr = [first] * (len(encoded) + 1)
        for idx, encode in enumerate(encoded):
            arr[idx + 1] = encode ^ arr[idx]
        return arr



# encoded = [1,2,3]; first = 1
encoded = [6,2,7,3]; first = 4


solution = Solution()
solution.decode(encoded, first)