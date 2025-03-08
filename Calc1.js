// Practice Run
const numberOne =3;
const numberTwo =9;
const answer1 = numberOne + numberTwo;
console.log(answer1);
const firstNumber = document.querySelector(".firstNumber");
const secondNumber = document.querySelector(".secondNumber");
const answer = document.querySelector(".answer");


// text into numbers
const number1 = parseFloat(firstNumber.innerHTML);
const number2 = parseFloat(secondNumber.innerHTML);
const result = number1 + number2;

answer.textContent = result;