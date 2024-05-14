'use strict'

console.log('sono una calcolatrice non ancora funzionante')


const result = document.getElementById('result')

const numbers = document.querySelector('.numbers')

const operators = document.querySelector('.operators')

const uguale = document.getElementById('uguale')

const canc = document.getElementById('annulla')

let myResult = 0
let myOperator;
let firstNumber;
let secondNumber;



numbers.addEventListener('click', tastiNumeri )

operators.addEventListener('click', tastiOperatori )

uguale.addEventListener('click', function(event){
    event.stopPropagation()

    console.log('ho cliccato su uguale')

    secondNumber = result.innerText

    myResult = result.innerText = calcoli(Number(firstNumber), Number(secondNumber), myOperator)

})

canc.addEventListener('click', function(event){
    event.stopPropagation();
    myResult = result.innerText = 0

    firstNumber = 0
    secondNumber = 0
    myOperator = undefined

    console.log(myOperator)
    console.log(firstNumber)
    console.log(secondNumber)
})


/********
 Funzioni
 */

 function calcoli(num1, num2, op) {

    switch(op){
        
        case '+':
        default:
            console.log('somma')
            return num1 + num2;

        case '-':
            console.log('sottrai')
            return num1 - num2;
        
        case '*':
            console.log('moltiplica')
            return num1 * num2;
        
        case '/':
            console.log('dividi')
            return num1 / num2;
    }
 }

 function tastiNumeri(event) {


    console.log('sono evento numbers / padre')


    const currentElement = event.target



    if(isNaN(parseInt(currentElement.innerText))) return;

   // if(currentElement.innerText === '=') return


    

    if (result.innerText === '0' || myResult !== 0) {

        result.innerText = currentElement.innerText
        myResult = 0

    }  else {
        result.innerText += currentElement.innerText
    }
}


function tastiOperatori(event){


    const currentElement = event.target

    myOperator = currentElement.dataset.operator

    firstNumber = result.innerText

    result.innerText = 0




}

