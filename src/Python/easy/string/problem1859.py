# First solution

class Solution:
    def sortSentence(self, s: str) -> str:
        sentenceObj = {}
        sentence = ''
        for ss in s.split(" "):
            sentenceObj[ss[-1]] = ss[0:-1]
        for i in range(1, len(sentenceObj) + 1):
            sentence += sentenceObj[str(i)]
            sentence += ' '
        sentence = sentence[0:-1]
        return sentence
   

# Second solution

# class Solution:
#     def sortSentence(self, s: str) -> str:
#         sentence = ''
#         for idx, _ in enumerate(s.split(" ")):
#             for ss in s.split(" "):
#                 if idx + 1 == int(ss[-1]):
#                     sentence += ss[0: -1]
#                     sentence += ' '
#         sentence = sentence[0:-1]
#         return sentence
   
   
# Third solution

# class Solution:
#     def sortSentence(self, s: str) -> str:
#         slices = s.split(" ")
#         new_str = [''] * len(slices)
#         for slice in slices:
#             new_str[int(slice[-1])-1] = slice[0:-1]
#         return " ".join(new_str)

# s = "is2 sentence4 This1 a3"   
s = "Myself2 Me1 I4 and3"
 
solution = Solution()
solution.sortSentence(s)