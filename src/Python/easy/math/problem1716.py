class Solution:
    def totalMoney(self, n: int) -> int:
        sum = 0
        money = 0
        week = 0
        for i in range(1,n + 1):
           money += 1
           sum += money
           if i % 7 == 0:
                week += 1
                money = week
        return sum


n = 10

solution = Solution()
solution.totalMoney(n)