//Scope of variables
//global // block // function/local

//var - global/local
//let - block
//const - block


//variables declared inside a function are local variables

function displayName(){
    console.log("Inside displayName function")
}

displayName()  //calling a function


var globalVar="I am global"

function accessGlobal(){
    var localVar = "I am local"
    if(true){
        console.log(globalVar)
    }
}
console.log(globalVar)
//console.log(localVar)
accessGlobal()


if(true){
    let lastName="xyz"
    const city="Pune"
    var firstName="sucheta"
}
console.log(firstName)
//console.log(lastName)
//console.log(city)


function scopeVar(){
    

}

if(true){
    let a =100  //block
    var b = 200  //local scoped
    const c =400 //block
}

console.log(c)

