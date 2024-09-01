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
