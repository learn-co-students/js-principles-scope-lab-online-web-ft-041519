var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'mary'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'paul'
}