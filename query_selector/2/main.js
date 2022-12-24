
let books = document.querySelectorAll("#book-list li .name")
// console.log(books)
let i =0
Array.from(books).forEach((book)=>{
    console.log(book.textContent)
    book.textContent += `  test ${i}`
    i++
})

let booklist = document.querySelector("#book-list")
booklist.innerHTML += "<h1> inner Html <h1>"