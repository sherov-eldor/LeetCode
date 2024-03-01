from typing import List

class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        self_dividing_numbers = []
        for i in range(left, right + 1):
            if i > 9:
                for j in range(len(list(str(i)))):
                    if int(list(str(i))[j]) == 0:
                        break
                    else:
                        if i % int(list(str(i))[j]) == 0:
                            pass
                        else:
                            break
                        if j == len(list(str(i))) - 1:
                            self_dividing_numbers.append(i)
            else :
                if i % i == 0:
                    self_dividing_numbers.append(i)
        return self_dividing_numbers

left = 1; right = 22

solution = Solution()
solution.selfDividingNumbers(left, right)