class Solution:
    def findDelayedArrivalTime(self, arrivalTime: int, delayedTime: int) -> int:
        time = arrivalTime + delayedTime
        if time >= 24:
            return time - 24 
        else:
            return time

arrivalTime = 15; delayedTime = 5 

solution = Solution()
solution.findDelayedArrivalTime(arrivalTime, delayedTime)