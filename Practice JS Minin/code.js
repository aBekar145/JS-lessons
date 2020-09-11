// let access = document.getElementById('code9');
// let code = access.innerHTML;
// code = code + ' midnight';
// alert(code);

// const name = 'Tirion';
// // Этот код отработает неверно!
// console.log(name.toUpperCase().toLowerCase());

// стрелочные функции

// const plus = (x = 2, y = 1) => x + y;
// const plusRes = plus(1, 2);


// const withoutArgs = () => console.log("Hello world");
// const singleArg = (x = 1) => x * 2;
// const conlusion = singleArg();
// console.log(typeof conlusion);

// const moreActions = (a, b) => {
//   a *= 2;
//   b *= 3;
//   return a + b;
// };

// moreActions();

// const returnObj = (str = "") => ({
//   value: str,
//   length: str.length,
// });


// function plusFoo(x, y) {
//   console.log(arguments);
//   return x + y;
// }

// plusFoo(1, 2, 3, 'hello');

// const obj = {
//   firstName: 'Denis',
//   age: 30,
//   getFirstName() {
//     console.log(this);
//   },
//   getAgeArrow: null,
//   getAge() {
//     // this.getAgeArrow = () => console.log(this);
//     setTimeout(() => console.log(this));
//   }
// };

// obj.getAge();
// obj.getAgeArrow();


// const showCurrentDay = (lala) => {
//   console.log(`Today is: ${lala}`);
// };

// let date = 'January 29';
// date = 'February 30';
// showCurrentDay('May 14');

// const printSeq = (string, number) => {
//   console.log(string.repeat(3).split());
// }
// // END
// printSeq('hello', 4);

// const sub = (a, b) => {
//   return a - b;
// }

// console.log(sub(2018, 1975));

const sub = (a, b) => {
  const answer = a - b;
}

const result = sub(10, 7);
console.log(result);