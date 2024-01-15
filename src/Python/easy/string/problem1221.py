

class Solution:
    def balancedStringSplit(self, s: str) -> int:
        r = 0
        l = 0
        count = 0
        for idx, char in enumerate(s):
            if char == "R":
                r += 1
            elif char == "L":
                l += 1
            if r == l:
                s = s[idx + 1:]
                count += 1
        return count
  
  
s = "RLRRLLRLRL"
# s = "RLRRRLLRLL"  
# s = "LLLLRRRR"
    
solution = Solution()
solution.balancedStringSplit(s)