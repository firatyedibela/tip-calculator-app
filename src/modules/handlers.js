import { calculatorDOM } from './dom';
import { formValidator } from './form';

export const handlers = (function () {
  function handleInputBlur() {
    if (formValidator.validate()) {
      calculatorDOM.renderResults(formValidator.formData);
    }
  }

  function handleOptionBtnClick(e) {
    document
      .querySelector('.calculator__input--custom')
      .classList.remove('tip-option-selected');

    if (formValidator.validate()) {
      calculatorDOM.renderResults(formValidator.formData);
    }
  }

  function handleInputKeyDown(e) {
    if (e.key === 'Enter' && formValidator.validate()) {
      calculatorDOM.renderResults(formValidator.formData);
    }
  }

  function resetSelectedOption(tipOptions) {
    tipOptions.forEach((option) => (option.checked = false));
  }

  return {
    handleInputBlur,
    handleOptionBtnClick,
    handleInputKeyDown,
    resetSelectedOption,
  };
})();
