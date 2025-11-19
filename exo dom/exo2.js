const message = document.getElementById('message')
const userInput = document.getElementById('userInput')
const userInput2 = document.getElementById('userInput2')
const button = document.getElementById('button')

button.addEventListener('click',function(){
    const value1 = parseInt(userInput.value)
    const value2 = parseInt(userInput2.value)
    const result = value1 + value2
    message.textContent = ' La reponse est '+ result

    console.log(result)
})