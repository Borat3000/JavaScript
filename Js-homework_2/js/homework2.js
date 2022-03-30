'use strict';

// //Задача на if----------

let count = prompt('Количество верных ответов');

if (count <= 39 && count >= 0){ 
    console.log('Попробуйте еще раз');
} else if (count <= 59 && count >= 40){ 
    console.log('Удовлетворительно');
} else if (count <= 89 && count >= 60){
    console.log('Хорошо');
} else if (count <= 100 && count >= 90) {
    console.log('Отлично');
} else {
    console.log('Условие не выполнено');
}

// //Задача на swift-------

let sum = prompt('Сумма покупки')
let code = prompt('Номер купона')

switch (code) {
    case '4653':
        console.log(sum - (sum * 30 / 100));
        break;
    case '5698':
    case '5111':
        console.log(sum - (sum * 20 / 100));
        break;
    case '6922':
    case '6113':
    case '6099':
        console.log(sum - (sum * 10 / 100));
        break;
    default:
        console.log(sum)
}

//Задача на цикл while--


let plates = parseInt(prompt('Введите колличество тарелок'));
let fairy = parseInt(prompt('Введите колличество моющего средства'));

while (true) {
   plates --; //Декремент (--) уменьшает значение переменной на 1.
   fairy -= 0.5; //Присваивание с вычитанием (x -= y) =>  x = x - y
    if (plates === 0) {
       console.log(`Тарелки закончились, а моющего средства осталось: ${fairy}`);
       break;
   } else if (fairy === 0) {
    console.log(`Моющее средство закончилось, а тарелок осталось: ${plates}`);
    break;
   }
    
}

//Задача на цикл while 2-

let randomNumber;
let b = Math.floor(Math.random() * 9) + 1; 
 while (randomNumber = parseInt(prompt('Введите число от 1 до 9 или 0 для выхода'))) {
    if (b > randomNumber) {
    alert('Загаданное число больше');
  } else if (b < randomNumber) {
    alert('Загаданное число меньше'); // вместо alert можно поставить console.log для вывода ответа в консоль
  } else if (b === randomNumber) {
    alert('Вы угадали');
    break;
  }
}
    if (randomNumber === 0) {
    alert('Выход из программы');
}