fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

let obj1 = {
    userId:200,
    title:"Lets upgrade",
    completed :'true',
}

fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body: JSON.stringify(obj1)
}).then(response=>response.json())
.then(json=>console.log(json))



