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

  function renderErrorState(inputElement) {
    inputElement.classList.add('calculator__input--error');

    document
      .querySelector(`#${inputElement.id}-error`)
      .classList.add('calculator__error-msg--active');

    console.log('deactivating reset button');
    deactivateResetButton();
  }

  function removeErrorState(inputElement) {
    inputElement.classList.remove('calculator__input--error');

    document
      .querySelector(`#${inputElement.id}-error`)
      .classList.remove('calculator__error-msg--active');
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

    const radioTipOptions = Array.from(
      document.querySelectorAll('.calculator__radio')
    );
    const selectedRadioOption = radioTipOptions.find(
      (button) => button.checked
    );
    if (selectedRadioOption) {
      selectedRadioOption.checked = false;
    }
  }

  function resetResults() {
    document.querySelector('#tip-display').textContent = '$0.00';
    document.querySelector('#total-display').textContent = '$0.00';
  }

  return {
    renderResults,
    renderErrorState,
    removeErrorState,
  };
})();
