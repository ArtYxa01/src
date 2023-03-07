const refs = {
    value: document.querySelector('#value'),
    reduceClickButton: document.querySelector('[data-action="decrement"]'),
    addClickButton: document.querySelector('[data-action="increment"]'),
};
let counterValue=0
refs.reduceClickButton.addEventListener('click', (event) => {
  refs.counterValue.textContent -= counterValue;
  });
refs.addClickButton.addEventListener('click', (event) => {
let total = parseInt(refs.counterValue.textContent);
refs.counterValue.textContent = total + 1;
});