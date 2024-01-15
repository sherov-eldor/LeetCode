

class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        res = None
        for i in range(len(s)):
            s = "".join(s[1:len(s)] + s[0:1]) 
            if s == goal:
                res = True
                break
            else:
                res = False
        return res
    
    
s = "abcde"; goal = "cdeab"

solution = Solution()
solution.rotateString(s, goal)