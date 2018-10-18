/**
 * Just for IE
 * Provides a polyfill for Nodelist.prototype.forEach() to all Browsers supporting ES5.
 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}



export function numberWithCommas (amount) {
  let parts = amount.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};


export function getQuote (amountBase, exchangeRate) {
  if (amountBase && !isNaN(amountBase)) {
    return (parseFloat(amountBase) * exchangeRate);
  }

  return 0;
}