/* -----DEVELOP BRANCH----- */
import { handlers } from './modules/handlers';

const inputs = document.querySelectorAll('.calculator__input');
const customTipInput = document.querySelector('.calculator__input--custom');
const radioTipOptions = document.querySelectorAll('.calculator__radio');

inputs.forEach((input) => {
  input.addEventListener('blur', handlers.handleInputBlur);
  input.addEventListener('keydown', handlers.handleInputKeyDown);
});

radioTipOptions.forEach((option) => {
  option.addEventListener('click', handlers.handleOptionBtnClick);
});

customTipInput.addEventListener('click', (e) => {
  e.target.classList.add('tip-option-selected');
});
