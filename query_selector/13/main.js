document.addEventListener("DOMContentLoaded",()=>{
    
const list = document.querySelector("#book-list ul")
const forms = document.forms

list.addEventListener("click",(e)=>{
    if(e.target.className == "delete"){
        const li = e.target.parentElement
        list.removeChild(li)
    }

})

//add fro
const addForm = document.forms["add-book"]
addForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const val = addForm.querySelector("input[type='text']").value
    //create elements
    const li = document.createElement("li")
    const bookName = document.createElement("span")
    const deleteBtn = document.createElement("span")
    //add content   
    deleteBtn.textContent="delete"
    bookName.textContent=val
    //add classes
    deleteBtn.classList.add("delete")
    bookName.classList.add("name")

    //append to dom 
    li.appendChild(bookName)
    li.appendChild(deleteBtn)

    list.appendChild(li)
})


const hideBox = document.querySelector("#hide")

hideBox.addEventListener("change",(e)=>{

    if(hideBox.checked){
       
        list.style.display = "none"
    }else{
        list.style.display = "block"
    }
})
const serchBar = document.forms["search-books"].querySelector("input")
serchBar.addEventListener("keyup",(e)=>{
    const term = e.target.value.toLowerCase()
    const books = list.getElementsByTagName("li")
    Array.from(books).forEach(element => {
        const title = element.firstElementChild.textContent
        if(title.toLowerCase().indexOf(term)!=-1){
            element.style.display="block"
        }else{
            element.style.display="none"
        }
    });

})

const tabs = document.querySelector(".tabs")

const panels = document.querySelectorAll(".panel")

tabs.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        const targetPanel = document.querySelector(e.target.dataset.target)
        panels.forEach((pan)=>{
            if(pan === targetPanel){

                pan.classList.add("active")
            }else{
                pan.classList.remove("active")
            }
        })
    }
})
})
