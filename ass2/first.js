console.log("LetsUpgrade");
var a = {name : "ram",age : "20",place : "UP"};
var b = {name : "seetha",age : "19",place : "UK"};
var c = {name : "lakshman",age : "18",place : "UP"};
console.time('time taken');
console.table({a,b,c});
console.log({a,b,c});
console.error("It is a error message");
console.warn("It is a warning message");
console.log('%c message','color : blue');
console.timeEnd('time taken');