import { formValidator } from './modules/form';
import { calculatorDOM } from './modules/dom';

const inputs = document.querySelectorAll('.calculator__input');
const tipOptionButtons = document.querySelectorAll(
  '.calculator__tip-option-btn'
);
const customTipInput = document.querySelector('.calculator__input--custom');

inputs.forEach((input) => {
  input.addEventListener('blur', handleInputChange);
});

tipOptionButtons.forEach((option) => {
  option.addEventListener('click', handleOptionBtnClick);
});

customTipInput.addEventListener('click', (e) => {
  calculatorDOM.resetSelectedOption();
  e.target.classList.add('tip-option-selected');
});

function handleInputChange() {
  if (formValidator.validate()) {
    calculatorDOM.renderResults(formValidator.formData);
  }
}

function handleOptionBtnClick(e) {
  calculatorDOM.resetSelectedOption();
  e.target.classList.add('tip-option-selected');
  if (formValidator.validate()) {
    calculatorDOM.renderResults(formValidator.formData);
  }
}
