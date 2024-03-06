class Solution:
    def entityParser(self, text: str) -> str:
        replace_obj = {
            "&quot;": '"',
            "&apos;": "'",
            "&gt;": ">",
            "&lt;": "<",
            "&frasl;": "/",
            "&amp;": "&",
        }
        for key in replace_obj:
            text = text.replace(key, replace_obj[key])
        return text


text = "&amp; is an HTML entity but &ambassador; is not."

solution = Solution()
solution.entityParser(text)