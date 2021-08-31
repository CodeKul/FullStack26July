//traditional function  - function name(){

//}
// (){

// }

//Arrow Function - let add=()=>{

//}

// function greeting(){
//     console.log("Good Evening")
// }
// greeting()

//Function Expression - let add = function(){

//}


//func definition
var greeting=(strgreeting,amt)=>{ //parameters
    console.log(strgreeting)
    console.log(amt)
}

greeting("Good Evening",0)  //func call/invocation
greeting("Good Morning",700)  //arguments

//parameter and arguments


// let addition =(num1,num2)=>{
//     let sum = num1+num2
//     console.log(sum)
// }

let addition =function (a,b){
    let sum = a+b
    return sum
}

let output = addition(900,500)


function printName(){
    let str = "Sucheta"
    return str
}

let myName =printName()
console.log(myName)

