const date = new Date('2005-09-29')

function isValiDate(dateString){
    let date2 = dateString.split('-')
    dateString = new Date(dateString)
    if (dateString.getFullYear() == date2[0] && dateString.getMonth()+1 == date2[1] && dateString.getDate() == date2[2]){
        return true
    } else {
        return false
    }
}
console.log(isValiDate('2023-02-29'))
