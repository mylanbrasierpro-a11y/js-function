const fruits = ["1","2","3"]

function mostFrequent(arr) {
    return arr.filter(element => element === arr).length
}


console.log(mostFrequent(fruits)) 