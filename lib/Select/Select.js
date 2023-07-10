"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _formik = require("formik");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var execHandler = function execHandler(handler, e) {
  return handler ? handler(e) : undefined;
};
function Select(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasContent = _useState2[0],
    setHasContent = _useState2[1];
  var disabled = props.disabled,
    className = props.className,
    name = props.name,
    id = props.id,
    label = props.label,
    options = props.options,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    _props$disableLabel = props.disableLabel,
    disableLabel = _props$disableLabel === void 0 ? false : _props$disableLabel,
    _props$availableFirst = props.availableFirstValue,
    availableFirstValue = _props$availableFirst === void 0 ? false : _props$availableFirst,
    value = props.value,
    labelClassName = props.labelClassName,
    optionKeyField = props.optionKeyField,
    multiple = props.multiple,
    _props$showFirstValue = props.showFirstValue,
    showFirstValue = _props$showFirstValue === void 0 ? true : _props$showFirstValue,
    _props$firstValueLabe = props.firstValueLabel,
    firstValueLabel = _props$firstValueLabe === void 0 ? null : _props$firstValueLabe;
  var _useField = (0, _formik.useField)({
      name: name,
      type: 'select'
    }),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var error = meta.error,
    touched = meta.touched;
  var setValue = helpers.setValue,
    setTouched = helpers.setTouched;
  var handleInputFocus = (0, _react.useCallback)(function (e) {
    execHandler(onFocus, e);
  }, [onFocus]);
  var handleInputBlur = (0, _react.useCallback)(function (e) {
    setTouched(true);
    setHasContent(!(0, _isEmpty2["default"])(e.target.value));
    execHandler(onBlur, e);
  }, [setTouched, onBlur]);
  var handleChange = (0, _react.useCallback)(function (e) {
    setValue(e.target.value);
    setHasContent(!(0, _isEmpty2["default"])(e.target.value));
    execHandler(onChange, e);
  }, [setValue, onChange]);
  var hasValue = (0, _react.useMemo)(function () {
    return !(0, _isEmpty2["default"])(field.value);
  }, [field.value]);
  var hasError = (0, _react.useMemo)(function () {
    return touched && error;
  }, [touched, error]);
  var isLabelVisible = (0, _react.useMemo)(function () {
    return hasError || hasContent || hasValue;
  }, [hasError, hasContent, hasValue]);
  var groupCln = (0, _react.useMemo)(function () {
    return (0, _classnames["default"])('form-group', className);
  }, [className]);
  var labelCln = (0, _react.useMemo)(function () {
    return (0, _classnames["default"])('col-form-label', hasError && error && 'text-danger', labelClassName);
  }, [hasError, error, labelClassName]);
  var selectCln = (0, _react.useMemo)(function () {
    return (0, _classnames["default"])('custom-select', (hasContent || hasValue) && 'custom-select--with-content', hasError && 'custom-select--error');
  }, [hasContent, hasValue, hasError]);
  var errorCln = (0, _react.useMemo)(function () {
    return (0, _classnames["default"])('col-form-error', hasError && error && 'text-danger');
  }, [hasError, error]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: groupCln
  }, label && !disableLabel && /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      visibility: "".concat(isLabelVisible ? 'visible' : 'hidden')
    },
    className: labelCln,
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement("select", {
    disabled: disabled,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onChange: handleChange,
    value: value || field.value || '0',
    className: selectCln,
    name: name,
    multiple: multiple
  }, showFirstValue && /*#__PURE__*/_react["default"].createElement("option", {
    disabled: !availableFirstValue,
    value: availableFirstValue ? '' : 0
  }, firstValueLabel || label), options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: optionKeyField ? option[optionKeyField] : option.value,
      disabled: option.disabled,
      value: option.value
    }, option.label);
  })), hasError && /*#__PURE__*/_react["default"].createElement("label", {
    className: errorCln,
    htmlFor: id
  }, hasError));
}
Select.propTypes = {
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  options: _propTypes["default"].arrayOf(_propTypes["default"].object),
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
};
Select.defaultProps = {
  options: []
};
var _default = Select;
exports["default"] = _default;