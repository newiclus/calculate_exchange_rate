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



/**
 * Transfers sessionStorage from one tab to another
 */
var sessionStorage_transfer = function(event) {

  if (!event) { event = window.event; } // ie suq
  if (!event.newValue) return;          // do nothing if no value to work with

  if (event.key == 'getSessionStorage') {
    // another tab asked for the sessionStorage -> send it
    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
    // the other tab should now have it, so we're done with it.
    localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
  } 
  else if (event.key == 'sessionStorage' && !sessionStorage.length) {
    // another tab sent data <- get it
    var data = JSON.parse(event.newValue);
    for (var key in data) {
      sessionStorage.setItem(key, data[key]);
    }
  }
};
/**
 * listen for changes to localStorage
 */
if (window.addEventListener) {
  window.addEventListener("storage", sessionStorage_transfer, false);
} else {
  window.attachEvent("onstorage", sessionStorage_transfer);
};
/**
 * Ask other tabs for session storage (this is ONLY to trigger event)
 */
if (!sessionStorage.length) {
  localStorage.setItem('getSessionStorage', 'foobar');
  localStorage.removeItem('getSessionStorage', 'foobar');
};




/**
 * Just for IE
 * Provides a polyfill: Object.assign on IE Browser.
 */
if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}


/**
 * Just for IE
 * Provides a polyfill: String.endsWith on IE Browser.
 */
if (typeof String.endsWith != 'function') {
  String.prototype.endsWith = function(pattern) {
    var d = this.length - pattern.length;
    return d >= 0 && this.lastIndexOf(pattern) === d;
  };
}