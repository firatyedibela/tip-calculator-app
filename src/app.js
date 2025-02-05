import { calculatorDOM } from './modules/dom';
import { handlers } from './modules/handlers';

const inputs = document.querySelectorAll('.calculator__input');
const customTipInput = document.querySelector('.calculator__input--custom');
const tipOptionButtons = document.querySelectorAll(
  '.calculator__tip-option-btn'
);

inputs.forEach((input) => {
  input.addEventListener('blur', handlers.handleInputChange);
  input.addEventListener('keydown', handlers.handleInputKeyDown);
});

tipOptionButtons.forEach((option) => {
  option.addEventListener('click', handlers.handleOptionBtnClick);
});

customTipInput.addEventListener('click', (e) => {
  calculatorDOM.resetSelectedOption();
  e.target.classList.add('tip-option-selected');
});
