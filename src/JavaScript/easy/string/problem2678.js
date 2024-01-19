/**
 * @param {string[]} details
 * @return {number}
 */


var countSeniors = function(details) {
    return details.map(detail => detail.slice(-4,-2) * 1).filter(age => age > 60).length
};


let details = ["7868190130M7522","5303914400F9211","9273338290F4010"]

countSeniors(details)