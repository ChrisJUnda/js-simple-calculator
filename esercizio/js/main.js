'use strict'

console.log('sono una calcolatrice non ancora funzionante')


const result = document.getElementById('result')

const numbers = document.querySelector('.numbers')

console.log(result.innerText)

numbers.addEventListener('click', function(event){
    console.log(event)

    const currentElement = event.target

    console.log(currentElement)
    console.log(currentElement.innerText)

    if(isNaN(parseInt(currentElement.innerText))) return

   // if(currentElement.innerText === '=') return

    console.log('adesso sono un numero')

    console.log('ho cliccato su un tasto')

    

    if (result.innerText === '0') {

        result.innerText = currentElement.innerText

    }  else {
        result.innerText += currentElement.innerText
    }
}

)