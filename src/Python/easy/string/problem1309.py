class Solution:
    def toGoatLatin(self, sentence: str) -> str:
        text = ''
        for i in range(len(sentence.split(" "))):
            if sentence.split(" ")[i][0].lower() in ["a", "e", "i", "o", "u"]:
                a = sentence.split(" ")[i] + "ma" + "a" * (i + 1)
                text += a if len(text) == 0 else " " + a
            else:
                b = sentence.split(" ")[i][1:len(sentence.split(" ")[i])] + sentence.split(" ")[i][0] +"ma" + "a" * (i + 1)
                text += b if len(text) == 0 else " " + b
        return text


sentence = "I speak Goat Latin"

solution = Solution()
solution.toGoatLatin(sentence)