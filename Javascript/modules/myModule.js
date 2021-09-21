function displayInputUI(){
    let name = document.createElement('input')
    name.id="inp"
    let button = document.createElement("button")
    button.innerHTML ="Display text"
    document.body.append(name)
    document.body.append(button)

    button.addEventListener('click',()=>{
        let inputValue = document.getElementById('inp').value
        
        let x = document.createElement('h5')
        x.innerHTML=inputValue
        document.body.append(x)


    })

}
export default displayInputUI