const date = new Date('2005-09-29')

function afterDate(dateString){
    dateString = new Date(dateString)
    return dateString.getDate()+7
}
console.log(afterDate('2005-09-20'))
