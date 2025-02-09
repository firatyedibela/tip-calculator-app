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

    console.log(isBillValid && isPeopleValid && isTipValid);

    return isBillValid && isPeopleValid && isTipValid;
  }

  function validateTip() {
    const radioTipOptions = Array.from(
      document.querySelectorAll('.calculator__radio')
    );
    const customTipOptionInput = document.querySelector(
      '.calculator__input--custom '
    );

    const selectedRadioOption = radioTipOptions.find((radio) => radio.checked);

    if (
      customTipOptionInput.classList.contains('tip-option-selected') &&
      customTipOptionInput.value !== '' &&
      Number(customTipOptionInput.value) >= 0
    ) {
      formData.tip = Number(customTipOptionInput.value);
      if (selectedRadioOption) {
        selectedRadioOption.checked = false;
      }
    } else if (selectedRadioOption) {
      formData.tip = Number(selectedRadioOption.value);
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
      calculatorDOM.renderErrorState(inputElement);
      return false;
    } else {
      calculatorDOM.removeErrorState(inputElement);
      return true;
    }
  }

  return {
    validate,
    formData,
  };
})();
