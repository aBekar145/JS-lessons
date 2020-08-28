// easyCode

function getThis() {
    console.log(this.price);
    return this;
}

// getThis();
// window.getThis();
// console.log(window.getThis);

function getPrice(currency = '$') {
    console.log(currency + this.price);
    return this;
}



const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice,
    getName() {
        console.log(this.name);
    },
    info: {
       information: ['2.3 ghz'],
       getInfo: function() {
           console.log(this);
       }
    }
};

// prod1.getPrice();
// prod1.info.getInfo();
// getPrice();

const prod2 = {
    name:'AMD',
    price: 50,
    getPrice
};

prod2.getName = prod1.getName;

// prod2.getName();
// prod2.getPrice();

// prod1.getName();


let str = 'Hello world';
const reversStr = str
    .split('')  // ['H', 'e', 'l'.....]
    .reverse()  // ['d', 'l'....]
    .join(''); // 'dlrow olleH'
// console.log(reversStr);


function getName() {
    console.log(this.name);
    return this;
}

const prod3 = {
    name: 'ARM',
    price: 200,
    getPrice,
    // getName
};

// prod3
//     .getName()  // undefined
//     .getPrice();  //undefined.getPrice()

// getPrice.call(prod3, '*');
// getPrice.apply(prod3, ['*']);



const getPriceBind = prod3.getPrice.bind(prod3, '*');
console.log(getPriceBind);
setTimeout(getPriceBind, 10000);