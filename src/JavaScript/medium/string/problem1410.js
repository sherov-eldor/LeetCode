/**
 * @param {string} text
 * @return {string}
 */

var entityParser = function (text) {
  let replace_obj = {
    "&quot;": '"',
    "&apos;": "'",
    "&gt;": ">",
    "&lt;": "<",
    "&frasl;": "/",
    "&amp;": "&",
  };

  for (let key in replace_obj) {
    text = text.replaceAll(key, replace_obj[key]);
  }
  return text;
};

// let text = "&amp; is an HTML entity but &ambassador; is not."
// let text = "and I quote: &quot;...&quot;";
// let text = "&amp;amp;"
let text = "&amp;gt;";

entityParser(text);
