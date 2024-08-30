//capturo elemento HTML
const container = document.querySelector(".container");
//agrego evento de mouseover
container.addEventListener("mouseover",()=>{
    container.style.backgroundColor="blue"
})
//agrego evento de mouseout
container.addEventListener("mouseout",()=>{
    container.style.backgroundColor="red"
})

//capturo elemento HTML
const button = document.querySelector("button");
//agrego evento de clcik
button.addEventListener("click", (event)=>{
alert('Button CLicked!')
console.log(event.target)
console.log(event.target.textContent)
event.target.textContent="Oh clicked!"
})

//creo callback del evento mouseover button
const buttonOverListener = ()=>{
    alert('Mouse Over Button!')
}
//agrego evento de mouseover button
button.addEventListener("mouseover", buttonOverListener)

//retiro el evento de mouseover button
setTimeout(()=>{
    button.removeEventListener("mouseover",buttonOverListener)
},5000)