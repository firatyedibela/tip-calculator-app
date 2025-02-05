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

    activateResetButton();
  }

  function resetApp() {
    resetResults();
    resetForm();

    deactivateResetButton();
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

  function activateResetButton() {
    const btn = document.querySelector('.calculator__reset-btn');
    btn.classList.add('calculator__reset-btn--active');
    btn.addEventListener('click', resetApp);
  }

  function deactivateResetButton() {
    const btn = document.querySelector('.calculator__reset-btn');
    btn.classList.remove('calculator__reset-btn--active');
  }

  function resetForm() {
    document.querySelector('#bill').value = '';
    document.querySelector('#people').value = '';

    const customTip = document.querySelector('#custom-tip');
    customTip.value = '';

    const tipOptions = Array.from(document.querySelectorAll('.tip-option'));
    const selectedTipOption = tipOptions.find((option) =>
      option.classList.contains('tip-option-selected')
    );

    selectedTipOption.classList.remove('tip-option-selected');
  }

  function resetResults() {
    document.querySelector('#tip-display').textContent = '$0.00';
    document.querySelector('#total-display').textContent = '$0.00';
  }

  return {
    renderResults,
    renderErrorMsg,
    removeErrorMsg,
    resetSelectedOption,
  };
})();
