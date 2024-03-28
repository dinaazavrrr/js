//1
// function sum(num1, num2){
//     return num1 + num2;
// }
// let result = sum(7,2);
// console.log(result);

// function multBy5(num){
//     let result = 5*num;
//    console.log(`5 * ${num} = ${result}`);
// }
// multBy5(7);



// function max(num1, num2){
//        return (num1>num2) ? `${num1}` : `${num2}`
// }
// console.log(max(7,6));

// 2
// function pow(x=5,n=4){
//     let result =1;
//    for (let i = 0; i<n; i++){
//     result*=x;
//    }
//    return result;
// }
// console.log(pow(3,3));


//3
// function sumOrConcatination(value1=15, value2=15){
//     if (value1 === "undefined" && value2 === "undefined"){
//         console.log("Результат суми 30");
//     }
//     if (value1 === "string" && value2 === "string"){
//         console.log(`Результат конкатенації: ${value1} ${value2}`);
//     }
//     if (value1 === "number" && value2 === "number"){
//         let result = value1 + value2;
//         console.log(`Результат суми: ${result}`);
//     }
// }
// console.log("Некоректні аргументи");

// sumOrConcatination (7, "100 балів!");
// sumOrConcatination (7,5);
// sumOrConcatination ("Привіт", "Андрій");

// function sumOrConcatination(value1=15, value2=15){
//     for(let i = 0; i<=2; i++){
//     let sum = value1+value2;
//     let result = (value1 === "string" || value2==="string")? `Результат конкатенації: ${value1} ${value2}`:`Результат суми:${sum}`;
//     return result;
//     }
// }
// console.log(sumOrConcatination (7,8));
// console.log(sumOrConcatination ());


//4
// function fib(n){
//     if(n==1|| n==2){
//         return 1;
//     }
//     let last = 0;
//     let now = 1;
//     let result = 0;

//     for(let i = 1; i<n; i++){
//         result = last + now;
//         last = now;
//         now = result;
//     }
//     return result;
// }
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(9));
