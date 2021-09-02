//push(),pop(),shift(),unshift(),slice(),splice(),length

let arr =["Apple","Mango","Pear","Pineapple"]

console.log(arr.length)

//adds/removes from the end of the array
arr.push("SweetLime","Kiwi","Watermelon")
console.log(arr)

arr.pop()
console.log(arr)

//adds/removes from the beginning of the array
arr.unshift("Chiku","Orange")
console.log(arr)

arr.shift()
console.log(arr)


let skills=["Java","Javascript","Bootstrap","HTML","CSS","React"]
//slice
let arrSlice = skills.slice(2,5)
console.log(arrSlice)
console.log(skills)

//splice
//splice(start num,deletecount)
let arrSplice=skills.splice(2,2,"Node","Express")
console.log(arrSplice)
console.log(skills)



