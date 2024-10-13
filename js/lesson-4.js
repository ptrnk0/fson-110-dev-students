// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const randomNumber = (number) => Math.floor(Math.random() * number) + 1;

const userContainer = document.querySelector(".input-wrapper");
const inputEl = document.querySelector(".number-input");
const btnEl = document.querySelector(".number-btn");

const container = document.createElement("div");
container.classList.add("number-container");

btnEl.addEventListener("click", (event) => {
  const blocks = Number(inputEl.value.trim());

  container.innerHTML = "";
  for (let i = 0; i < blocks; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("number");
    divEl.textContent = randomNumber(blocks);
    if (divEl.textContent % 2 === 0) {
      divEl.classList.add("even");
    } else {
      divEl.classList.add("odd");
    }
    container.appendChild(divEl);
  }
});

// console.log(bodyEl);

// bodyEl.insertAdjacentHTML("beforebegin", container);  Не працює через createEl

// bodyEl.after(container);

// bodyEl.before(container);
// bodyEl.append(container);
// bodyEl.prepend(container)

userContainer.after(container);

// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

// Приклад елементу списку
// <li id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>
const watchedFilms = ["film_2", "film_4", "film_5"];

function createMarkup(arr) {
  return arr
    .map(
      (item) =>
        `<li id="${item.id}">
      <img src="${item.imgUrl}" alt="${item.title}" />
      <p>${item.title}</p>
    </li>`
    )
    .join("");
}
console.log(createMarkup(films));
const filmListEl = document.querySelector(".film-list");
// filmListEl.innerHTML = createMarkup(films);
filmListEl.insertAdjacentHTML("beforeend", createMarkup(films));

watchedFilms.forEach((item) => {
  const film = filmListEl.querySelector(`#${item}`);
  film.style.opacity = 0.5;
});

//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const accordionL = document.querySelector(".accordion-list");

accordionL.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  event.target.nextElementSibling.classList.toggle("active");
}

const modBtn = document.querySelector(".modal-btn");

modBtn.addEventListener("click", onModalClick);
const bodyEl = document.body;
let instance = null;
function onModalClick(evt) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
  `,
    {
      onShow: () => {
        bodyEl.style.overflow = "hidden";
        document.addEventListener("keydown", onEscClick);
      },
      onClose: () => {
        bodyEl.style.overflow = "visible";
        document.removeEventListener("keydown", onEscClick);
      },
    }
  );
  instance.show();
}

function onEscClick(evt) {
  if (evt.code !== "Escape") {
    return;
  }
  instance.close();
  console.log("Escape");
}
