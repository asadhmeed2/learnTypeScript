
 // when we want the function argument to accept more then one type we use union type
function add(num1:number | string, num2:number | string) {// we can add more types to the argument
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else{
        return num1.toString() + num2.toString();
    }
}

