from typing import List

class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        persons = list(map(lambda name: {'name': name[1],'height': heights[name[0]]}, enumerate(names)))
        persons.sort(key=lambda x:x['height'], reverse=True)
        answer = list(map(lambda x : x['name'], persons))
        return answer



names = ["Mary","John","Emma"]; heights = [180,165,170]

solution = Solution()
solution.sortPeople(names, heights)