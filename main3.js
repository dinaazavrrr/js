//1
// let number = +prompt("Введіть число >=10");
// if(number>=10)
// {
//     console.log("Молодець!");
// }

//2
// let parolll = prompt("Введіть пароль:");
// if(parolll==="Діана топ!"){
//     console.log("Ласкаво просимо!");
// } else {
//     console.log("Пароль не вірний");
// } 

//3
// let user = prompt("Введіть повідомлення:");
// if(user){
//     console.log(user);
// }
// else if(user == "") {
//     console.log("Ви нічого не ввели");
// }
// else {
//     console.log("Відміна вводу");
// }

//4
// let number1 = +prompt("Введіть число 1:");
// let number2 = +prompt("Введіть число 2:");
// if (number1 === number2){
//     console.log("числа рівні");
// }   
// else if (number1>number2){
//     console.log("перше число більше");
// }
// else if (number1<number2){
//     console.log("друге число більше");
// }

//5
// let number = prompt("Введіть число:");
// if(number % 2 == 0){
//     console.log("число парне");
// }
// else {
//     console.log("число непарне")
// }

//6
// let number = +prompt("Введіть номер місяця");
// if ((number >= 1 && number <= 2) || 12){
//     console.log("Зима");
// }
// else if (number >= 3 && number <= 5) {
//     console.log("Весна");
// }
// else if (number >= 6 && number <= 8) {
//     console.log("Літо");
// }
// else if (number >= 9 && number <= 11) {
//     console.log("Осінь"); 
// }

//7
// let number = +prompt("введіть число:");
// if (number >= 20 && number <= 80) {
//     console.log("Число в діапазоні");
// } else {
//     console.log("Число не в діапазоні");
// }

//8
// let number = +prompt("введіть число:");
// if (!(number < 20 || number > 80)) {
//     console.log("Число в діапазоні");
// } else {
//     console.log("Число не в діапазоні");
// }

//9
let user = prompt("who's there?");
if(user==="Admin"){
    let parol = prompt("password");
    if(parol==="TheMaster"){
        console.log("Welcome!");
    }
    else if(parol==" "){
        console.log("wrong password");
    }
    else{
        console.log("canceled");
    }
}
else if(user==" "){
    console.log("I don't know you");
}
else{
    console.log("canseled");
}