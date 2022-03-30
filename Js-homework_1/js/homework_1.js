"use strict"

//--Задача на арифметические (+ и -) операторы--

let a = 5;
let b = 9;
    a = a + b; 
    b = a - b; 
    a = a - b;
console.log(a, b);

//--Найти сумму цифр 2х значного числа----------

let n = 45;
let first = n % 10;
let second = ( n - first ) / 10;
let sum = first + second;
console.log(sum);


//--Задача на тернарный оператор----------------

const MIN = 100000;
let score = 100010;
let result = score >= MIN ? score - (score * 0.10) : score;
console.log(result);