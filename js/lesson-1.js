//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const userText = "bcde";

// if (userText.toLowerCase().startsWith("a")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

const result = userText.toLowerCase().startsWith("a") ? "yes" : "no";
console.log(result);

//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.
const firstName = "Вік";
const lastName = "Сташко";
const firstNameLength = firstName.length;
const lastNameLength = lastName.length;
// if (firstNameLength > 4 && lastNameLength > 5) {
//   console.log(firstNameLength + lastNameLength);
// } else {
//   console.log("неможливо виконати умову");
// }

firstNameLength > 4 && lastNameLength > 5
  ? console.log(firstNameLength + lastNameLength)
  : console.log("неможливо виконати умову");
