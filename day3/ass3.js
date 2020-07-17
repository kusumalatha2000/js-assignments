let marks = Number(prompt("Enter marks"));
//console.log("Conditional Statements");
if(marks >= 60 && marks < 70){
    console.log(`Marks are ${marks} and grade is A`);
}
else if(marks >= 50 && marks < 60) {
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks >= 40 && marks < 50) {
    console.log(`Marks are ${marks} and grade is C`);
}
else {
    console.log(`Marks are ${marks} and grade is D`);
}
/*console.log("using switch statement");
let m = parseInt(marks/10);
switch(m) {
    case 6 : console.log(`marks are ${marks} and grade is A`);
            break;
    case 5 : console.log(`marks are ${marks} and grade is B`);
            break;
    case 4 : console.log(`marks are ${marks} and grade is C`);
            break;
    default : console.log(`marks are ${marks} and grade is D`);
            break;        
}*/