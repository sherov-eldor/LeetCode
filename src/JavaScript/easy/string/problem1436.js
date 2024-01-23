/**
 * @param {string[][]} paths
 * @return {string}
 */

// First solution

var destCity = function(paths) {
    let cities = {}
    paths.forEach(path => {
        path.forEach((p,i) => {
            cities?.[p] ? cities[p]["pos"].push(i) : cities[p] = {"pos" : [i]}
        })
    })
    for(let [key, val] of Object.entries(cities)){
        if(val["pos"].length == 1 && val["pos"][0] == 1){
            return key
        }
    }
};


// Second solution
// But not worked in leetcode compiler

var destCity = function(paths) {
    let cities = new Set()
    paths.forEach(path => {
        cities.add(path[0])
    })
    paths.forEach((path, idx) => {
        if(!cities.has(path[1])){
            return console.log(path[1]);
        }
    })
};

let paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// let paths = [["B","C"],["D","B"],["C","A"]]
// let paths = [["A","Z"]]

destCity(paths)