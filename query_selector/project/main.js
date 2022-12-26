const list = document.querySelector(".books")
const lists = document.querySelectorAll(".books")
let getForm = document.querySelector(".get-book")

getForm.addEventListener("keyup",(e)=>{

    const books = list.getElementsByTagName("li")
    console.log(books)
    Array.from(books).forEach((li)=>{

        
        if(!li.textContent.includes(getForm.firstElementChild.value) ){
            li.style.display="none"
        }else{
            li.style.display="block"
        }
        
    })
   
})

let addToForm = document.querySelector(".add-book")

addToForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input = addToForm.firstElementChild.value
    let li = document.createElement("li")
    li.classList.add("book")
    li.textContent=input
    list.appendChild(li)
})