//1
// let map = new Map();
// map.set(false, "boolean");
// map.set(777, "number");
// map.set("привіт", "string");
// map.set("@" , "symbol");
// map.set(null, "null");
// map.set(undefined, "undefined");
// map.set(function() {}, "function");
// map.set("name", "Diana");

// map.forEach((value, key) => {
//     console.log(`${key}  ${value}`);
// });


// let objectFromMap = Object.fromEntries(map);
// console.log(objectFromMap);

// let map2 = new Map(Object.entries(objectFromMap));
// console.log(map2);


//2
// function mergeArrays() {
//     let arrays = Array.from(arguments);
//     let mergedArray = arrays.reduce((acc, arr) => {
//         arr.forEach(item => acc.push(item));
//         return acc;
//     }, []);
//     let values = new Set(mergedArray);
//     return Array.from(values);
// }

// console.log(mergeArrays([1, 2], [2, 2, 3], [1, 1, 2, 4]));
// console.log(mergeArrays([1, 2, 3 ,4, 5], [5, 6]));

//3
// function aclean(array) {
//     let map = new Map();
//     for (let word of array) {
//         let sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);
//     }
//     return Array.from(map.values());
// }

// let array = ["материк", "мошкара", "апельсин", "спанієль", "мінотавр", "ромашка", "норматив", "метрика"];
// console.log(aclean(array));

//4
const books = {
    fantastic: {
        "Френк Герберт": [
            {
                title: "Дюна",
                year: 1965,
            },
            {
                title: "Дюна. Месія месіїв",
                year: 1969,
            },
            {
                title: "Діти Дюни",
                year: 1976,
            },
        ],
        "Станіслав Лем": [
            {
                title: "Соляріс",
                year: 1961,
            },
            {
                title: "Соляріс. Зіркові щоденники Ійона Тихого",
                year: 1971,
            },
        ],
    },
    novel: {
        Ремарк: [
            {
                title: "Три товарища",
                year: 1936,
            },
            {
                title: "Триумфальна арка",
                year: 1942,
            },
        ],
        "Джордж Оруелл": [
            {
                title: "1984",
                year: 1949,
            },
            {
                title: "Ферма Господаря Вилки",
                year: 1945,
            },
        ],
    },
    fantasy: {
        "Володар перснів": [
            {
                title: "Братство Кільця",
                year: 1954,
            },
            {
                title: "Дві вежі",
                year: 1954,
            },
            {
                title: "Повернення короля",
                year: 1955,
            },
        ],
        "Гаррі Поттер": [
            {
                title: "Гаррі Поттер і Філософський камінь",
                year: 1997,
            },
            {
                title: "Гаррі Поттер і тайна кімната",
                year: 1998,
            },
        ],
    },
};
function bookTitles() {
    let titles = [];

    for (let genre in books) {
        for (let author in books[genre]) {
            for (let book of books[genre][author]) {
                titles.push(book.title);
            }
        }
    }
    return titles;
} 

const titles = bookTitles();
console.log(titles)
