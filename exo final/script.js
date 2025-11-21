const input = document.getElementById('input')
const button = document.getElementById('button')
const enCours = document.getElementById('en-cours')
const completed = document.getElementById('completed')
const message = document.getElementById('message')

function create (){
    let value = input.value
    if  (taskExists(value)){
        message.textContent = 'Deja existant !!'
        return
    }
    const container = document.createElement('div')
    enCours.appendChild(container)
    const btnM = document.createElement('button')
    btnM.textContent='Modifier'
    const taskNameInput = document.createElement('input')
    taskNameInput.value = value
    taskNameInput.readOnly = true
    taskNameInput.style.border = 'none'
    container.appendChild(taskNameInput)
    const btnT = document.createElement('button')
    btnT.textContent='Terminer'
    const btnF = document.createElement('button')
    btnF.textContent='Fermer'

    container.appendChild(btnT)
    container.appendChild(btnM)
    container.appendChild(btnF)
    taskNameInput.classList.add('taskNameInput')
    btnF.classList.add('buttonF')
    btnT.classList.add('buttonT')
    btnM.classList.add('buttonM')
    container.classList.add('container')

    btnF.addEventListener('click', () => {
        container.remove()
    })
    btnM.addEventListener('click', () => modif(taskNameInput, btnM))
    btnT.addEventListener('click', () => end(container, taskNameInput, btnT))

}
function modif(input,) {
    if (input.readOnly) {
        input.readOnly = false
        input.focus()
    } else {
        input.readOnly = true
        input.style.border = "none"
    }
}


function taskExists(value) {
    const allTasks = document.querySelectorAll(".taskNameInput")
    for (let t of allTasks) { 
        if (t.value.toLowerCase() === value.toLowerCase()) return true
    }
    return 
}

function end(container, input, buttonT) {
    completed.appendChild(container)
    buttonT.remove()
}



button.addEventListener('click',create)

/*
function create (){
    let value = input.value   
  const taskNameInput = document.createElement('input')
    if  (taskExists(value)){
        message.textContent = 'Ca existe deja'
        return
    }
    const container = document.createElement('div')
    enCours.appendChild(container)
    const btnM = document.createElement('button')
    btnM.textContent='Modifier'
    taskNameInput.value = value
    taskNameInput.readOnly = true
    taskNameInput.style.border = 'none'
    taskNameInput.classList.add('taskName')
    container.appendChild(taskNameInput)
    container.appendChild(btnT)
    container.appendChild(btnM)
    container.appendChild(btnF)
    const btnT = document.createElement('button')
    btnT.textContent='Terminer'
    const btnF = document.createElement('button')
    btnF.textContent='Fermer'
    btnF.classList.add('buttonF')
    btnT.classList.add('buttonT')
    btnM.classList.add('buttonM')
    container.classList.add('container')
    
}
function taskExists(name) {
    const allTasks = document.querySelectorAll(".taskName").value // on séléctionne toute les tâche qui existe
    for (let t of allTasks) { // pour chaque tasks séléctionné on regarde si le nom de l'input est egal à un nom de tâche existant
        if (t.textContent.toLowerCase() === name.toLowerCase()) return true // si il y en a une, on retourne vrai qui sera utile dans la function addTask
    }
    return
}
button.addEventListener('click',create)
*/