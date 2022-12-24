const list = document.querySelector("#book-list ul")

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
    
    bookName.textContent = val
    //append to dom 
    li.appendChild(bookName)
    li.appendChild(deleteBtn)

    list.appendChild(li)
})