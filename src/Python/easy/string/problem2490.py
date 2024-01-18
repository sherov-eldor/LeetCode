class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        if sentence[0] != sentence[-1]:
            return False
        for idx, s in enumerate(sentence):
            if s == " ":
                if sentence[idx - 1] != sentence[idx + 1]:
                    return False
        return True

sentence = "leetcode exercises sound delightful"

solution = Solution()
solution.isCircularSentence(sentence)