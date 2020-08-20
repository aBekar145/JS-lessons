// Массивы 03:03

const cars = ["Mazda", "Ford", "Bmw", "Mersedes"];
const fib = [1, 1, 2, 3, 5, "21", true];
const people = [
  { name: "Vladilen", budget: 4200 },
  { name: "Elena", budget: 3500 },
  { name: "Victoria", budget: 1700 },
];

// Function
function addItemToEnd() {}

// Method
// cars.push("Porshe");
// cars.unshift("Kia");
// const firstCar = cars.shift();
// const lastCar = cars.pop();

// console.log(firstCar);
// console.log(cars);

// console.log(cars.reverse());

// Task 1

// const text = "Hello, We learn JavaScript";

// const reverseText = text.split(',').reverse().join(' ');
// console.log(reverseText);

// const index = people.findIndex(function (person) {
//   return person.budget === 1700;
// });
// const person = people.find(function (person) {
//   return person.budget === 1700;
// });

// let findedPerson;

// for (const person of people) {

//   if (person.budget === 3500) {
//     findedPerson = person;
//   }
// }

// const person = people.find(person => person.budget === 3500)


// console.log(person);

// console.log(cars.includes('Mazda'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase();
// })

// const pow2 = num => num ** 2;
// const sqrt = num => Math.sqrt(num);

// const pow2Fib = fib.map(pow2);

// const filteredNumbers = pow2Fib.filter(num => num > 20);
// console.log(pow2Fib);
// console.log(filteredNumbers);

// 3:38

// Easy Code School

const numArr = [2, 32, 1234, 54, 323];

let value;

value = numArr.length;
// numArr.length = 100;

value = Array.isArray(numArr);
value = numArr[2];
numArr[2] = 12;
value = numArr.indexOf(54);

value = numArr.push(100);
value = numArr.pop();
value = numArr.unshift(111);
value = numArr.shift(111);
value = numArr.slice(0, 2);
value = numArr.splice(1, 2, 'one', 'two');
value = numArr.reverse();
value = numArr.concat(1, 2, 3);
value = numArr.join();
value = 'Hello world'.split();

console.log(value, numArr);