// How for_in loops works on Objects:

const person = {
    name: 'Ritu',
    age: 25,
    profession: 'Engineer',
    salary: 50000
}

for(const properties in person){
    console.log(properties);
    console.log(person[properties]);
}

/* Output: name
           age
           profession
           salary

           Ritu
           25
           Engineer
           50000
*/