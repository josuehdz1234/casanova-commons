"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSpaces = exports.removeAccents = exports.getWithHoursFormat = void 0;
var removeAccents = function removeAccents(string) {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
exports.removeAccents = removeAccents;
var removeSpaces = function removeSpaces(string) {
  return string.replace(/\s/g, '');
};
exports.removeSpaces = removeSpaces;
var getWithHoursFormat = function getWithHoursFormat(string) {
  return "".concat(string, " HRS");
};
exports.getWithHoursFormat = getWithHoursFormat;