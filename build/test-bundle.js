(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var callType = (function app(window, undefined) {

  function callType(arg) {
    var OBJECT = ['[object Object]', 'OBJECT'],
        ARRAY = ['[object Array]', 'ARRAY'],
        STRING = ['[object String]', 'STRING'],
        FUNCTION = ['[object Function]', 'FUNCTION'],
        NUMBER = ['[object Number]', 'NUMBER'],
        DATE = ['[object Date]', 'DATE'],
        BOOLEAN = ['[object Boolean]', 'BOOLEAN'],
        UNDEFINED = ['[object Undefined]', 'UNDEFINED'],
        NULL = ['[object Null]', 'NULL'];
    var TYPEARRAY = [OBJECT, ARRAY, STRING, FUNCTION, NUMBER, DATE, BOOLEAN, UNDEFINED, NULL];
    var _type = ({}).toString;
    var argtype = _type.call(arg);
    var i = 0,
        len = TYPEARRAY.length;
    while (i < len) {
      if (argtype === TYPEARRAY[i][0]) {
        return TYPEARRAY[i][1];
      }
      i = i + 1 | 0;
    }
  }
  return callType;
})(typeof window != 'undefined' ? window : {});

if (typeof module != 'undefined' && module !== null && module.exports) {
  module.exports = callType;
} else if (typeof define === 'function' && define.amd) {
  define(function () {
    return callType;
  });
}

},{}],2:[function(require,module,exports){
'use strict';

window.callType = require('./call-type.js');

},{"./call-type.js":1}]},{},[2])


//# sourceMappingURL=test-bundle.js.map