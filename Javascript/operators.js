// Arithmetic,Relational,Ternary,Increment-Decrement,Logical
let x = 100
let y=200
//+,-,/,*,%,**
console.log(2 ** 5)

console.log(x+y-50*(x-y))
let remainder = y%x
let quotient = y/x

console.log(remainder)
console.log(quotient)

//>,<,=,>=,<=,==,===,!=,!==

let age = 18


if(age>=18){
    console.log('Adult')
}else{
    console.log('Child')
}
//= assigment
//== equality !=
//=== strict equality !==

if(age === '18'){
    console.log("Age is 18")
}else{
    console.log('Not 18')
}

//&& || !

let firstName="ABC"
let lastName="PQR"

if(firstName === 'ABC' && lastName=== 'XYZ'){
    console.log("Correct person")
}else{
    console.log("Different")
}

let isPresent=false
// if(isPresent){
//     console.log("Present")
// }else{
//     console.log('Not Present')
// }
// !true  =false
// !false = true
if(!isPresent){
    console.log("Not Present")
}

//++,--
let number = 10
console.log(number++) //PostIncrement
console.log(number--)
console.log(number)

console.log(++number) //Pre Increment
console.log(--number)


let price =-5
if(price > 0){
    console.log("Positive")
}else if(price < 0){
    console.log('Negative')

}else{
    console.log('Zero')
}

//? : 

if(isPresent){
    console.log("I am present")
}else{
    console.log('I am not present')
}


number>50  ? console.log("I am present") :console.log("I am not present")

