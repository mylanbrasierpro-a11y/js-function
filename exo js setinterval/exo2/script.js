const countdown = document.getElementById('countdown')

let count = 5 
const interval = setInterval(function (){
    if (count > 0 ){
        countdown.textContent=count
        // count = count -1 
        count--
    } else {
        countdown.textContent='Go'
        clearInterval(interval)
    }
},1000)
