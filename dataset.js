
//dataset for books
export const books = [
    { id: 1, title: 'Encyclopemedia', price: 299, stock: 10 },
    { id: 2, title: 'Ponniyin Selvan', price: 399, stock: 7 },
    { id: 1, title: 'Encyclopemedia', price: 299, stock: 10},
    { id: 3, title: 'The Boys comics', price: 499, stock: 5 }
];


//dataset for customers
export const customers = [
    { id: 101, name: "Bruce Wayne", isExistingCustomer: true, lastPurchase: null },
    { id: 102, name: "Adolf", isExistingCustomer: false, lastPurchase: null },
    { id: 103, name: "Trump", isExistingCustomer: true, lastPurchase: new Date() },
    { id: 104, name: "Carl Jhonson", isExistingCustomer: false, lastPurchase: new Date() }
];

//removes duplicates using set and converts it into an array to use map
const removeDuplicates = Array.from(new Set(books.map(book => book.id)))

//stores the book objects in the array named uniquebooksarray based on the book ids
const uniqueBooksArray = removeDuplicates.map(id => books.find(book => book.id === id));

//prints the array of unique books
console.log("unique books", uniqueBooksArray);


//filters the books based on the books chosen by the customer
const filterBooks = (bookIds, books) => {
    return bookIds.map(id => books.find(book => book.id === id));
  };
  

// Books chosen by the customer
const bookIds = [1, 3]; 

//stores the chosen books to selectedBooks
export const selectedBooks = filterBooks(bookIds, uniqueBooksArray);

//prints the array of chosen books
console.log("chosen books", selectedBooks);
  


