from typing import List

class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        cities = set()
        for i in range(len(paths)):
            cities.add(paths[i][0])
        for i in range(len(paths)):
            if paths[i][1] not in cities:
                return paths[i][1]

paths = [["B","C"],["D","B"],["C","A"]]

solution = Solution()
solution.destCity(paths)
