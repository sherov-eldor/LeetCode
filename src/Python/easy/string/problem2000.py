class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        index = word.find(ch)
        str = [char for char in word[0 : index + 1]]
        str.reverse()
        return ("").join(str) + word[index + 1 : len(word)]
