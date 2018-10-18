module.exports = function getQuote (amountBase, exchangeRate) {
  if (amountBase && !isNaN(amountBase)) {
    return (parseFloat(amountBase) * exchangeRate);
  }

  return 0;
}