class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        if len(str(num)) > 1 and int(list(str(num))[-1]) == 0:
            return False
        return True


num = 1800

solution = Solution()
solution.isSameAfterReversals(num)
