import math

class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        sum = numBottles
        while numBottles >= numExchange:
            r = numBottles % numExchange
            b = math.floor(numBottles / numExchange)
            sum += b
            numBottles = b + r
        return sum
