from typing import List


class Solution:
    def findPeaks(self, mountain: List[int]) -> List[int]:
        peaks = []
        for i in range(len(mountain)):
            if i - 1 >= 0 and i + 1 <= len(mountain) - 1:
                if mountain[i - 1] < mountain[i] and mountain[i] > mountain[i + 1]:
                    peaks.append(i)
        return peaks



# mountain = [2,4,4]
# mountain = [1,4,3,8,5]
mountain = [1,1,3]


solution = Solution()
solution.findPeaks(mountain)