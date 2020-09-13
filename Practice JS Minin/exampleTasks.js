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


// 5.  Год будет високосным, если он кратен 400 или он одновременно кратен 4 и не кратен 100.

const isLeapYear = (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

isLeapYear(2018); // false
isLeapYear(2017); // false
isLeapYear(2016); // true


// 6. Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ (по порядковому номеру, а не индексу) и возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.
const name = 'Hexlet';
const getLetter = (text, position) => text[position - 1] || '';
getLetter(name, 11); // ''

// 7. Реализуйте функцию buildUrl(), которая принимает на вход адрес страницы (без указания домена) и имя домена, а возвращает полный url со схемой https.
const buildUrl = (url, domain) => {
  let normalizedUrl;
  if (url.startsWith('/')) {
    normalizedUrl = url.slice(1);
  } else {
    normalizedUrl = url;
  }
  return `https://${domain}/${normalizedUrl}`;
};

buildUrl('pages/about', 'hexlet.io'); // 'https://hexlet.io/pages/about'
buildUrl('/pages/about', 'hexlet.io'); // 'https://hexlet.io/pages/about'

// Для главной страницы слэш в конце обязателен
buildUrl('/', 'ru.code-basics.com'); // 'https://ru.code-basics.com/'
buildUrl('', 'ru.code-basics.com'); // 'https://ru.code-basics.com/'

// 8. Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений.


// END
// convertText('Hello'); // 'Hello'
// convertText('hello'); // 'olleh'

// Не забудьте учесть пустую строку!
// convertText(''); // ''

//  9. Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:
const getNumberExplanation = (number) => {
  switch (number) {
    case 666:
      return 'devil number';
    case 7:
      return 'prime number';
    case 42:
      return 'answer for everything';
    default:
      return null;
  }
};

getNumberExplanation(0); // null

// Объяснения есть только для указанных ниже чисел
getNumberExplanation(666); // 'devil number'
getNumberExplanation(42); // 'answer for everything'
getNumberExplanation(7); // 'prime number'

// 10. Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.
const printNumbers = (initialNumber) => {
  // BEGIN
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  console.log('finished!');
  // END
};

printNumbers(6);

// 11. Реализуйте функцию multiplyNumberFromRange() которая перемножает числа в указанном диапазоне включая границы диапазона.

const multiplyNumberFromRange = (start, finish) => {
  let i = start;
  let result = 1;

  while (i <= finish) {
    result = result * i;
    i = i + 1;
  }

  return console.log(result);
};

multiplyNumberFromRange(1, 5);


//  11.Реализуйте функцию joinNumbersFromRange() которая объединяет все числа из диапазона в строку:
const joinNumbersFromRange = (start, end) => {
  let i = start;
  let result = '';
  while (i <= end) {
    result = `${result}${i}`;
    i = i + 1;
  }
  return result;s
};

joinNumbersFromRange(1, 1); // '1'
joinNumbersFromRange(2, 3); // '23'
joinNumbersFromRange(5, 10); // '5678910'

// 12. который распечатывает буквы каждого слова на отдельной строке:

const printNameBySymbol = (name) => {
  let i = 0;
  // Такая проверка будет выполняться до конца строки
  // включая последний символ. Его индекс `length - 1`.
  while (i < name.length) {
    // Обращаемся к символу по индексу
    console.log(name[i]);
    i = i + 1;
  }
};

printNameBySymbol('Arya');
// 'A'
// 'r'
// 'y'
// 'a'

// 12.2 печатает переданное слово посимвольно, но делает это в обратном порядке.
const printReversedNameBySymbol = (name) => {
  let i = name.length - 1;
  while (i >= 0) {
    console.log(name[i]);
    i = i - 1;
  }
};

// 13. Представьте себе функцию, которая считает сколько раз входит буква в предложение
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count += 1;
    }
    i = i + 1;
  }

  return count;
};
countChars('HexlEt', 'e');
countChars('HexlEt', 'E');


// 14. переворот строки

const reverse = (str) => {
  let i = 0;
  // Нейтральный элемент для строк это пустая строка
  let result = '';
  while (i < str.length) {
    // Соединяем в обратном порядке
    result = `${str[i]}${result}`;
    // Тоже самое через конкатенацию
    // result = str[i] + result;
    i = i + 1;
  }

  return console.log(result);
};

reverse('Rose'); // 'narB'
reverse('Bran'); // 'narB'
// Проверка нейтрального элемента
reverse(''); // ''

// 14.1 от последнего к первому
const reverse = (str) => {
  let i = str.length - 1;
  let result = '';
  while (i >= 0) {
    result = `${result}${str[i]}`;
    i = i - 1;
  }

  return result;
};

// 15. Реализуйте функцию filterString(), принимающую на вход строку и символ, и возвращающую новую строку, в которой удален переданный символ во всех его позициях.
const filterString = (str, char) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const currentChar = str[i];
    if (currentChar !== char) {
      result = `${result}${currentChar}`;
    }
    i += 1;
  }

  return result;
};

const str = 'If I look back I am lost';
filterString(str, 'I'); // 'f  look back  am lost'
filterString(str, 'o'); // 'If I lk back I am lst'

// 16. Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает ее копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % n === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    i += 1;
  }

  return result;
};

const text = 'I never look back';
// Каждый третий элемент
makeItFunny(text, 3); // 'I NevEr LooK bAck'