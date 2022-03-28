"use strict"

//--Задача на арифметические (+ и -) операторы--

let a = 5;
let b = 9;
    a = a + b; 
    b = a - b; 
    a = a - b;
console.log(a, b);

//--Найти сумму цифр 2х значного числа----------



//--Задача на тернарный оператор----------------

const MIN = 100000;
let score = 100010;
let result = score >= MIN ? score - (score * 0.10) : score;
console.log(result);