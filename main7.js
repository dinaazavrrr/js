//1
// let actor = {
//     name: "Robert",
//     surname: "Downey"
// }
// name = "John";
// delete actor.name;
// console.log(actor);

//2
// let phone = prompt("ВВедіть свій номер телефону")

// let contacts = {
//         phone,
//         email: "dianalutsyuk4856@gmail.com"
//     } 

// let person = {
//     firstName: "Diana",
//     lastName: "Lutsyuk",
//     contacts: contacts
// }
// console.log(person);

//3 (я не впевнена що правильно зрозуміла завдання)
// let topSeries = ["Шерлок", "Доктор Хаус", "Наглядач", "Кіберсталкер", "Хороший доктор"];
// console.log("Топ 1:", topSeries[0]);
// console.log("Топ 5:", topSeries[4]);

//4
// let employee = {
// 	salary: 2000,
// 	taxes: 200,
// 	position: "front-end developer",
// 	level: "middle",
// }
// for(let key in employee){
//     if(employee[key]==="number"){
//         employee[key]+=2;
//     }
// }
// employee.showInfo=function(){
//     console.log(`${this.level} ${this.position} заробляє ${this.salary}`);
// }
// employee.showInfo();

// let employee2 = {
//     salary: 7777,
// 	taxes: 777,
// 	position: "behind-end developer",
// 	level: "higher",
// }
// employee2.showInfo=employee.showInfo
// employee2.showInfo()

//5
// function sumReducer(accumulator, currentValue) {
//     return accumulator + currentValue;
// }
// function sumInput(){
//     let numbers = [];
//     while(true){
//         let input = prompt("Введіть дані: ");
    
//         if(input===""||input === null){
//             break;
//         }
//         numbers.push(+input);
//     }
//     let sum = numbers.reduce(sumReducer, 0);
//     return sum;
// }
// console.log(sumInput());


//6
// const person = {
//     name: "John",
//     age: 30,
//     job: 'software engineer',
//     address: {
//      city: "New York",
//      country: "USA"
//     }
//    };
//    const{ job: currentJob, country: currentCountry } = person;
//    console.log(name , age, currentJob, city, currentCountry);

//7
let books = {
    countries: [
     {
      country: "Англія",
      authors: [
       {
        author: "Артур Конан Дойль",
        books: [
         {
          title: "Пригоди Шерлока Холмса",
          year: 1887,
          genre: "Роман"
         },
         {
          title: "Загадка Боскомського долу",
          year: 1912,
          genre: "Детектив"
         },
         {
          title: "Загадка Червоного Цирку",
          year: 1927,
          genre: "Детектив"
         }
        ]
       }
      ]
     },
     {
      country: "Україна",
      authors: [
       {
        author: "Макс Кідрук",
        books: [
         {
          title: "Твердиня",
          year: 2013,
          genre: "Роман"
         },
         {
          title: "Нові темні віки",
          year: 2023,
          genre: "Роман"
         }
        ]
       },
       {
        author: "Тарас Шевченко",
        books: [
         {
          title: "Кобзар",
          year: 1840,
          genre: "Роман"
         }
        ]
       }
      ]
     } 
    ]
   }
let {
    countries: [
        {
            authors: [
                {
                    books: [firstBook, , thirdBook]
                }
            ]
        },
        {
            authors: [
                {
                    books: [{ title: secondKidrukBookName }]
                },
                {
                    books: [{ year: yearOfPublicationKobzar }]
                }
            ]
        }
    ]
} = books;

console.log(firstBook);
console.log(thirdBook);
console.log(secondKidrukBookName);
console.log(yearOfPublicationKobzar);
