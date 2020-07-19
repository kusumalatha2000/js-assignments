let ask = (question,yes,no) => {
    if(confirm(question)) {
        yes();
    }
    else {   
        no();
    }
}
let y = () => alert("you agreed");
let n = () => alert("you cancealled the execution");
ask("Do you agree?",y,n);
