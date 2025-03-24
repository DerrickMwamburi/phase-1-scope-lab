// Declare a variable in global scope called customerName using the var keyword
var customerName = 'bob';

// Function that accesses and uppercases the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that declares a global bestCustomer variable
function setBestCustomer() {
  bestCustomer = 'not bob'; // This becomes global because it's not declared with var/let/const
}

// Function that changes the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// Function that attempts to change the constant (which will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw a TypeError
}