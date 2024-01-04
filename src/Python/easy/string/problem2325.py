class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        keyList = list(dict.fromkeys(key.replace(' ', '')))
        lettersObj = {}
        decodedMessage = ''
        for idx, k in enumerate(keyList):
            lettersObj[k] = alphabetLetters[idx] 
        for m in message:
            if m == ' ':
                decodedMessage += ' '
            else:
                decodedMessage += lettersObj[m]
        return decodedMessage
                


key = "the quick brown fox jumps over the lazy dog"
message = "vkbs bs t suepuv"

solution = Solution()
solution.decodeMessage(key, message)