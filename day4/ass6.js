let value =  prompt("Enter the value");
while(true) {
    if(value >= 100 || value == "" || value == null)
        break;
    else
        value = prompt("Enter the value");
}
console.log(value);   