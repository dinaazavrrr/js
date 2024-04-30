//1.1
// let Guest = {
//     name: "John",
//     isRegistered: false
//   };
//   let User = Object.create(Guest);
//   User.isRegistered = true;
//   User.isAdmin = false;
//   User.email = "email@mail.com";
//   let Admin = Object.create(User);
//   Admin.isAdmin = true;
//   Admin.addProduct = function(product) {
//     console.log(`Я адмін, додаю новий продукт - ${product}`);
//   };
//   for (let key in Admin) {
//     console.log(key);
//   }

//1.2
// let Vehicle = {
//     ride: function() {
//       console.log(`Їду на ${this.name} зі швидкістю ${this.speed}`);
//     }
//   };
  
//   let Car = Object.create(Vehicle);
//   Car.name = "Audi RS7";
//   Car.speed = 180;
  
//   let Bicycle = Object.create(Vehicle);
//   Bicycle.name = "велосипед";
//   Bicycle.speed = 20;
  
//   Car.ride();
//   Bicycle.ride();

//1.3
// let Animal = {
//     sleep: function() {
//       console.log("Я сплю");
//     }
//   };
//   let Dog = Object.create(Animal);
//   Dog.showVoice = function() {
//     console.log("Гав!");
//   };
  
//   let Pug = Object.create(Dog);
//   Pug.name = "Бьянка";
//   Pug.sayHi = function() {
//     console.log(`Доброго вечора! Мене звати ${this.name}!`);
//   };

//   Pug.sleep(); 
//   Pug.showVoice();
//   Pug.sayHi();

//   Pug.sleep = function() {
//     console.log("Я сплю і храплю)");
//   };
//   Pug.sleep();

//2
// let user = {
//     name: "",
//     age: 0,
//     set name1(newName) {
//       if (newName.length > 2) {
//         this.name = newName;
//       } else {
//         console.log("Довжина імені має бути більше за 2 символи");
//       }
//     },  
//     set age1(newAge) {
//       if (newAge > 0) {
//         this.age = newAge;
//       } else {
//         console.log("Вік повинен бути більше ніж 0");
//       }
//     }
//   };
  
//   user.name1 = "Аб";
//   user.age1 = -1;
 
//   user.name1 = "Діана";
//   user.age1 = 18;
  
//   console.log(user.name);
//   console.log(user.age);

//3
// function Triangle(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
  
//   Triangle.prototype.getSquare = function() {
//     let p = (this.a + this.b + this.c) / 2;
//     let square = (p * (p - this.a) * (p - this.b) * (p - this.c))**0.5;
//     console.log(square.toFixed(2));
//   };
  
//   const triangle1 = new Triangle(5, 4, 3);
//   const triangle2 = new Triangle(5, 5, 2);
//   const triangle3 = new Triangle(4, 4, 4);
  
//   triangle1.getSquare(); // 6
//   triangle2.getSquare(); // 4.89
//   triangle3.getSquare(); // 6.92
  

