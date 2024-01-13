import math

class Solution:
    def replaceDigits(self, s: str) -> str:
        new_str = ""
        for i, ss in enumerate(s[::2]):
            new_str += ss
            if 2*i+1 < len(s):
                new_str += chr(ord(ss) + int(s[2*i+1]))
        return new_str
    
    
    

# s = "a1c1e1"
s = "a1b2c3d4e"


solution = Solution
solution.replaceDigits(s)