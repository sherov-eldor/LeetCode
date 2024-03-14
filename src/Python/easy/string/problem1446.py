class Solution:
    def maxPower(self, s: str) -> int:
        max_num = 1
        counter = 1
        for i in range(len(s) - 1):
            if s[i] == s[i + 1]:
                counter += 1
                if max_num < counter:
                    max_num = counter
            else:
                counter = 1
        return print(max_num)



s = "abbcccddddeeeeedcba"
s = "cc"

solution = Solution()
solution.maxPower(s)