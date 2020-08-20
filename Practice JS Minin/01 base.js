// 1. Переменные

// const firstName = 'Vladilen';
// let name = 'Vladilen';
// const lastName = 'Minin'; // string
// let age = 26; // number
// age = 28;
// const isProgrammer = true; // boolean
// age = 26;

// console.log(age);

// const _private = 'private';
// const if = 'mkef' // err
// const withNum5 = '5';
// const 5withNum = 5 // err

// 2. Мутирование

// alert('Имя человека: ' + firstName +  ', а возраст человека: '+ age.toString());
// console.log(age.toString());

// const lastName = prompt('Введите фамилию');
// alert(firstName + ' ' + lastName);

// 3. Операторы

// let currentYear = 2020;
// const birthYEar = 1993;

// const age = currentYear + birthYEar;

// const a = 10;
// const b = 5;
// let c = 32;
// c = c + a;
// c += a;
// c -= a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(c);

// 4. Типы данных  

// const isProgrammer = true;
// const name = 'Vladilen';
// const age = 26;
// let x;

// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);

// 5. Приоритет операторов

// const fullAge = 26;
// const birthYear = 1993;
// const currentYear = 2020;

// const isFullAge = currentYear - birthYear >= fullAge //26 >= 27 => true
// console.log(isFullAge);


// 6. Условные операторы
// const courseStatus = 'fail'; // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс готов и его можно проходить');
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился');
// }

// const num1= 42; // number
// const num2 = '42'; // string

// console.log(num1 === num2);

// const isReady = false;
// if (isReady) {
//     console.log('Все готово!')
// } else {
//     console.log('Все не готово!')
// }

//  Тернарное выражение
// const isReady = false;
// isReady ? console.log('Все готово!') : console.log('Все не готово!');

// 7. Булевая логика 1:18

// 8 Функции

// function calculateAge(year) {
//     return 2020 - year;
// }


// // console.log(calculateAge(1993));
// // console.log(calculateAge(2019));
// // console.log(calculateAge(1999));

// function logInfoAbout(name, year) {
//     const age = calculateAge(year);

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age);
//     } else {
//         console.log('Вообще-то это уже будущее!');
//     }

    
// }

// logInfoAbout('Владилен', 1993);
// logInfoAbout('Елена', 1995);
// logInfoAbout('Елена', 2022);


// 9. Массивы

// const cars = ['Мазда', 'Мерседес', 'Форд'];
// console.log(cars);

// console.log(cars.length);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[4]);

// cars[0] = 'Porshe';

// console.log(cars);

// cars[cars.length] = 'Mazda';
// console.log(cars);

// 10. Циклы 
const cars = ['Мазда', 'Мерседес', 'Форд', 'Porshe'];
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     console.log(car);
// }

for (let car of cars) {
    console.log(car);
}

// 11 обьекты 

const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet from person');
    }
}

console.log(person.firstName);
console.log(person['lastName']);
const key = 'year';
console.log(person[key]);
person.hasWife = true;
person.isProgrammer = true;
console.log(person);

// 1:44

