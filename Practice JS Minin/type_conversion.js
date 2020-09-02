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

function lieDetectorTest() {
  let lies = 0;

  let stolenDiamond = {};
  if (stolenDiamond) {
    console.log("You stole the diamond");
    lies++;
  }

  let car = {
    keysInPocket: null,
  };
  if (car.keysInPocket) {
    console.log("uh oh, guess you stole the car!");
    lies++;
  }
  if (car.emptyGasTank) {
    console.log("You drove the car after you stole it!");
    lies++;
  }

  let foundYouAtTheCrimeScene = [];
  if (foundYouAtTheCrimeScene) {
    console.log("A sure sign of guilt");
    lies++;
  }
  if (foundYouAtTheCrimeScene[0]) {
    console.log("Caught with a stolen item!");
    lies++;
  }

  let yourName = " ";
  if (yourName) {
    console.log("Guess you lied about your name");
    lies++;
  }
  return lies;
}

let numbersOfLies = lieDetectorTest();

console.log("You told " + numbersOfLies + " lies!");
if (numbersOfLies >= 3) {
  console.log("Guilty as charged");
}
