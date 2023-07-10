"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userMask = exports.textAreaRegex = exports.removeSpaces = exports.onlyLettersWithSpaces = exports.onlyLettersUpperCaseWithSpaces = exports.onlyLettersAndNumbers = exports.numericWithoutDecimal = exports.numericWithDecimalsMask = exports.numericMask = exports.maskNumberToCleanNumber = exports.lettersAndNumbersWithSpaces = exports.lettersAndNumbersAndAccentsWithSpace = exports.hourMask = exports.currencyMask = exports.cardValidityMask = exports.capitalizeFirstChar = exports.alphaMaskWithSpaces = exports.alphaMaskWithPuntuation = exports.alphaMask = exports.alphaEmailMask = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var alphaMask = function alphaMask(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[\w]+$/;
  });
};
exports.alphaMask = alphaMask;
var onlyLettersWithSpaces = function onlyLettersWithSpaces(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[a-zA-Z\s]+$/;
  });
};
exports.onlyLettersWithSpaces = onlyLettersWithSpaces;
var onlyLettersAndNumbers = function onlyLettersAndNumbers(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[a-zA-Z0-9]+$/;
  });
};
exports.onlyLettersAndNumbers = onlyLettersAndNumbers;
var lettersAndNumbersWithSpaces = function lettersAndNumbersWithSpaces(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[a-zA-Z0-9\s]+$/;
  });
};
exports.lettersAndNumbersWithSpaces = lettersAndNumbersWithSpaces;
var lettersAndNumbersAndAccentsWithSpace = function lettersAndNumbersAndAccentsWithSpace(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[a-zA-ZÀ-ÿ\s]*$/g;
  });
};
exports.lettersAndNumbersAndAccentsWithSpace = lettersAndNumbersAndAccentsWithSpace;
var alphaEmailMask = function alphaEmailMask(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[\w@.]+$/;
  });
};
exports.alphaEmailMask = alphaEmailMask;
var alphaMaskWithSpaces = function alphaMaskWithSpaces(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[\w\s]+$/;
  });
};
exports.alphaMaskWithSpaces = alphaMaskWithSpaces;
var alphaMaskWithPuntuation = function alphaMaskWithPuntuation(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[\w\s.,;!¡:']+$/;
  });
};
exports.alphaMaskWithPuntuation = alphaMaskWithPuntuation;
var numericMask = function numericMask(len) {
  return Array.from({
    length: len
  }, function () {
    return /^\d+$/;
  });
};
exports.numericMask = numericMask;
var hourMask = [/^[0-2]+$/, /^[0-9]+$/, ':', /^[0-5]+$/, /^[0-9]+$/, ':', /^[0-5]+$/, /^[0-9]+$/];
exports.hourMask = hourMask;
var cardValidityMask = [/^[0-1]+$/, /^[0-9]+$/, '/', /^[0-9]+$/, /^[0-9]+$/];
exports.cardValidityMask = cardValidityMask;
var numericWithDecimalsMask = function numericWithDecimalsMask(numbers, decimals) {
  return [].concat(_toConsumableArray(numericMask(numbers)), ['.'], _toConsumableArray(numericMask(decimals)));
};
exports.numericWithDecimalsMask = numericWithDecimalsMask;
var currencyMask = function currencyMask(numbers, decimals) {
  return ['$', ' '].concat(_toConsumableArray(numericWithDecimalsMask(numbers, decimals)));
};
exports.currencyMask = currencyMask;
var userMask = function userMask(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[a-zA-Z0-9\-\s]+$/;
  });
};
exports.userMask = userMask;
var capitalizeFirstChar = function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
};
exports.capitalizeFirstChar = capitalizeFirstChar;
var textAreaRegex = new RegExp(/[()[\]|&;$%@#"{}¿!¡?^/\\|<>+~=`':*¨°_]/gi);
exports.textAreaRegex = textAreaRegex;
var numericWithoutDecimal = function numericWithoutDecimal(length) {
  return Array.from({
    length: length
  }, function () {
    return new RegExp(/^[0-9]*$/);
  });
};
exports.numericWithoutDecimal = numericWithoutDecimal;
var onlyLettersUpperCaseWithSpaces = function onlyLettersUpperCaseWithSpaces(len) {
  return Array.from({
    length: len
  }, function () {
    return /^[A-Z\s]+$/;
  });
};
exports.onlyLettersUpperCaseWithSpaces = onlyLettersUpperCaseWithSpaces;
var maskNumberToCleanNumber = function maskNumberToCleanNumber(number) {
  var formatedNumber = typeof number === 'string' ? number.replaceAll(',', '') : number;
  var cleanNumber = Number(formatedNumber);
  return cleanNumber;
};
exports.maskNumberToCleanNumber = maskNumberToCleanNumber;
var removeSpaces = function removeSpaces(string) {
  return string.replace(/\s/g, '');
};
exports.removeSpaces = removeSpaces;