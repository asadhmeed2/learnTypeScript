var person = {
    name: 'John',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin'); // this is acceptable 
console.log(person);
// person.role[1] = 10;//error 
// console.log(person.nickname); compailetion error nickname is not in object person
