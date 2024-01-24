/**
 * @param {string} coordinates
 * @return {boolean}
 */

var squareIsWhite = function (coordinates) {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  return (letters.indexOf(coordinates[0]) + parseInt(coordinates[1])) % 2 == 0 
};

let coordinates = "a1";
// let coordinates = "h3"
// let coordinates = "c7"

squareIsWhite(coordinates);
