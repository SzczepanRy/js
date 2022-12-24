

var h2 = document.querySelector("#book-list h2")

h2.addEventListener("click",(e)=>{
    console.log(e.target)
    console.log(e)
    //clientx
    //client y position of cursor when clicked
})

let del = document.querySelectorAll("#book-list ul li .delete")



//mine
// del.forEach((el)=>{el.addEventListener("click",(e)=>{
//     let sib = el.previousElementSibling
//     sib.parentNode.parentNode.removeChild(sib.parentNode)
// })})

//example

let btns = document.querySelectorAll("#book-list .delete")

Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const li = e.target.parentElement
        li.parentNode.removeChild(li)
    })
})

let anchor = document.querySelector("#page-banner a")

anchor.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("navigation to ", e.target.textContent, " was prevented")
})