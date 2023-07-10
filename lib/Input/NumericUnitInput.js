"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _formik = require("formik");
var _classnames = _interopRequireDefault(require("classnames"));
var _excluded = ["unit", "className", "id", "name", "label", "right", "left"];
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
function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','); // NOSONAR
}

function formatUnit(rawValue) {
  var value = rawValue.replace(/[^0-9\.]/g, '');
  if (value) {
    var decimalPos = value.indexOf('.');
    if (decimalPos > -1) {
      var integers = value.substring(0, decimalPos);
      var allDecimals = value.substring(decimalPos + 1);
      var decimals = allDecimals.substring(0, 1);
      return {
        mask: "".concat(formatNumber(integers), ".").concat(formatNumber(decimals)),
        value: "".concat(integers, ".").concat(decimals)
      };
    }
    return {
      mask: "".concat(formatNumber(value)),
      value: value
    };
  }
  return {
    mask: '',
    value: ''
  };
}
function UnitInput(props) {
  var unit = props.unit,
    className = props.className,
    id = props.id,
    name = props.name,
    label = props.label,
    right = props.right,
    left = props.left,
    rest = _objectWithoutProperties(props, _excluded);
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var error = meta.error,
    touched = meta.touched;
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    mask = _useState2[0],
    setMask = _useState2[1];
  var hasError = touched && error;
  var icn = (0, _classnames["default"])('form-control', hasError && 'is-invalid', right && 'input-group-br-no', left && 'input-group-bl-no');
  (0, _react.useEffect)(function () {
    if (field.value) {
      var _formatUnit = formatUnit(String(field.value)),
        _mask = _formatUnit.mask;
      setMask(_mask);
    }
  }, []);
  var handleChange = (0, _react.useCallback)(function (e) {
    var target = e.target;
    var _formatUnit2 = formatUnit(target.value),
      mask = _formatUnit2.mask,
      value = _formatUnit2.value;
    helpers.setValue(value);
    setMask(mask);
  }, []);
  var handleBlur = (0, _react.useCallback)(function (e) {
    var target = e.target;
    var _formatUnit3 = formatUnit(target.value),
      mask = _formatUnit3.mask,
      value = _formatUnit3.value;
    helpers.setTouched(true);
    helpers.setValue(value);
    setMask(mask);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group ".concat(className || '', " ")
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-label', hasError && error && 'text-danger'),
    htmlFor: id
  }, hasError || label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    className: icn
  }, field, {
    onBlur: handleBlur,
    onChange: handleChange,
    value: typeof mask === 'undefined' ? field.value : mask
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "input-group-text"
  }, unit))));
}
UnitInput.propTypes = {
  unit: _propTypes["default"].string
};
UnitInput.defaultProps = {
  unit: 'cm'
};
var _default = UnitInput;
exports["default"] = _default;