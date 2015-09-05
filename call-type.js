'use strict';


var callType = (function app(window, undefined){

  /**
   * callType
   * @param arg - check type of arg
   * @return {string} call type of arg(UPPERCASE)
   */
  function callType(arg){
    var OBJECT    = ['[object Object]', 'OBJECT'],
        ARRAY     = ['[object Array]', 'ARRAY'],
        STRING    = ['[object String]', 'STRING'],
        FUNCTION  = ['[object Function]', 'FUNCTION'],
        NUMBER    = ['[object Number]', 'NUMBER'],
        DATE      = ['[object Date]', 'DATE'],
        BOOLEAN   = ['[object Boolean]', 'BOOLEAN'],
        UNDEFINED = ['[object Undefined]', 'UNDEFINED'],
        NULL      = ['[object Null]', 'NULL'];
    var TYPEARRAY = [OBJECT, ARRAY, STRING, FUNCTION, NUMBER, DATE, BOOLEAN, UNDEFINED, NULL];
    var _type = {}.toString;
    var argtype = _type.call(arg);
    var i   = 0,
        len = TYPEARRAY.length;
    while(i < len){
      if(argtype === TYPEARRAY[i][0]){
        return TYPEARRAY[i][1];
      }
      i = (i + 1) | 0;
    }
  }
  return callType;
})(typeof window != 'undefined' ? window : {});

if(typeof module != 'undefined' && module !== null && module.exports){
  module.exports = callType;
}
else if(typeof define === 'function' && define.amd){
  define(function(){
    return callType;
  });
}