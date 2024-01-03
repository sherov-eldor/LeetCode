from typing import List

# First solution

class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        wordsFirstLetter = []
        for word in words:
            wordsFirstLetter.append(word[0])
        
        if(str(wordsFirstLetter) == str(list(s))):
            return True
        else:
            return False
        
    
# Second solution

class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        wordsFirstLetter = ''
        for word in words:
            wordsFirstLetter += word[0]
        
        if wordsFirstLetter == s:
            return True
        else:
            return False
        
words = ["alice","bob","charlie"]
s = "abc"


solution = Solution()
solution.isAcronym(words=words, s=s)