// 1. Реализуйте функцию capitalize(), которая приводит первую букву переданного слова к верхнему регистру:

// const capitalize = (text) => console.log(`${text[0].toUpperCase()}${text.slice(1)}`);
// capitalize('arya');


// 2. функция проверки чётности
const isEven = (number) => console.log(number % 2 );
isEven(7);
isEven(4);

// 3. : напишем функцию, которая принимает строку и проверяет, заглавная ли первая буква.
// Алгоритм:
// 1. Получим и запишем в переменную первый символ из строки-аргумента.
// 2. Сравним, равен ли символ своей большой (заглавной) версии.
// 3. Вернём результат.

const isFirstLetterInUpperCase = (string) => {
  const firstLetter = string[0];
  return console.log(firstLetter.toUpperCase() === firstLetter);
}

isFirstLetterInUpperCase('marmont'); // false
isFirstLetterInUpperCase('Robb'); 

const hasTargaryenReference = (string) => {
  const startName = string.substring(0, 9);
  return console.log(startName === 'Targaryen');
}
// END

hasTargaryenReference('');          // false
hasTargaryenReference('Targari');   // false
hasTargaryenReference('targaryen'); // false
hasTargaryenReference('Targaryen');

// 4.Если у солдата доспехи красного цвета И нет щита

// ИЛИ

// если у солдата есть щит с изображением льва

// то это Ланнистер.

const isLannisterSoldier = (color, shield) => {
  const result = (color === 'red' && shield === null) || shield === 'lion';
  return result;
};

isLannisterSoldier('red', 'lion'); // true
isLannisterSoldier('blue', null);  // false