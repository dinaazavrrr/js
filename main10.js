//1
// let employee1 = {
//     fullName: "John Malkovich",
//     position: "junior front-end developer",
//     salary: 300
// };
// let employee2 = {
//     fullName: "Ткаченко Зеновія",
//     position: "програміст",
//     salary: 1000
// };
//   function info(obj) {
//     return obj.fullName + " на позиції " + obj.position + " заробляє " + obj.salary;
//   } 

//   function showInfo(obj, currency) {
//     return `${info(obj)}${currency}`;
//   }


// let showInfoOfEmployee1 = info.bind(null, employee1, "$"); 
// let showInfoOfEmployee2 = info.bind(null, employee2, "грн.");

// console.log(info(employee1));
// console.log(info(employee2));

// console.log(showInfo(employee1, "$"));
// console.log(showInfo(employee2, "$"));

// console.log(showInfoOfEmployee1()); 
// console.log(showInfoOfEmployee2()); 

//2
// let calculator = {
//     num1: 0,
//     num2: 0,
//     read: function(a, b) {
//       this.num1 = a;
//       this.num2 = b;
//     },
//     sum: function() {
//       return this.num1 + this.num2;
//     },
//     mul: function() {
//       return this.num1 * this.num2;
//     }
//   };
  
//   calculator.read(2, 3);
//   console.log(calculator.sum());
//   console.log(calculator.mul());

  //3
//   let shoppingCart = {
//     items: [],
//     addItem: function(title, price) {
//       this.items.push({title: title, price: price});
//     },
//     removeItem: function(title) {
//       for (let i = 0; i < this.items.length; i++) {
//         if (this.items[i].title === title) {
//           this.items.splice(i, 1);
//           break;
//         }
//       }
//     },
//     calculateTotalPrice: function() {
//       let totalPrice = 0;
//       for (let i = 0; i < this.items.length; i++) {
//         totalPrice += this.items[i].price;
//       }
//       return totalPrice;
//     }
//   };
  
//   shoppingCart.addItem("iPhone", 1500);
//   shoppingCart.addItem("Книга", 30);
//   shoppingCart.addItem("Чашка", 5);
//   shoppingCart.removeItem("Чашка");
//   console.log(shoppingCart.calculateTotalPrice());
