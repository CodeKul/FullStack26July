function add(...arr){
    let sum =0
    for(let i of arr){
        sum = sum + i
    }
    return sum
}
let greeting="Hello World"

function displayMsg(msg){
    return msg
}

let employee={
    name:"abc",
    city:"pune",
    salary:50000
}

export {add,greeting,displayMsg,employee} //named export