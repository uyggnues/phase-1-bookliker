document.addEventListener("DOMContentLoaded", function() {
    // deliverable one
    // get book data - DONE
    // get title of books

    fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        data.forEach((bookObj) => {
            console.log(bookObj.title)
        })
    })
    
    console.log("hello");
    console.log("Hi");
});
