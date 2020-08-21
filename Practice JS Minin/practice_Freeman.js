// objects

let fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'Medium Blue',
    passengers: 2,
    convertible: false,
    mileage: 88000 
};

let miles = fiat.mileage;
fiat.mileage = 10000;
fiat.needsWashing = true;

console.log(fiat);