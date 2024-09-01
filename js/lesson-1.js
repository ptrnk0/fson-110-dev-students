//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const userText = "bcde";

// if (userText.toLowerCase().startsWith("a")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// const result = userText.toLowerCase().startsWith("a") ? "yes" : "no";
// console.log(result);

//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.
// const firstName = "Вік";
// const lastName = "Сташко";
// const firstNameLength = firstName.length;
// const lastNameLength = lastName.length;
// if (firstNameLength > 4 && lastNameLength > 5) {
//   console.log(firstNameLength + lastNameLength);
// } else {
//   console.log("неможливо виконати умову");
// }

// firstNameLength > 4 && lastNameLength > 5
//   ? console.log(firstNameLength + lastNameLength)
//   : console.log("неможливо виконати умову");
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const number = 55;

// if (number >= 55 && number <= 99) {
//   console.log("Число потрапляє в діапазон");
// } else {
//   console.log("Число не потрапляє в діапазон");
// }
// number >= 55 && number <= 99
//   ? console.log("Число потрапляє в діапазон")
//   : console.log("Число не потрапляє в діапазон");
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = 120;

// if (ageMaxim >= 0 && ageMaxim <= 16) {
//   console.log("діти");
// } else if (ageMaxim >= 17 && ageMaxim <= 60) {
//   console.log("дорослі");
// } else if (ageMaxim >= 61 && ageMaxim <= 100) {
//   console.log("пенсіонери");
// } else {
//   console.log("eror");
// }
