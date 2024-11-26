
//dataset for books
export const booksList = [
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



const uniqueSet =new Set();

const uniqueBooksList = [];

const chosenBooks = [1,3];

const customerId = 101;

function removeDupliactes(){
for(const book of booksList){
   if(!uniqueSet.has(book.id)){
          uniqueSet.add(book.id);
          uniqueBooksList.push(book);
   }
}
  return uniqueBooksList;

};

function filterCustomerChosenBooks(uniqueBooks){
    return uniqueBooks.filter(book => chosenBooks.includes(book.id));
}

function calculateDiscount(chosenBooks){

    const currentCustomer = customers.find(customer => customer.id === customerId)
    console.log(currentCustomer);


    // let existingCustomer = false;
   
    // if(currentCustomer){
    //     existingCustomer = true;
    //     console.log("customer is available");
    // }

    const isExistingCustomer = currentCustomer ? true : false;
    console.log(isExistingCustomer);

    let totalDiscount = 0;
    let totalPrice = 0;
    let priceBeforeDiscount =0;

    for(let book of chosenBooks){
        priceBeforeDiscount += book.price;
    }
    console.log("Price of books before Discount :" ,priceBeforeDiscount);

     for(let book of chosenBooks){
        if(isExistingCustomer){
            if(book.price > 200){
              book.discount = book.price * 15/100;         
            }  
        }else{
            switch(book.price){
                case 1:
                    ( book.price>=100 && book.price<=200)
                        book.discount = book.price * 2/100;         
                    break;

                    case 2:
                        ( book.price > 200 && book.price <= 500)
                            book.discount = book.price * 5/100;         
                    break;

                        case 3:
                            ( book.price > 500 && book.price <= 750)
                                book.discount = book.price * 10/100; 
                                break;        
                            
                            case 4:
                                ( book.price > 750)
                                    book.discount = book.price * 5/100; 
                                break;        
                                
                            default:
                                book.discount =0;
                                break;
            }
        }
        totalDiscount += book.discount;
        totalPrice += book.price - book.discount;
     }
console.log("Discount Applied :" ,totalDiscount);
console.log("Price of books after discount :",totalPrice);
}

function generateBill(){
    const uniqueBooksList = removeDupliactes();
    console.log("Unique Books :")
    console.log(uniqueBooksList);
    const customerChosenBooks = filterCustomerChosenBooks(uniqueBooksList);
    console.log("Chosen Books :")
    console.log(customerChosenBooks);
    calculateDiscount(customerChosenBooks);
}

generateBill();



  


