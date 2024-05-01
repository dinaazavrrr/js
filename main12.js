//1.1
// class Animal {
//     constructor(word) {
//       this.word = word;
//     }
//     say() {
//       return this.word;
//     }
//   } 
//   const dog = new Animal("Гав!");
//   const cat = new Animal("Mew");
//   const pig = new Animal("Хрю-хрю");
//   console.log(dog.say()); 
//   console.log(cat.say()); 
//   console.log(pig.say()); 

//1.2
// class Car {
//     constructor(name, speed) {
//       this.model = name;
//       this.speed = speed;
//     }
  
//     ride() {
//       console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
//     }
  
//     stop() {
//       this.speed = 0;
//       console.log(`${this.model} зупинилась. Швидкість ${this.speed} км/год`);
//     }
  
//     gase() {
//       this.speed += 10;
//       console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
//     }
  
//     brake() {
//       this.speed -= 10;
//       console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
//     }
//   }
  
//   const bmw = new Car("BMW", 50);
  
//   bmw.ride(); 
//   bmw.gase();
//   bmw.gase();
//   bmw.brake();
//   bmw.stop();

//1.3
// class TodoList {
//     constructor() {
//       this.todos = [];
//     }
//     show() {
//       for (let i = 0; i < this.todos.length; i++) {
//         console.log(`${i + 1}. ${this.todos[i]}`);
//       }
//     }
//     addTask(task) {
//       this.todos.push(task);
//       this.show();
//     }
//     removeTask(task) {
//       const index = this.todos.indexOf(task);
//       if (index !== -1) {
//         this.todos.splice(index, 1);
//         this.show();
//       }
//     }
//   }
  
//   const todoList = new TodoList(); 
//   todoList.addTask("Погуляти з собакою");
//   todoList.addTask("Зробити ДЗ по JavaScript");
//   todoList.addTask("Подивитись серіал");
//   todoList.removeTask("Погуляти з собакою");

//2
// class Viacle {
//     constructor(speed) {
//       this.speed = speed;
//     }
  
//     ride() {
//       console.log(`Їде зі швидкістю ${this.speed}`);
//     }
  
//     stop() {
//       this.speed = 0;
//       console.log(`Стоїть. Швидкість ${this.speed}`);
//     }
//   }
  
//   class Bicycle extends Viacle {
//     constructor(type, speed) {
//       super(speed);
//       this.type = type;
//     }
  
//     ride() {
//       super.ride();
//       console.log("Крутить педалі");
//     }
//   }
  
//   class FireEngine extends Viacle {
//     constructor(type, speed) {
//       super(speed);
//       this.type = type;
//     }
  
//     stew() {
//       super.stop();
//       console.log("Гасить пожар");
//     }
//   }
  
//   const bicycle = new Bicycle("Ровер", 20);
  
//   const fireEngine1 = new FireEngine("Пожарна машина", 90);
//   const fireEngine2 = new FireEngine("Бус", 60);
  
//   bicycle.ride();
//   bicycle.stop();
//   console.log(bicycle.type, bicycle.speed);
  
//   fireEngine1.ride();
//   fireEngine1.stop();
//   fireEngine1.stew();
//   console.log(fireEngine1.type, fireEngine1.speed);
  
//   fireEngine2.ride();
//   fireEngine2.stop();
//   fireEngine2.stew();
//   console.log(fireEngine2.type, fireEngine2.speed);
  
//3
// class Product {
//     constructor(title, price) {
//       this.title = title;
//       this.price = price;
//     }
//   }
//   class DiscountProduct extends Product {
//     constructor(title, price, discountPercent) {
//       super(title, price);
//       this.discountPercent = discountPercent;
//     }
//     calculateDiscountPrice() {
//       return this.price * (1 - this.discountPercent / 100);
//     }
//   }
//   class Customer {
//     constructor(name) {
//       this.name = name;
//       this.shoppingCart = [];
//       this.sum = 0;
//     }
//     addProduct(product) {
//       this.shoppingCart.push(product);
//       if (product instanceof DiscountProduct) {
//         this.sum += product.calculateDiscountPrice();
//       } else {
//         this.sum += product.price;
//       }
//     }
//     removeProduct(product) {
//       const index = this.shoppingCart.indexOf(product);
//       if (index !== -1) {
//         const removedProduct = this.shoppingCart.splice(index, 1)[0];
//         if (removedProduct instanceof DiscountProduct) {
//           this.sum -= removedProduct.calculateDiscountPrice();
//         } else {
//           this.sum -= removedProduct.price;
//         }
//       }
//     }
//     buy() {
//       const products = this.shoppingCart.map(product => product.title);
//       console.log(`${this.name} купив товари: ${products.join(", ")} на суму ${this.sum} грн.`);
//       this.shoppingCart = [];
//       this.sum = 0;
//     }
//   }
//   const eggs = new Product("Яйця", 50);
//   const porridge = new Product("Гречка", 40);
//   const sausage = new DiscountProduct("Ковбаса", 120, 5); // 5% знижка
//   const dumplings = new DiscountProduct("Пельмені", 90, 10); // 10% знижка
  
//   const customer = new Customer('Tom Holland');
  
//   customer.addProduct(eggs);
//   customer.addProduct(porridge);
//   customer.addProduct(sausage);
//   customer.addProduct(dumplings);
//   customer.removeProduct(porridge);
//   customer.buy();
