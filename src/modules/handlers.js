import { calculatorDOM } from './dom';
import { formValidator } from './form';

export const handlers = (function () {
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

  function handleInputKeyDown(e) {
    if (e.key === 'Enter' && formValidator.validate()) {
      calculatorDOM.renderResults(formValidator.formData);
    }
  }

  return {
    handleInputChange,
    handleOptionBtnClick,
    handleInputKeyDown,
  };
})();
