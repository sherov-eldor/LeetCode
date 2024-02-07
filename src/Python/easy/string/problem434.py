class Solution:
    def countSegments(self, s: str) -> int:
        return len(list(filter(lambda char : char != '', s.split(" "))))


s = "Hello, my name is John"

solution = Solution()
solution.countSegments(s)