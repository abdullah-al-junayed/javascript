// objects
const person = {
    name: 'Junayed',
    age: 18,
    profession: 'web developer'
}
console.log(person)


// specifice property
console.log(person.name)


// replace existing values
person.age = 20;
console.log(person)


// adding new values
person.bike = 'kawasaki';
console.log(person)


// deleting values
delete person.bike
console.log(person)


// is there any value exist?
console.log (person.car in person)
