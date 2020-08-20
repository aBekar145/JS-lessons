// 1. Функции

// Function Declaration
// function greet(name) {
//   console.log('Привет - ', name);
// }

// Function Expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 - ', name);
// }

// greet('Лена');
// greet2('Лена');

// console.log(typeof greet);
// console.dir(greet);


// 2. Анонимные функции

// let = counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval); // clearTimeout
//   } else {
//     console.log(++counter);
//   }
// }, 1000);


// 3. Стрелочные функции

// function greet(name) {
//   console.log('Привет - ', name);
// }

// const arrow = (name, age) => {
//   console.log('Привет - ', name, age);
// }

// const arrow2 = name => console.log('Привет - ', name);

// arrow2('Vladilen', 26);

// const pow2 = num => num ** 2;

// console.log(pow2(5));

// 4. Параметры по умолчанию

// const sum = (a = 40, b = a * 2) => a + b;

// console.log(sum(41, 4));
// console.log(sum());

// function sumAll(...all) { // ...all - оператор rest
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   return result;
// }

// const res = sumAll(1, 4, 5, 6, 7);
// console.log(res);

// 5. Замыкания

// function createMember(name) {
//   return function (lastName) {
//     console.log(name + lastName);
//   }
// }

// const logWithLastName = createMember('Vladilen');

// console.log(logWithLastName('Minin'));

// console.log(logWithLastName('Kuznecov'));


//  Easy Code School!!!!!

// Function Declaration
// function sayHello(firstName = 'Default', lastName = 'Default') {
//   console.log(firstName, lastName);
//   console.log('Hello world');
//   return `Hello ${firstName} ${lastName}`;

// }

// let res = sayHello('Denis', 'Mescheryakov');
// let res2 = sayHello('Dima', 'Mescheryakov') + '!';
// let res3 = sayHello();

// console.log(res3);

// let x = 10;

// function foo(x) {
//   x = 20;
//   console.log(x);
//   return x;
// }

// foo();

// console.log(x);

// const user = {
//   name: 'Denis',
//   age: 30
// };

// function getObj(obj) {
//   obj.name = 'Den';
// }

// getObj(user);
// console.log(user);


// Function Expression

// const square = function(x) {
//   return x * x;
// };

// (function (msg) {
//   console.log(msg);
// })('Hello world');