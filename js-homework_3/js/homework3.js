'use strict';

//Дана переменная count
//в зависимости от значения переменной
//вывести в консоль слово товар в правильной форме
//например 12 товаров, 33 товара, 21 товар и тд.

let count = parseInt(prompt('Введите любое число или 0 для выхода'));
// 1, товар --(21,31,41,51)-???
// 2,3,4, товара
// 5,6,7,8,9,10, товаров --(11,111,211,311)-???
if (count % 10 === 1 && count % 100 !== 11){ 
    alert(`${count} товар`);
} else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)){ 
    alert(`${count} товара`);
} else if (count % 10 >= 5 && count % 10 <= 10 && (count % 100 > 10 || count % 100 !== 21)){ 
    alert(`${count} товаров`);
} else if (count === 0) {
    alert('Выход из программы');
}