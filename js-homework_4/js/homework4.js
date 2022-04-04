'use strict';

// Метод slice.
// Создает новый массив, в который копируется часть либо весь массив
// Синтаксис arr.slice([start], [end]) Не включая [end]

// Копируем часть массива

let arrOne = ['Ваня', 'Игорь', 'Оля'];

// Начиная с 1й позиции 'Игорь',
// до 2й позиции 'Оля' (не включая)

let arrTwo = arrOne.slice(1,2);
console.log(arrTwo);

// Начиная с предпоследней позиции 'Игорь',
// до последней 'Оля' (не включая)

let arrThree = arrOne.slice(-2,-1);
console.log(arrThree);

//Копируем весь массив

let arrFour = arrOne.slice();
console.log(arrFour);

//--------------------

// Метод concat.
// Создает новый массив, в который копирует данные из других массивов
// и дополнительные значения (в конце массива)
// Синтаксис arr.contact(arg1,arg2...)

let arrFive = ['Ваня', 'Игорь', 'Оля',];
let arrSix = arrFive.concat('Петя');
console.log(arrSix);

//--------------------

// Поиск в массиве

// Методы indexOf/lastIndexOf и includes
// аналоги строковым методам

/*
1. arr.indexOff(item, from) ищет item, начиная с индекса from,
и возвращаяет индекс, на котором был найден искомый элемент, в противном случае - 1.
2. arr.lastIndexOf(item, from) - то же самое, но ищет справа налево.
3. arr.includes(item, from) - ищет item, начиная с индекса from, и возвращает true, если поиск успешен.
*/

let arr = ['Ваня', 'Игорь', 'Оля',];

//indexOf

console.log(arr.indexOf('Игорь'));
console.log(arr.indexOf('Вася')); //-1 (не найден)
console.log(arr.indexOf('Игорь', 2)); // поиск Игорь со 2 позиции (-1 не найден)

//includes

console.log(arr.indexOf('Игорь'));
console.log(arr.indexOf('Вася')); // false (не найден)
console.log(arr.indexOf('Игорь', 2));

//---------------

// Задача на цикл for of

let numbers = [5, 7, -12, -90, 11, -45];
let lowNumbers = [];
for (let element of numbers) { 
    if (element > 0) {
        lowNumbers.push(element);
    } 
}
console.log(lowNumbers);

// Задача на цикл for
