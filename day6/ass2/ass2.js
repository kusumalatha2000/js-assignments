var value = prompt("Enter the value");
var i;
for(i = 1;i <= 10;i++) {
    document.getElementById('list').innerHTML += `<li>${value} * ${i} = ${value * i}</li> `
}
