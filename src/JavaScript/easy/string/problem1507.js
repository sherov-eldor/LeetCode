/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  let months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  let day = date.split(" ")[0];
  day = parseInt(day) >= 10 ? parseInt(day) : "0" + parseInt(day);
  return `${date.split(" ")[2]}-${months[date.split(" ")[1]]}-${day}`;
};

let date = "20th Oct 2052";
// let date = "6th Jun 1933"

reformatDate(date);
