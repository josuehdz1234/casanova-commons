"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDropzone = require("react-dropzone");
var _formik = require("formik");
var _classnames = _interopRequireDefault(require("classnames"));
var _Icons = require("../Icons");
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
function DropzoneInput(_ref) {
  var id = _ref.id,
    name = _ref.name,
    className = _ref.className,
    label = _ref.label,
    onlyError = _ref.onlyError,
    accept = _ref.accept,
    multiple = _ref.multiple,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled;
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var touched = meta.touched,
    error = meta.error;
  var onDrop = (0, _react.useCallback)(function (acceptedFiles) {
    if (!multiple && acceptedFiles.length === 1) {
      helpers.setValue(URL.createObjectURL(acceptedFiles[0]));
    }
  }, [multiple, helpers]);
  var _useDropzone = (0, _reactDropzone.useDropzone)({
      multiple: multiple,
      onDrop: onDrop,
      accept: accept
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps;
  var hasError = onlyError ? error : touched && error;
  var hasValue = typeof field.value !== 'undefined';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group single-image-input "
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-label', hasError && error && 'text-danger'),
    htmlFor: id
  }, hasError ? error : label), /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "image-input ".concat(disabled ? 'disabled' : '')
  }, getRootProps()), hasValue ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", {
    className: "img-fluid",
    src: field.value
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('image-input-layover', disabled && 'disabled')
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Refresh, null))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "image-input-icon"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Car, null)), /*#__PURE__*/_react["default"].createElement("span", {
    className: "image-input-placeholder mt-2"
  }, placeholder, " ")), /*#__PURE__*/_react["default"].createElement("input", _extends({}, getInputProps(), {
    disabled: disabled
  }))));
}
var _default = DropzoneInput;
exports["default"] = _default;