from typing import List

class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        morzeAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        alphabetObj = {}
        for idx, letter in enumerate(alphabetLetters):
            alphabetObj[letter] = morzeAlphabet[idx]
        incodedWords = []
        for word in words:
            incode = ''
            for w in word:
                incode += alphabetObj[w]
            incodedWords.append(incode)
        return set(incodedWords).__len__()
        

words = ["gin","zen","gig","msg"]
solution = Solution()
solution.uniqueMorseRepresentations(words)