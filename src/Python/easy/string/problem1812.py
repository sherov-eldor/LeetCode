class Solution:
    def squareIsWhite(self, coordinates: str) -> bool:
        letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
        return (letters.index(coordinates[0]) + int(coordinates[1])) % 2 == 0