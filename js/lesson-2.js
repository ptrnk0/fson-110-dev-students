// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-рол");
// styles.unshift("RnB");
// styles[1] = "Класика";
// const index = styles.indexOf("Блюз");

// if (index !== -1) {
// 	styles[index] = "Класика";
// }

// styles.shift();
// styles.unshift("Реп", "Реггі");

// console.log("індекс", index);

// console.log(styles);

// for (let i = 0; i < styles.length; i++) {
// 	console.log(`${i + 1}-${styles[i]}`);
// }

// for (const style of styles) {
// 	console.log(style);
// }

//TODO:=========task-1=================
// // Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, розділений дефісами у нижньому регістрі.

// const message = "JavaScript is a popular programming language.";

// // console.log(message.length);

// const wordsArray = message.split(" ");

// const wordsCount = wordsArray.length;

// const newMessage = wordsArray.join("-").toLowerCase();

// // console.log(newMessage);

//TODO:=========task-2=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 'S';
// const newArray = [];
// for (const elem of wordsArray){
// 	if(elem.toLowerCase().includes(substring.toLowerCase())){
// 		newArray.push(elem);
// 	}
// }

// for (const elem of wordsArray){
// 	if(elem.toLowerCase().indexOf(substring.toLowerCase())!== -1){
// 		newArray.push(elem);
// 	}
// }
// const result = newArray.join(", ");
// console.log(`Масив елементів, що містять підстроку ${substring}: ${result}`);

//TODO:=========task-3=================
// Створити масив з 10-ти чисел. Напиши функцію яуа буде шукати найбільше число.

// const numbersArray = [1, 0, 5, 46, 23, 15, 4, 800, 7, -10];

// function getMaxNum(num) {
//   let res = num[0];
//   for (let i = 1; i < num.length; i++) {
//     if (res < num[i]) {
//       res = num[i];
//     }
//   }
//   return res;
// }
// console.log(getMaxNum(numbersArray));

//TODO:============task-04==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b = 10) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Ви ввели некоректні значення";
//   }
//   return a < b ? a : b;
// }
// console.log(min(4));

//TODO:=========task-05=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// function calculateAverage(...args) {
//   console.log(args);
//   console.log(arguments);
// }
// function calculateAverage() {
//   let sum = 0;
//   let count = 0;
//   for (const arg of arguments) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     count++;
//     sum += arg;
//   }
//   return sum / count;
// }
// console.log(calculateAverage(100, 54, 566, "rtr"));
