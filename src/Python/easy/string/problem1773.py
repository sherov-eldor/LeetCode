from typing import List

class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        rule = {
            "type" : 0,
            "color" : 1,
            "name" : 2,
        }
        i = 0
        for item in items:
            if item[rule[ruleKey]] == ruleValue:
                i += 1
        return i  
    

items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
ruleKey = "color"
ruleValue = "silver"
    
solution = Solution()
solution.countMatches(items, ruleKey, ruleValue)