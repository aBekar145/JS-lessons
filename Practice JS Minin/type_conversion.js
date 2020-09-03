// let value = true;
// console.log(typeof value);

// value = String(value);
// alert(typeof value);

// alert( '6' / '2' );

// let str = '123';
// alert(typeof str);

// let num = Number(str);
// alert(typeof num);

// let age = Number('Любая строка вместо числа');
// alert(age);

// alert(Number(' 123 '));
// alert(Number('123z'));
// alert(Number(true));
// alert(Number(false));

// alert(1 + '2');
// alert('1' + 2);

// function lieDetectorTest() {
//   let lies = 0;

//   let stolenDiamond = {};
//   if (stolenDiamond) {
//     console.log("You stole the diamond");
//     lies++;
//   }

//   let car = {
//     keysInPocket: null,
//   };
//   if (car.keysInPocket) {
//     console.log("uh oh, guess you stole the car!");
//     lies++;
//   }
//   if (car.emptyGasTank) {
//     console.log("You drove the car after you stole it!");
//     lies++;
//   }

//   let foundYouAtTheCrimeScene = [];
//   if (foundYouAtTheCrimeScene) {
//     console.log("A sure sign of guilt");
//     lies++;
//   }
//   if (foundYouAtTheCrimeScene[0]) {
//     console.log("Caught with a stolen item!");
//     lies++;
//   }

//   let yourName = " ";
//   if (yourName) {
//     console.log("Guess you lied about your name");
//     lies++;
//   }
//   return lies;
// }

// let numbersOfLies = lieDetectorTest();

// console.log("You told " + numbersOfLies + " lies!");
// if (numbersOfLies >= 3) {
//   console.log("Guilty as charged");
// }

// let emot = 'XOxxOO';
// let hugs = 0;
// let kisses = 0;

// emot = emot.trim();
// emot = emot.toUpperCase();

// for (let i = 0 ; i < emot.length; i++) {
//   if (emot.charAt(i) === 'X') {
//     hugs++;
//   } else if (emot.charAt(i) == 'O') {
//     kisses++;
//   }
// }

// let name = 'Jenny';
// let phone = '867-5309';
// let fact = 'This is a prime number';

// let songName = phone + '/' + name;

// let index = phone.indexOf('-');
// if (fact.substring(10, 15) === 'prime') {
//   alert(fact);
// }

// let input = 'jenny@wickedlysmart.com';
// for (let i = 0; i < input.length; i++) {
//   if (input.charAt(i) === 'n') {
//     console.log('There`s an @ sign at index ' + i);
//   }
// }

// 1. method indexOf

// let phrase = 'the cat in the hat';
// let index = phrase.indexOf('cat');
// console.log('there`s a cat sitting at index ' + index);

// index = phrase.indexOf('the', 5);
// console.log('there`s a the sitting at index ' + index);

// index = phrase.indexOf('dog');
// console.log('there`s a dog sitting at index ' + index);

// index = phrase.indexOf('e');
// console.log('there`s a dog sitting at index ' + index);

// 2. method substring

// let data =  'name|phone|address';
// let val = data.substring(5, 10);
// console.log('Substring is ' + val);

// val = data.substring(5);
// console.log('Substring is now ' + val);


// 3. Method split

// let data = 'name|phone|address';
// let vals = data.split('|');
// console.log('Split array is ', vals);

// function validate(phoneNumber) {
//   if (phoneNumber.lenght > 8 || phoneNumber.lenght < 7) {
//     return false;
//   }
//   for (let i = 0; i < phoneNumber.lenght; i++) {
//     if (i === 3) {
//       if (phoneNumber.lenght === 8 && phoneNumber.charAt(i) !== '-') {
//         return false;
//       }
//     } else if (phoneNumber.lenght === 7 && isNaN(phoneNumber.charAt(i))) {
//       return false;
//     }
//   }
//   return true;
// }

// function validate(phoneNumber) {
//   if (phoneNumber.lenght > 8 || phoneNumber.lenght < 7) {
//     return false;
//   }
//   let first = phoneNumber.substring(0,3);
//   let second = phoneNumber.substring(4);
//   if (phoneNumber.lenght === 8) {
//     return (phoneNumber.charAt(3) === '-');
//   }
//   return true;
// }

function Duck(sound) {
  this.sound = sound;
  this.quack = function() {console.log(this.sound);}
}
let toy = new Duck('quack quack');
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);