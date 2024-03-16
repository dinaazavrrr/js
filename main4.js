//1(1)
// let message1 = +prompt("Введіть число 1:");
// let message2 = +prompt("Введіть число 2:");
// let message = (message1 > message2) ? "перше число більше" : (message1 < message2) ? "перше число менше" : "числа рівні";
// console.log('message:', message);

//(2)
let user = prompt("Введіть повідомлення:");
switch (user) {
  case null:
    console.log("Відміна вводу");
    break;
  case "":
    console.log("Ви нічого не написали");
    break;
  default:
    console.log(user);
    break;
}

//(3)
// let number = +prompt("Введіть номер місяця");
// switch (true) {
//     case number === 1 || number === 2 || number===12:       
//       console.log("Зима");
//       break;
//     case number >= 3 && number <= 5 :
//         console.log( "Весна");
//         break;
//     case number >= 6 && number <= 8 : 
//           console.log("Літо");
//           break;
//     case number >= 9 && number <= 11 : 
//          console.log("Осінь");
//          break;      
//     default:
//       console.log('Некоректний номер місяця');
//       break;
//   }

//(4)-FOR
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

//(4)-WHILE
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//(5)-FOR
// let start = +prompt("Введіть початкове число");
// let end = +prompt("Введіть кінцеве число");
// for (let i = start; i <=end ; i++) {
//     if ( i%5 === 0 ){
//          console.log(i);
//     }

//(5)-WHILE
// let start = +prompt("Введіть початкове число");
// let end = +prompt("Введіть кінцеве число");
// let i = start;
// while(i <=end){
//     if ( i%5 === 0 ){
//          console.log(i); 
//     }
//      i++;
// }


//(6)-FOR
// for (let i = 1; i <= 10; i++) {
//     let result = 3 * i;
//     console.log(`3 помножити на ${i} дорівнює ${result}`);
// } 

//(6)-WHILE
// let i = 1;
// while (i <= 10) {
//     let result = 3 * i;
//     console.log(`3 помножити на ${i} дорівнює ${result}`);
//     i++;
// }

//2
// let sum = 0;
// for(let i = 0; i<5; i++){
//     let number = +prompt("Введіть число");
//     sum += number;
// }
// console.log(sum);

//3
// let number = +prompt('Введіть число');
// let i = 1;
// let result = 1;
// while (i <= number){
//     result *= i;
//     i++;
// }
// console.log(result);

//4
// let number = +prompt('Введіть число');
// let i = 1;
// result = " ";
// while(i<=number){
//     result += "*";
//     console.log(result);
//     i++;
// }
