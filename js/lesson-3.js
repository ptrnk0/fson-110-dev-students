//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// function peformOperation(a, b, callback) {
// 	return callback(a * b);
// }

// function checkSqrt(number) {
// 	return Math.sqrt(number);
// }

// function checkNumber(number) {
// 	return number % 2 === 0 ? "even" : "odd";
// }

// const result = peformOperation(20, 40, checkSqrt);
// const result1 = peformOperation(20, 40, checkNumber);
// console.log(result);
// console.log(result1);

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// function getNewArray(arr) {
// 	return arr.map((number) => Math.pow(number, 2));
// }

// const getNewArray = (arr) => arr.map((number) => Math.pow(number, 2));

// const res = getNewArray([1, 2, 3, 4, 5]);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
// 	{ id: 1, values: [1, 2, 3] },
// 	{ id: 2, values: [4, 5, 6] },
// 	{ id: 3, values: [7, 8, 9] },
// ];

// const flatArray = (arr) => arr.flatMap((item) => item.values);

// const result = flatArray(data);
// console.log(result);
