

const BookList = document.querySelector("#book-list")
const AddBook = document.querySelector("#add-book")

console.log("book-list sibling is : ",BookList.nextSibling)
console.log("book-list sibling is : ",BookList.nextElementSibling)

console.log("book-list sibling is : ",BookList.previousSibling)
console.log("book-list sibling is : ",BookList.previousElementSibling)


BookList.previousElementSibling.querySelector("p").innerHTML+="<br/> Too cool for shool "
