let arr = [];
while(true) {
    let value = prompt("Enter the value");
    if(value == null)
        break;
    else
        arr.push(value);
}
console.log(arr);
let odd = arr.filter((el)=> el%2 != 0).map((el)=> el**3);
console.log(odd);