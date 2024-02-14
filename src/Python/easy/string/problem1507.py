

class Solution:
    def reformatDate(self, date: str) -> str:
        months = {
            "Jan" : "01",
            "Feb" : "02",
            "Mar" : "03",
            "Apr" : "04",
            "May" : "05",
            "Jun" : "06",
            "Jul" : "07",
            "Aug" : "08",
            "Sep" : "09",
            "Oct" : "10",
            "Nov" : "11",
            "Dec" : "12",
        }
        day = date.split(" ")[0]
        day = day[:2] if len(day) == 4 else f"0{day[:1]}"
        return print(f"{date.split(' ')[2]}-{months[date.split(' ')[1]]}-{day}")
        


date = "20th Oct 2052"
date = "6th Jun 1933"

solution = Solution()
solution.reformatDate(date)