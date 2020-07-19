let op = prompt("select the operation");
if(op == "Addition" || op == '+') {
    let a = Number(prompt("Enter the first value"));
    let b = Number(prompt("Enter the second value"));
    console.log(a+b);
}
if(op == "subtraction" || op == '-') {
    let a = Number(prompt("Enter the first value"));
    let b = Number(prompt("Enter the second value"));
    console.log(a-b);
}
if(op == "Multiplication" || op == '*') {
    let a = Number(prompt("Enter the first value"));
    let b = Number(prompt("Enter the second value"));
    console.log(a*b);
}
if(op == "Division" || op == '/') {
    let a = Number(prompt("Enter the first value"));
    let b = Number(prompt("Enter the second value"));
    console.log(a/b);
}
if(op == "Percentage" || op == '%') {
    let a = Number(prompt("Enter the first value"));
    let b = Number(prompt("Enter the second value"));
    console.log(a%b);
}
if(op == "sqrt") {
    let a = Number(prompt("Enter the value"));
    console.log(Math.sqrt(a));
}