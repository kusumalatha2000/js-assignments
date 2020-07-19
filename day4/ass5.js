let sales = prompt("Enter the sales");
let total = 0;
if(sales >= 0 && sales <= 5000)
    total = ((2/100) * (sales-0));
else if(sales >= 5001 && sales <= 10000)
    total = ((2/100) * 5000) +((5/100) * (sales-5000));
if(sales >= 10001 && sales <= 20000)
    total = ((2/100) * 5000) +((5/100) * 5000) + ((7/100) *(sales-10000));
if(sales >= 20001)
    total = ((2/100) * 5000) +((5/100) * 5000) + ((7/100) * 10000)+((10/100) * (sales-20000));
console.log(total);
