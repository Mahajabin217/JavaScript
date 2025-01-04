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
function loadData() {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data=>console.log(data))
        .then(data => displayUser(data))
}

//function displayUser(data) {
//    for(const user of data){
//        console.log(user.name);
//    }
//}

function displayUser(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}