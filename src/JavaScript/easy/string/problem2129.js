/**
 * @param {string} title
 * @return {string}
 */

// First solution

var capitalizeTitle = function(title) {
    let word = ''
    for(let i = 0; i < title.split(" ").length; i++){
        if(title.split(" ")[i].length > 2){
            if(i == 0){
                word += capitalizeFirstLetter(title.split(" ")[i])
            } else {
                word += ' ' + capitalizeFirstLetter(title.split(" ")[i])
            }
        } else {
            if(i == 0){
                word += title.split(" ")[i].toLowerCase()
            } else {
                word += ' ' + title.split(" ")[i].toLowerCase()
            }
        }
    }
    return word
};

function capitalizeFirstLetter(str){
    return str.split("").slice(0,1)[0].toUpperCase() + str.split("").slice(1,str.length).join("").toLowerCase()
}

// Second solution

var capitalizeTitle = function(title) {
    return title.toLowerCase().split(" ").map(t => t.length <= 2 ? t : t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()).join(" ")
}

// let title = "capiTalIze tHe titLe"
let title = "First leTTeR of EACH Word"

capitalizeTitle(title)