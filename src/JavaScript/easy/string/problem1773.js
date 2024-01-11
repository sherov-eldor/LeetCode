/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let obj = {
    type: 0,
    color: 1,
    name: 2,
  };
  let i = 0;
  items.forEach((item) => {
    if (item[obj[ruleKey]] == ruleValue) {
      i++;
    }
  });
  return i
};

// let items = [
//     ["phone", "blue", "pixel"],
//     ["computer", "silver", "lenovo"],
//     ["phone", "gold", "iphone"],
//   ],
//   ruleKey = "color",
//   ruleValue = "silver";

let items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "phone"],
    ["phone", "gold", "iphone"],
  ],
  ruleKey = "type",
  ruleValue = "phone";

countMatches(items, ruleKey, ruleValue);
