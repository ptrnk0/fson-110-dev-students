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

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const checkAge = (arr) => arr.some((item) => item.age < 20);

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 5, 8, 10];

// const checkEvenArray = (arr) => arr.every((number) => number % 2 === 0);

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 20, 3, 4, 5];

// const getNumber = (arr, value) => arr.find((number) => number > value);

// const res = getNumber(numbers, 3);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 20, 5, 1, 3];
// const sortedArray = (array) => array.toSorted((a, b) => a - b)
// const res = sortedArray(numbersArray);
// console.log(res);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortedArray = (array) => array.toSorted((a, b) => a.localeCompare(b))
// const res = sortedArray(stringArray);
// console.log(res);

//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sortedUsers = (array) => array.toSorted((a, b) => a.name.localeCompare(b.name));

// const res = sortedUsers(users);
// console.log(res);

// / Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// const getAge = (arr)=> arr.filter(item =>item.age>20)
// const res = getAge(user);
// console.log(res);
// /TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];
// const sum = (arr) => arr.reduce((acc,number)=>acc+=number,0)
// const res = sum(numbers);
// console.log(res);

// const data = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [4, 5, 6] },
//     { id: 3, values: [7, 8, 9] },
// ];
// const fn = (arr) => arr.flatMap(item => item.values)
//     .toSorted((a, b) => b - a)
//     .every(number => number % 2 === 0)
// console.log(fn(data));

//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {
//     constructor() {
//         this.result = 0;
//     }

//     number(number) {
//         this.result = number;
//         return this;
//     }

//     getResult() {
//         return this.result;
//     }

//     add(number) {
//         this.result += number;
//         return this;
//     }

//     substruct(number) {
//         this.result -= number;
//         return this;
//     }

//     divide(number) {
//         this.result /= number;
//         return this;
//     }

//     multiply(number) {
//         this.result *= number;
//         return this;
//     }
// }
// const calculator = new Calculator();
// // console.log(calculator);

// const result = calculator
//     .number(10)
//     .add(5)
//     .divide(2)
//     .multiply(4)
//     .substruct(7)
//     .getResult();

// console.log(result);

// const calculator1 = new Calculator();
// const result1 = calculator1
//     .number(5)
//     .add(5)
//     .divide(5)
//     .multiply(4)
//     .substruct(5)
//     .getResult();

// console.log(result1);

//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */


class Client {
  #login;
  #email;

  constructor(email, login) {
    this.#email = email;
    this.#login = login;
  }

  get getEmail() {
    console.log(this.#email);
  }

  set changeEmail(newEmail) {
    this.#email = newEmail;
  }

  get getLogin() {
    console.log(this.#login);
  }

  set changeLogin(newLogin) {
    this.#login = newLogin;
  }
}

const client = new Client("Mango@gmail.com", "Mango");
client.changeEmail = "mango320@gmail.com";
client.changeLogin = "Mango320";
console.log(client.getEmail);
console.log(client.getLogin);

// class Client {
//     #login;
//     #email;

//     constructor(email, login) {
//         this.#email = email;
//         this.#login = login;
//     }

//     get getEmail() {
//         console.log(this.#email);
//     }

//     set changeEmail(newEmail) {
//         this.#email = newEmail;
//     }

//     get getLogin() {
//         console.log(this.#login);
//     }

//     set changeLogin(newLogin) {
//         this.#login = newLogin;
//     }
// }

// const client = new Client("Mango@gmail.com", "Mango");
// client.changeEmail = "mango320@gmail.com";
// client.changeLogin = "Mango320";
// console.log(client.getEmail);
// console.log(client.getLogin);

//TODO:=========task-03=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }
// const mango = new Person("Mango", 30, "male", "mango@gmail.com");
// console.log(mango.getDetails());

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, 
   зарплатою та відділом, в якому працює співробітник.
  |============================
*/

// class Employee extends Person {
//   constructor(salary, department, name, age, gender, email) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }

//   getEmployeeDetails() {
//     return {
//       ...this.getDetails(),
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const employee = new Employee(
//   5000,
//   "developer",
//   "Bob",
//   35,
//   "male",
//   "bob@gmail.com"
// );

// console.log(employee.getEmployeeDetails());

