//1
// let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
// console.log(array);

// let m5Array = array.map(numbers => numbers * 5);
// console.log(m5Array);

// function sort(arr) {
//     return arr.slice().sort((a,b) => a - b);
// }
// console.log(sort(array));
// function sortReverse(arr) {
//     return arr.slice().sort((a,b) => b - a);
// }
// console.log(sortReverse(array));

// function sumReducer(accumulator, currentValue) {
//         return accumulator + currentValue;
// }
// let sum = array.reduce(sumReducer,0);
// console.log(sum);

//2
// function sortLength(strings) {
//     return strings.sort((a, b) => a.length - b.length);
// }

// let array = ["Mercedes", "Audi", "BMW", "VolksWagen"];
// let sortArray = sortLength(array);
// console.log(sortArray);

//3
// function unique(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }
// let strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"];
// console.log(unique(strings));

//4
// function mostNumber(arr) {
//     let counts = {};
//     arr.forEach(num => {
//         counts[num] = (counts[num] || 0) + 1;
//     });
//     let maxCount = Object.values(counts).reduce((max, val) => (val > max ? val : max), 0);
//     let mostNumbers = Object.keys(counts).filter(num => counts[num] === maxCount);
//     return mostNumbers.reduce((max, val) => (val > max ? val : max), 0);
// }
// console.log(mostNumber([12, 10, 8, 12, 7, 6, 4, 10, 12])); 
// console.log(mostNumber([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
// console.log(mostNumber([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); 
