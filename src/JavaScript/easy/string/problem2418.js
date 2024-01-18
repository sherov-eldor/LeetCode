/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

// Firts solution

// var sortPeople = function (names, heights) {
//   let persons = {};
//   let answer = [];
//   names.forEach((name, idx) => {
//     persons[heights[idx]] = name;
//   });
//   let arr = Object.entries(persons).sort((a, b) => a[0] * 1 - b[0] * 1).reverse();
//   arr.forEach((a) => {
//     answer.push(a[1]);
//   });
//   return answer
// };

// Second solution

var sortPeople = function (names, heights) {
  let persons = names.map((name, idx) => ({ name, height: heights[idx] }));
  persons.sort((a, b) => b.height - a.height);
  let answer = persons.map((person) => person.name);
  return answer;
};

let names = ["Mary", "John", "Emma"],
  heights = [180, 165, 170];
// let names = ["Alice","Bob","Bob"], heights = [155,185,150]

sortPeople(names, heights);
