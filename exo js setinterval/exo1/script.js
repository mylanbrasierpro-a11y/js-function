const welcome = document.getElementById('welcome')

function sayHello(){
    welcome.textContent='Bienvenue dans le monde du JavaScript !'
}
setTimeout(sayHello,2000)