//for,while,do..while,for..in,for...of 
// let arr=[20,30,40,50] =120
//array addition


// i-iterator
//for(initialization;condition;increment/decrement)
for(let i=1;i<=10;i++){
    console.log(i)
}


//while(condition)
let z = 1
while(z<=10){
    console.log(z)
    z++
}


//do..while --- atleast one iteration is executed

let y=1
do{
    console.log(y)
    y++
}while(y<=10)

//for...in  ----object
let course={
    name:"React JS",
    duration:"2 months",
    description:"abcjbfoir"
}

for(c in course){
    console.log(c)
    console.log(course[c])
}


//for..of
let n=10
let seasons = ["rainy","winter","summer","spring"]
console.log("")
for(let x of seasons){
    
    console.log(x)
}

for(let y = 0;y<seasons.length;y++){
    console(seasons[y])
}