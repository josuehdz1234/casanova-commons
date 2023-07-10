"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _esMXCommons = _interopRequireDefault(require("./es-MX-commons.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CODES = {
  MX: 'es-MX'
};
var languages = _defineProperty({}, CODES.MX, _esMXCommons["default"]);
var getLocaleCode = function getLocaleCode() {
  return CODES.MX;
};
var replaceAllVars = function replaceAllVars(message, elements) {
  elements.forEach(function (element, index) {
    // eslint-disable-next-line no-param-reassign
    message = message.replace("%".concat(index + 1), element);
  });
  return message;
};
var I18n = function I18n(key) {
  var replaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var locale = languages[getLocaleCode()];
  if (replaces.length === 0) return locale[key];
  return replaceAllVars(locale[key], replaces);
};
var _default = I18n;
exports["default"] = _default;