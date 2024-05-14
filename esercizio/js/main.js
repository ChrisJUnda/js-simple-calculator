'use strict'

console.log('sono una calcolatrice non ancora funzionante')


const result = document.getElementById('result')

const numbers = document.querySelector('.numbers')

const operators = document.querySelector('.operators')

let myOperator;
let firstNumber;
let secondNumber



numbers.addEventListener('click', tastiNumeri )

operators.addEventListener('click', tastiOperatori )


/********
 Funzioni
 */

 function tastiNumeri(event) {


    const currentElement = event.target



    if(isNaN(parseInt(currentElement.innerText))) return;

   // if(currentElement.innerText === '=') return


    

    if (result.innerText === '0') {

        result.innerText = currentElement.innerText

    }  else {
        result.innerText += currentElement.innerText
    }
}


function tastiOperatori(event){

    /*
    console.log(event.target)

    console.log('ho cliccato su un operatore')

    console.log(event.target.dataset.operator)
    */

    const currentElement = event.target

    myOperator = currentElement.dataset.operator

    firstNumber = result.innerText

    result.innerText = 0




}

