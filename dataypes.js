// Number,String,Boolean,undefined - Primitive
//Array,object -NonPrimitive

let x = 1002345678901234567.55
console.log(typeof x)

let city = "Mumbai"
//let city = 'Pune'
console.log(typeof city)

let msg = `My city is abc nvrnrorrmkfmrirmneienjrnrnejrnjnrjnrnrjnrj
jdfigjrogkbrjoijrouejkguijgeofier`
  

console.log(msg)

//ES6 - template literals 
let cityMsg = `My city is ${city} and ${x}`
console.log(cityMsg)



//Boolean
let cost= 800
if(cost>500){
    console.log("Costly")
}else{
    console.log("Cheap")
}

let isActive = true
if(isActive){
    console.log("Employee Active")
}else{
    console.log("Employee Inactive")
}

//undefined

var d;
let e;
console.log(e)

//Array - []
//index
let prices = [299.99, 499.99, 199.99, 1999.99]
console.log(prices)
console.log(prices[2])
let seasons=["Winter","Rainy","Summer"]
console.log(seasons[2])

//object -{} key:value pairs

let book={
    bookName:"The Power of your SubConscious Mind",
    author:"Joseph Murphy",
    publication:'abc',
    rating:4.5
}
console.log(book.rating)
//Access property of an object - nameOfObj.key
//Create an employee object - keys -employeeId,fullName,city,isActive
//array of objects -employeeList 
let books=[
    {
        bookName:"The Power of your SubConscious Mind",
        author:"Joseph Murphy",
        publication:'abc',
        rating:4.5
    },
    {
        bookName:"xyz",
        author:"qwe",
        publication:"poi",
        rating:3
    }
]

console.log(books[1].rating)










