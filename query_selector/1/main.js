// const wrap = document.querySelector("#wrapper")


// const wmf = document.querySelector("#book-list li:nth-child(2)")
// console.log(wmf)


const wmf = document.querySelector("#book-list li:nth-child(2)")

let books = document.querySelectorAll("#book-list li .name")
// console.log(books)
Array.from(books).forEach((book)=>{
    console.log(book)
})
