// Way-1:
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
*/

// Way-2:
const url = 'https://jsonplaceholder.typicode.com/todos/1';
//fetch(url)
    //.then(response => response.json())
    //.then(json => console.log(json))


// Way-3:
function loadData(){
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}