from typing import List

class Solution:
    def countSeniors(self, details: List[str]) -> int:
        return len(list(filter(lambda x:x > 60, list(map(lambda x: int(x[-4:-2]), details)))))


details = ["7868190130M7522","5303914400F9211","9273338290F4010"]

solution = Solution()
solution.countSeniors(details)