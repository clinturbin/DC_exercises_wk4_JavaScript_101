//===================================== 
//      JavaScript 101 Exercises
// ===================================

//----------------------------
//    Tip Calculator
//---------------------------

var tipAmount = function (bill, service) {
    if (service === 'good') {
        return bill * .2;
    } else if (service === 'fair') {
        return bill * .15;
    } else {
        return bill * .1;
    } 
};

//----------------------------
//    Tip Calculator 2
//---------------------------

var totalAmount = function (bill, service) {
    return bill + tipAmount(bill, service);
};

//----------------------------
//    Tip Calculator 3
//---------------------------

var splitAmount = function (bill, service, people) {
    return totalAmount(bill, service) / people;
};

console.log(splitAmount(40, 'fair', 2));