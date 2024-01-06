from typing import List


class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        i = 0
        flag = None
        for idx, word in enumerate(words):
            for w in word:
                if w not in allowed:
                    if flag == idx:
                        continue
                    else:
                        i += 1
                        flag = idx
        return len(words) - i





allowed = "ab" 
words = ["ad","bd","aaab","baa","badab"]


# allowed = "cad"
# words = ["cc","acd","b","ba","bac","bad","ac","d"]

# allowed = "fstqyienx" 
# words = ["n","eeitfns","eqqqsfs","i","feniqis","lhoa","yqyitei","sqtn","kug","z","neqqis"]


solution = Solution()
solution.countConsistentStrings(allowed, words)