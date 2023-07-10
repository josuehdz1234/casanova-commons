"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xmlRule = exports.pdfRule = exports.TEXT_AREA_NOT_ALLOWED_CHARACTERS_PUNCTUATION_MARKS = exports.TEXT_AREA_NOT_ALLOWED_CHARACTERS = exports.REQUIRED_MESSAGE = void 0;
var pdfRule = function pdfRule(file) {
  return file && file.type === 'application/pdf';
};
exports.pdfRule = pdfRule;
var xmlRule = function xmlRule(file) {
  return file && (file.type === 'application/xml' || file.type === 'text/xml');
};
exports.xmlRule = xmlRule;
var TEXT_AREA_NOT_ALLOWED_CHARACTERS = /[()[\]|&;$%@#"{}¿!¡?^/\\|<>+~=`':*¨]/g; // NOSONAR
exports.TEXT_AREA_NOT_ALLOWED_CHARACTERS = TEXT_AREA_NOT_ALLOWED_CHARACTERS;
var TEXT_AREA_NOT_ALLOWED_CHARACTERS_PUNCTUATION_MARKS = /[()[\]|&$%@#"{}^/\\|<>+~=`*¨]/g; // NOSONAR
exports.TEXT_AREA_NOT_ALLOWED_CHARACTERS_PUNCTUATION_MARKS = TEXT_AREA_NOT_ALLOWED_CHARACTERS_PUNCTUATION_MARKS;
var REQUIRED_MESSAGE = 'Este campo es obligatorio.';
exports.REQUIRED_MESSAGE = REQUIRED_MESSAGE;