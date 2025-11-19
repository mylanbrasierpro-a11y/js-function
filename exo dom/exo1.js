const message = document.getElementById('message')
const userInput = document.getElementById('userInput')
const button = document.getElementById('button')

button.addEventListener('click',function(){
    if(userInput.value.includes('Bonjour')){
        message.textContent = 'Bonne journée.'
        message.style.color = 'green'
    } else if (userInput.value.includes('Au revoir')){
        message.textContent = 'A la prochaine !!'
        message.style.color = 'yellow'
        } else{
            message.textContent = "Je ne comprend pas."
            message.style.color = 'red'
        }
})
/*
button.addEventListener('click', function(){
    if(firstListItem.classList.contains('text-blue')){
        firstListItem.classList.remove('text-blue')
        firstListItem.classList.add('text-green')
    } else if(firstListItem.classList.contains('text*green')){
        firstListItem.classList.remove('text-green')
        firstListItem.classList.add('text-blue')
    }
})
*/