
/*function countOccurrences( fruits, value) {
    const fruits = fruits.filter(fruits => fruits.startsWith('P'))
}
console.log(fruits)
*/
const fruits = ["1","2","2","3"]

function countOccurrences(arr,value) {
    return arr.filter(element => element === value).length
}
console.log(countOccurrences(fruits,'1'))