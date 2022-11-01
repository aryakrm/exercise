const model = {
  Book: 0,
};

const qs = (e) => document.querySelector(e);

const userInput = qs(".user-input");
const btn = qs(".btn");
const title = qs(".title");

btn.addEventListener("click", (e) => {
  const item = userInput.value;
  console.log(item);
  const json = JSON.stringify(item);
  localStorage.setItem("Book", json);
  model = { ...model, localStorage };
  title.textContent = `${item}`;
  console.log(item);
  e.preventDefault();
});
