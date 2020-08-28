// objects

let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function () {
    if (this.fuel == 0) {
      alert("The car is on empty, fill up before starting!");
    } else {
        this.started = true;
    }
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
      } else {
        alert("Uh oh, out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  },
};

fiat.start();
// fiat.drive();
// fiat.addFuel(2);
// fiat.start();
// fiat.drive();
// fiat.drive();
// fiat.drive();
// fiat.stop();

// console.log(fiat);

// let taxi = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1955,
//   color: "yellow",
//   passengers: 4,
//   convertible: false,
//   mileage: 281341,
//   started: false,
//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// let cadi = {
//   make: "GM",
//   model: "Cadillac",
//   year: 1955,
//   color: "tan",
//   passengers: 5,
//   convertible: false,
//   mileage: 12892,
//   started: false,
//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// let chevy = {
//   make: "Chevy",
//   model: "Bel Air",
//   year: 1957,
//   color: "red",
//   passengers: 2,
//   convertible: false,
//   mileage: 1021,
//   started: false,
//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// cadi.start();
// cadi.drive();
// cadi.stop();

// chevy.start();
// chevy.drive();
// chevy.stop();

// taxi.start();
// taxi.drive();
// taxi.stop();

// for (let prop in chevy) {
//   console.log(prop + ": " + chevy[prop]);
// }

// function prequal(car) {
//     if (car.mileage > 10000) {
//         return false;
//     } else if (car.year > 1960) {
//         return false;
//     }
//     return true;
// }

// let worthALook = prequal(taxi);

// if (worthALook) {
//     console.log('You gotta check out this ' + taxi.make + ' ' + taxi.model);
// } else {
//     console.log('You should really pass on the ' + taxi.make + ' ' + taxi.model);
// }

// let dog = {
//     name: 'Fido',
//     weight: 48,
//     breed: 'Mixed',
//     loves: 'walks'
// };

// function loseWeight(dog, amount) {
//     dog.weight = dog.weight - amount;
// }

// loseWeight(fido, 10);

// alert(fido.name + ' now weighs' + fido.weight);

// generator machines
function makeCar() {
  let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
  let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  let years = [1955, 1957, 1948, 1954, 1961];
  let colors = ["red", "blue", "tan", "yellow", "white"];
  let convertible = [true, false];

  let rand1 = Math.floor(Math.random() * makes.length);
  let rand2 = Math.floor(Math.random() * models.length);
  let rand3 = Math.floor(Math.random() * years.length);
  let rand4 = Math.floor(Math.random() * colors.length);
  let rand5 = Math.floor(Math.random() * 5) + 1;
  let rand6 = Math.floor(Math.random() * 2);

  let car = {
    makes: makes[rand1],
    model: models[rand2],
    years: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage: 0,
  };
  return car;
}

function displayCar(car) {
  console.log(
    "Your new car is a " + car.years + " " + car.makes + " " + car.model
  );
}

let carToSell = makeCar();
displayCar(carToSell);
