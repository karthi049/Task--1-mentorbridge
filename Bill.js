

import { selectedBooks, customers } from './dataset.js';


//calculating discount based on the criteria
const calculateDiscount = (price, isExistingCustomer) => {

    if (isExistingCustomer) {

      // calculating 15% offer for the existing customers
      return price > 200 ? price * 0.15 : 0; 

    } 
    else {

        //calculation for the discount based on the price of the book
      if (price >= 100 && price <= 200) 
        return price * 0.02; 
      if (price > 200 && price <= 500) 
        return price * 0.05; 
      if (price > 500 && price <= 750) 
        return price * 0.10; 
      if (price > 750) 
        return price * 0.15; 

      //returns 0 if there is no discount
      return 0; 
    }
  };

  //preparing bill based on the inputs
  const Bill = (books, customer, calculateDiscount) => {

    //initializing the discount and price to 0
    let totalDiscount = 0;
    let totalPrice = 0;
  
    
    const booksPurchased = books.map(book => {

        //assigining the discount value 
      const discount = calculateDiscount(book.price, customer.isExistingCustomer);

      //calculating the final price by subracting the total price with the discount price
      const finalPrice = book.price - discount;
  
      totalDiscount += discount;
      totalPrice += finalPrice;
  
      //body of the bill

      //book details chosen by the customers
      return {
        title: book.title,
        quantity: 1, // Assuming quantity is 1 for each book in the selection
        price: book.price,
        discount,
        finalPrice
      };
    });
  
    //Customer details based on the id
    return {
      customerName: customer.name,
      booksPurchased,
      totalPrice,
      totalDiscount
    };
  };
  
  //ID of the customer
  const customerId = 102;

  //finds the existing of the customer
  const customer = customers.find(c => c.id === customerId);
  
  //returning the bill generated
  const bill = Bill(selectedBooks, customer, calculateDiscount);
  console.log(bill);
  
  