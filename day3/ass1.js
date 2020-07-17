let age = Number(prompt("Enter age"));
let value = function(age) {
    if(age % 2 == 0) {
        console.log(`The number entered is ${age} and Number is even`);
    }
    else {
        console.log(`The number entered is ${age} and Number is odd`); 
    }
}
value(age);