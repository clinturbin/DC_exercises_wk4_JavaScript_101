//===================================== 
//      JavaScript 101 Exercises
// ===================================


//----------------------------
//    Hello You
//---------------------------

// var hello = function (name) {
//     return 'Hello ' + name + '!' 
// };

// var name = 'Everyone';
// console.log(hello(name));


//----------------------------
//    Hello You Part 2
//---------------------------

var hello = function (name) {
    if (name === '') {
        return "Hello world!";
    } else {
        return "Hello " + name + "!"; 
    }
};

var name = 'people';
console.log(hello(name));