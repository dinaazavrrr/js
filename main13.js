//1(2)
// function setLength(obj) {
//     const keys = Object.keys(obj);
//     obj.length = keys.length;
//     return obj;
//   }
//   const exampleObject = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };  
//   const objecTLength = setLength(exampleObject);
//   console.log(objectLength);
  
//1(2)
// function getEntries(obj) {
//     let entries = [];
//     for (let key in obj) {
//         if (key in obj) {
//             entries.push([key, obj[key]]);
//         }
//     }
//     return entries;
// }
// let actor = {
//     name: "Tom Hardy",
//     age: 44,
//     gender: "Male",
//     nationality: "British",
//     lastFilm: "Venom: Let There Be Carnage"
// };
// console.log(getEntries(actor));

//1(3)
// let actor = {};
// Object.defineProperties(actor, {
//   name: {
//     value: "Рудинський Олександр",
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   age: {
//     value: 44,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   gender: {
//     value: "чоловік",
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   nationality: {
//     value: "українець",
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   lastFilm: {
//     value: "Лишайся онлайн(2023)",
//     writable: false,
//     enumerable: true,
//     configurable: false
//   }
// });
// console.log(Object.values(actor));

//1(4)
// function Animal(voice) {
//     this.voice = voice;
//     Object.defineProperty(this, 'say', {
//         value: function() {
//             return this.voice;
//         },
//         enumerable: false
//     });
// }

// const dog = new Animal("Гав");
// console.log(dog.say()); // Гав

// for (let key in dog) {
//     console.log(key); // voice (say не перераховується)
// }

//2
// let car1 = {
//     model: "Mersedes",
//     price: 50000,
//     [Symbol.toPrimitive](type) {
//         if (type === 'string') {
//             return this.model;
//         } else if (type === 'number') {
//             return this.prise;
//         }
//     }
// };

// let car2 = {
//     model: "Audi",
//     price: 40000,
//     [Symbol.toPrimitive](type) {
//         if (type === 'string') {
//             return this.model;
//         } else if (type === 'number') {
//             return this.prise;
//         }
//     }
// };

// console.log(car1.price + car2.price) // 90000
// alert(car1) // Mersedes
// alert(car2) // Audi

//3
// function cloneObject(obj, keys) {
//     const clone = {obj};
//     for (let key of keys) {
//         delete clone[key];
//     }
//     return clone;
// }
// const actor = {
//     name: "Tom Hardy",
//     gender: "Male",
//     lastFilm: "Venom: Let There Be Carnage"  
// };
// const clonedActor = cloneObject(actor, ['nationality', 'age', 'phone']);
// console.log(clonedActor);
