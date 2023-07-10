"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usernameSchema = exports.username = exports.uniqueUsername = exports.uniquePhoneNumber = exports.uniqueEmail = exports.requiredSearch = exports.phoneSchema = exports.phoneNumber = exports.getInitialValues = exports.getInitialTouched = exports.emailSchema = exports.email = exports.cellphone = exports.UniquePhoneSchema = exports.UniqueEmailSchema = void 0;
var Yup = _interopRequireWildcard(require("yup"));
var _i18n = _interopRequireDefault(require("../i18n"));
var _constants = require("../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cellphone = Yup.string().min(10, _constants.PHONE_LENGTH);
exports.cellphone = cellphone;
var email = Yup.string().min(5, _constants.EMAIL_LENGHT_MIN).max(50, _constants.EMAIL_LENGHT_MAX).email(_constants.EMAIL_NOT_VALID);
exports.email = email;
var getInitialValues = function getInitialValues(_ref) {
  var _ref$fields = _ref.fields,
    fields = _ref$fields === void 0 ? [] : _ref$fields;
  return Object.values(fields).reduce(function (acc) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    acc[value] = '';
    return acc;
  }, {});
};
exports.getInitialValues = getInitialValues;
var getInitialTouched = function getInitialTouched(_ref2) {
  var _ref2$fields = _ref2.fields,
    fields = _ref2$fields === void 0 ? [] : _ref2$fields;
  return Object.values(fields).reduce(function (acc, value) {
    acc[value] = true;
    return acc;
  }, {});
};
exports.getInitialTouched = getInitialTouched;
var phoneNumber = Yup.string().required(_constants.REQUIRED_MESSAGE).min(10, _constants.PHONE_LENGTH);
exports.phoneNumber = phoneNumber;
var uniquePhoneNumber = phoneNumber.test('unique-phone', (0, _i18n["default"])('ERROR__COMMONS__CELLPHONE__NO_UNIQUE'), function validate(value) {
  if (!value) return true;
  var isUniquePhone = this.parent.isUniquePhone;
  if (typeof isUniquePhone === 'undefined') return true;
  return isUniquePhone;
});
exports.uniquePhoneNumber = uniquePhoneNumber;
var uniqueEmail = email.required(_constants.REQUIRED_MESSAGE).test('unique-email', (0, _i18n["default"])('ERROR__COMMONS__EMAIL__NO_UNIQUE'), function validate(value) {
  if (!value) return true;
  var isUniqueEmail = this.parent.isUniqueEmail;
  if (typeof isUniqueEmail === 'undefined') return true;
  return isUniqueEmail;
});
exports.uniqueEmail = uniqueEmail;
var emailSchema = Yup.object().shape({
  email: email.required(_constants.REQUIRED_MESSAGE)
});
exports.emailSchema = emailSchema;
var UniqueEmailSchema = Yup.object().shape({
  email: uniqueEmail
});
exports.UniqueEmailSchema = UniqueEmailSchema;
var UniquePhoneSchema = Yup.object().shape({
  cellphone: cellphone.required(_constants.REQUIRED_MESSAGE)
});
exports.UniquePhoneSchema = UniquePhoneSchema;
var phoneSchema = Yup.object().shape({
  cellphone: phoneNumber
});
exports.phoneSchema = phoneSchema;
var username = Yup.string().required(_constants.REQUIRED_MESSAGE).min(4, _constants.USERNAME_LENGHT);
exports.username = username;
var uniqueUsername = username.required(_constants.REQUIRED_MESSAGE).test('unique-username', (0, _i18n["default"])('ERROR__COMMONS__USERNAME__NO_UNIQUE'), function validate(value) {
  if (!value) return true;
  var isUniqueUsername = this.parent.isUniqueUsername;
  if (typeof isUniqueUsername === 'undefined') return true;
  return isUniqueUsername;
});
exports.uniqueUsername = uniqueUsername;
var usernameSchema = Yup.object().shape({
  username: username
});
exports.usernameSchema = usernameSchema;
var requiredSearch = function requiredSearch(path) {
  return function (value) {
    return value && this.parent[path];
  };
};
exports.requiredSearch = requiredSearch;