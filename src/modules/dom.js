import { utils } from './utils';

export const calculatorDOM = (function () {
  function renderResults(data) {
    const { bill, people, tip } = data;

    const totalTip = utils.calculateTip(bill, tip);

    const tipPerPerson = totalTip / people;
    const totalPerPerson = (bill + totalTip) / people;

    document.querySelector(
      '#tip-display'
    ).textContent = `$${tipPerPerson.toFixed(2)}`;

    document.querySelector(
      '#total-display'
    ).textContent = `$${totalPerPerson.toFixed(2)}`;
  }

  function renderErrorMsg(inputElement) {
    document
      .querySelector(`#${inputElement.id}-error`)
      .classList.add('calculator__error-msg--active');
  }

  function removeErrorMsg(inputElement) {
    document
      .querySelector(`#${inputElement.id}-error`)
      .classList.remove('calculator__error-msg--active');
  }

  function resetSelectedOption() {
    document.querySelectorAll('.tip-option').forEach((option) => {
      option.classList.remove('tip-option-selected');
    });
  }

  return {
    renderResults,
    renderErrorMsg,
    removeErrorMsg,
    resetSelectedOption,
  };
})();
