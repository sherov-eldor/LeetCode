
class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        j = 0
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) > 0:
                break
            else:
                j += 1
        return num[:len(num) - j] if j > 0 else num


num = "51230100"

solution = Solution()
solution.removeTrailingZeros(num)