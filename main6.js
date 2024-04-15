//1.1
// function capitalize(str){
//     let result = str.toLowerCase();
//     result = str.charAt(0).toUpperCase() + result.slice(1);
//     return result;
// }
// console.log(capitalize("ПриВіТ"));
// console.log(capitalize("яК СПРавИ?"));

//1.2
// function reverseString(str){
//     let result = "";
//     for(let i = str.at(-1); i=>0; i--){
//         result += i;
//     }
//     return result;
// }
// console.log(reverseString("Привіт"));    
// console.log(reverseString("Як справи?"));  

//1.3
// function convertToBinary(num){
//     let result = num.toString(2);
//     return result;
// }
// console.log(convertToBinary(5));
// console.log(convertToBinary(15));

//1.4
// function generateFloat(n){
//     let randomN = Math.random()*100;
//     result = randomN.toFixed(n);
//     return result;
// }
// console.log(generateFloat(2));
// console.log(generateFloat(1));
// console.log(generateFloat(4));

//2
// function isPalindrome(str) {
//     str = str.toLowerCase();
//     let i = 0;
//     let j = str.length - 1;
    
//     while (i < j) {
//         if (str[i] === str[j]) {
//             return true;
//         }
//         i++;
//         j--;
//     }
//     return false;
// }
// console.log(isPalindrome("око")); 
// console.log(isPalindrome("дід")); 
// console.log(isPalindrome("Діана"));

//3
// function sumOfNumbers(number) {
//     let result = 0;
//     while (number > 0) {
//         result += number % 10;
//         number = Math.floor(number / 10);
//     }
    
//     return result;
// }

// console.log(sumOfNumbers(12)); 
// console.log(sumOfNumbers(777));   
// console.log(sumOfNumbers(123456789));

//4
// function generateNumberInLimit(start, end) {
//     return Math.floor(Math.random() * (end - start + 1)) + start;
//   }
//   console.log(generateNumberInLimit(1, 10)); 
//   console.log(generateNumberInLimit(24, 50));

//5
// function toCamelCase(str) {
//     let result = '';
//     let upper = false;
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === '_') {
//         upper = true;
//       } 
//       else {
//         result += upper ? str[i].toUpperCase() : str[i];
//         upper = false;
//       }
//     }
//     return result;
//   }
//   console.log(toCamelCase("current_user"));
//   console.log(toCamelCase("user_first_name")); 
//   console.log(toCamelCase("car"));
