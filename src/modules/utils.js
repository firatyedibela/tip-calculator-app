export const utils = (function () {
  function calculateTip(bill, tipRate) {
    return (bill * tipRate) / 100;
  }

  return {
    calculateTip,
  };
})();
