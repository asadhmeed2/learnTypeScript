const person :{
    name:string;
    age:number;
    hobbies:string[];
    role: [number, string]// tuple new type thats is not in javascript a fixed length and type array
}={
    name: 'John',
    age: 34,
    hobbies:['Sports','Cooking'],
    role:[2,'author']
};


// console.log(person.nickname); compailetion error nickname is not in object person

