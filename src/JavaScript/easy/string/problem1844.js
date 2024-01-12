/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let answer = []
    let a = 0
    s.split("").forEach(ss => {
        if(isNaN(Number(ss))){
            alphabetLetters.forEach((letter,i) => {
                if(letter == ss){
                    answer.push(ss)
                    a = i
                }
            })
        } else {
            answer.push(alphabetLetters[a + Number(ss)])
            a = 0
        }
        
    })
    return answer.join("")
};

let s = "a1c1e1"
// let s = "a1b2c3d4e"

replaceDigits(s)