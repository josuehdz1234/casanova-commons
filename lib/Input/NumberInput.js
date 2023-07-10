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
var _inputs = require("../utils/inputs");
var _excluded = ["max", "decimals", "className", "id", "name", "label", "right", "left", "placeholder", "onlyError", "maskPrefix", "maskSuffix", "min", "onChangeWithMaskValue", "showLabel", "showPlaceholder"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function NumberInput(props) {
  var max = props.max,
    decimals = props.decimals,
    className = props.className,
    id = props.id,
    name = props.name,
    label = props.label,
    right = props.right,
    left = props.left,
    placeholder = props.placeholder,
    onlyError = props.onlyError,
    maskPrefix = props.maskPrefix,
    maskSuffix = props.maskSuffix,
    min = props.min,
    _props$onChangeWithMa = props.onChangeWithMaskValue,
    onChangeWithMaskValue = _props$onChangeWithMa === void 0 ? null : _props$onChangeWithMa,
    showLabel = props.showLabel,
    showPlaceholder = props.showPlaceholder,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    mask = _useState2[0],
    setMask = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    hasContent = _useState4[0],
    setHasContent = _useState4[1];
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var error = meta.error,
    touched = meta.touched,
    initialValue = meta.initialValue;
  var handleChange = (0, _react.useCallback)(function (e) {
    var target = e.target;
    var _formatNumber = (0, _inputs.formatNumberInput)(target.value, decimals, maskPrefix),
      mask = _formatNumber.mask,
      value = _formatNumber.value;
    if (max && value > max) {
      return;
    }
    if (onChangeWithMaskValue) {
      onChangeWithMaskValue({
        value: value,
        name: target.name
      });
    } else {
      helpers.setValue(value);
    }
    setMask(mask);
    setHasContent(target.value && target.value !== '' || field.value === 0);
  }, [onChangeWithMaskValue, helpers]);
  var handleBlur = (0, _react.useCallback)(function (e) {
    var target = e.target;
    var _formatNumber2 = (0, _inputs.formatNumberInput)(target.value, decimals, maskPrefix, maskSuffix),
      mask = _formatNumber2.mask,
      value = _formatNumber2.value;
    if (max && value > max) {
      return;
    }
    helpers.setTouched(true);
    helpers.setValue(value);
    setMask(mask);
    setHasContent(target.value && target.value !== '' || field.value === 0);
  }, [helpers]);
  (0, _react.useEffect)(function () {
    if (field.value !== undefined) {
      handleChange({
        target: _objectSpread(_objectSpread({}, field), {}, {
          value: String(field.value)
        })
      });
    }
  }, [field.value]);
  (0, _react.useEffect)(function () {
    if (initialValue) {
      var _formatNumber3 = (0, _inputs.formatNumberInput)(String(initialValue), decimals, maskPrefix),
        _mask = _formatNumber3.mask;
      setMask(_mask);
    } else {
      setMask('');
      setHasContent(false);
    }
  }, [initialValue, rest.disabled]);
  var hasValue = field.value && field.value !== '' || field.value === 0;
  var hasError = touched && error;
  var withContent = hasContent || hasValue;
  var icn = (0, _classnames["default"])('form-control', withContent && 'form-control--with-content', hasError && 'is-invalid', right && 'input-group-br-no', left && 'input-group-bl-no');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group ".concat(className || '', " ")
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-label d-flex justify-content-between', hasError && error && 'text-danger'),
    htmlFor: id
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      visibility: "".concat(withContent || hasError || showLabel ? 'visible' : 'hidden')
    }
  }, label)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-input-group"
  }, left && /*#__PURE__*/_react["default"].createElement("span", {
    className: "left-content"
  }, left), /*#__PURE__*/_react["default"].createElement("input", _extends({
    className: icn
  }, field, {
    onBlur: handleBlur,
    onChange: handleChange,
    placeholder: showPlaceholder ? placeholder : label || placeholder,
    name: name
  }, rest, {
    value: !mask ? field.value : mask
  }))), hasError && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-error', hasError && error && 'text-danger'),
    htmlFor: name
  }, hasError));
}
NumberInput.propTypes = {
  onlyError: _propTypes["default"].bool,
  decimals: _propTypes["default"].number,
  max: _propTypes["default"].number,
  min: _propTypes["default"].number,
  showLabel: _propTypes["default"].bool,
  showPlaceholder: _propTypes["default"].bool
};
NumberInput.defaultProps = {
  onlyError: false,
  decimals: 1,
  max: 0,
  min: 0,
  showLabel: false,
  showPlaceholder: false
};
var _default = NumberInput;
exports["default"] = _default;