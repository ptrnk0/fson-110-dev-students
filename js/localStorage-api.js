// console.log(localStorage);
// console.log(localStorage.length);
// localStorage.setItem("test", true);
// console.log(typeof localStorage.getItem("test"));
// localStorage.setItem("test2", JSON.stringify([1, 2]));
// console.log(JSON.parse(localStorage.getItem("test2")));
// console.log(localStorage.getItem("test3"));

export function addDataToLocalStorage(key, value) {
  try {
    const seriallizeState = JSON.stringify(value);
    localStorage.setItem(key, seriallizeState);
  } catch (error) {
    console.log(error);
  }
}
// addDataToLocalStorage("test", false);
// addDataToLocalStorage("test2", { name: "Bob" });
// addDataToLocalStorage("test3", false);

export function getDataFromLocalStorage(key) {
  try {
    const seriallizeState = localStorage.getItem(key);
    return seriallizeState === null ? undefined : JSON.parse(seriallizeState);
  } catch (error) {
    console.log(error);
  }
}
// console.log(typeof getDataFromLocalStorage("test"));
// console.log(getDataFromLocalStorage("test2"));
// console.log(getDataFromLocalStorage("test3"));

export function removeDataFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}
// removeDataFromLocalStorage("test2");
