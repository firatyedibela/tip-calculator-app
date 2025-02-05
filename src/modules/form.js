import { calculatorDOM } from './dom';

export const formValidator = (function () {
  const formData = {
    bill: null,
    people: null,
    tip: null,
  };

  function validate() {
    const isTipValid = validateTip();
    const isBillValid = validateBill();
    const isPeopleValid = validatePeople();

    return isBillValid && isPeopleValid && isTipValid;
  }

  function validateTip() {
    const tipOptionButtons = Array.from(
      document.querySelectorAll('.calculator__tip-option-btn')
    );
    const tipOptionInput = document.querySelector(
      '.calculator__input--custom '
    );

    const selectedButton = tipOptionButtons.find((button) =>
      button.classList.contains('tip-option-selected')
    );

    if (selectedButton) {
      formData.tip = Number(selectedButton.dataset.value);
    } else if (
      tipOptionInput.classList.contains('tip-option-selected') &&
      tipOptionInput.value !== '' &&
      Number(tipOptionInput.value) >= 0
    ) {
      formData.tip = Number(tipOptionInput.value);
    } else {
      return false;
    }
    return true;
  }

  function validateBill() {
    const billInput = document.querySelector('#bill');
    if (validateInput(billInput)) {
      formData.bill = Number(billInput.value);
      return true;
    }

    return false;
  }

  function validatePeople() {
    const peopleInput = document.querySelector('#people');
    if (validateInput(peopleInput)) {
      formData.people = Number(peopleInput.value);
      return true;
    }

    return false;
  }

  function validateInput(inputElement) {
    if (inputElement.value === '') {
      return false;
    } else if (Number(inputElement.value) === 0) {
      calculatorDOM.renderErrorMsg(inputElement);
      return false;
    } else {
      calculatorDOM.removeErrorMsg(inputElement);
      return true;
    }
  }

  return {
    validate,
    formData,
  };
})();
