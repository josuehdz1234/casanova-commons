"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNumberInput = formatNumberInput;
exports.groupNumber = groupNumber;
function groupNumber(n) {
  return n !== '' ? n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''; // NOSONAR
}

function formatNumberInput(rawValue) {
  var dec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maskPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '$ ';
  var maskSuffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var value = rawValue.replace(/[^0-9\.]/g, '');
  if (value) {
    if (window.parseInt(value) === 0) {
      return {
        mask: '0',
        value: '0'
      };
    }
    var decimalPos = value.indexOf('.');
    if (decimalPos > -1) {
      var integers = value.substring(0, decimalPos);
      var allDecimals = value.substring(decimalPos + 1);
      var decimals = dec ? allDecimals.substring(0, dec) : '';
      var point = "".concat(dec ? '.' : '');
      var mask = "".concat(maskPrefix).concat(groupNumber(integers)).concat(point).concat(groupNumber(decimals)).concat(maskSuffix);
      return {
        mask: mask,
        value: "".concat(integers).concat(point).concat(decimals)
      };
    }
    return {
      mask: "".concat(maskPrefix).concat(groupNumber(value)).concat(maskSuffix),
      value: value
    };
  }
  return {
    mask: '',
    value: ''
  };
}