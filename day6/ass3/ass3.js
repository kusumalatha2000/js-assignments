const name = prompt("Enter your name");
document.getElementById('user').innerHTML = ` welcome ${name}`;
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }