const title =document.querySelector('.title') as HTMLElement;
title.style.color = 'blue';

//ex1 add type to function arguments
// function add(num1:number,num2:number) {
//     return num1 + num2;
// }
// const number1=5; // typescript anderstand that the type of this variable is number
// const number2=6;
// console.log(add(number1,number2));

function add(num1:number,num2:number) {
    return num1 + num2;
}
const number1=5;
const number2=6;
let sum:number;
sum = add(number1,number2);
console.log(sum);



//ex2 object 


