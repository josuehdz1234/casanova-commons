"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _formik = require("formik");
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["id", "name", "label", "placeholder", "disabled", "min", "max"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function PlusMinusInput(props) {
  var id = props.id,
    name = props.name,
    label = props.label,
    placeholder = props.placeholder,
    disabled = props.disabled,
    min = props.min,
    max = props.max,
    rest = _objectWithoutProperties(props, _excluded);
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var error = meta.error,
    touched = meta.touched;
  var hasError = touched && error;
  var handleChange = (0, _react.useCallback)(function (e) {
    var inputValue = e.target.value;
    var isDigit = /^\d*$/.test(inputValue);
    if (isDigit) {
      helpers.setValue(inputValue);
    }
  });
  var handleIncrease = (0, _react.useCallback)(function (e) {
    var value = parseInt(field.value);
    if (isNaN(value)) {
      helpers.setValue(String(min || 0));
    } else if (max && value + 1 > max) {
      helpers.setValue(max);
    } else {
      helpers.setValue(String(value + 1));
    }
    e.preventDefault();
  });
  var handleDecrease = (0, _react.useCallback)(function (e) {
    var value = parseInt(field.value);
    if (isNaN(value) || value - 1 < min) {
      helpers.setValue(String(min || 0));
    } else {
      helpers.setValue(String(value - 1));
    }
    e.preventDefault();
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-label', hasError && error && 'text-danger'),
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "col-2 col-md-2 btn btn-outline btn-plus-minus",
    onClick: handleDecrease,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement("span", null, "-")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-8 col-md-8"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "number",
    className: "form-control text-center",
    placeholder: placeholder
  }, field, {
    onChange: handleChange,
    value: field.value || '',
    disabled: true
  }, rest))), /*#__PURE__*/_react["default"].createElement("button", {
    className: "col-2 col-md-2 btn btn-outline btn-plus-minus",
    onClick: handleIncrease,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement("span", null, "+")))), hasError && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-error', hasError && error && 'text-danger'),
    htmlFor: id
  }, hasError));
}
var _default = PlusMinusInput;
exports["default"] = _default;