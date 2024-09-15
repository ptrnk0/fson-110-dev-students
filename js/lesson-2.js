// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-рол");
styles.unshift("RnB");
// styles[1] = "Класика";
const index = styles.indexOf("Блюз");

if (index !== -1) {
	styles[index] = "Класика";
}

styles.shift();
styles.unshift("Реп", "Реггі");

// console.log("індекс", index);

// console.log(styles);

// for (let i = 0; i < styles.length; i++) {
// 	console.log(`${i + 1}-${styles[i]}`);
// }

// for (const style of styles) {
// 	console.log(style);
// }

//TODO:=========task-1=================
// Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, розділений дефісами у нижньому регістрі.

const message = "JavaScript is a popular programming language.";

// console.log(message.length);

const wordsArray = message.split(" ");

const wordsCount = wordsArray.length;

const newMessage = wordsArray.join("-").toLowerCase();

// console.log(newMessage);
