"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _formik = require("formik");
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var Icons = _interopRequireWildcard(require("../Icons"));
var _excluded = ["className", "id", "name", "label", "right", "left", "placeholder", "onChange", "mask", "maskPlaceholder", "link", "linkText", "infoText", "customLabelContent", "classNameError", "customValue", "showLabel", "upperCase", "deleteValue", "onDeleteValue", "inputClass", "modifiedExternal"];
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
var MaskedInput = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var className = props.className,
    id = props.id,
    name = props.name,
    label = props.label,
    right = props.right,
    left = props.left,
    placeholder = props.placeholder,
    onChange = props.onChange,
    mask = props.mask,
    maskPlaceholder = props.maskPlaceholder,
    link = props.link,
    linkText = props.linkText,
    infoText = props.infoText,
    customLabelContent = props.customLabelContent,
    classNameError = props.classNameError,
    customValue = props.customValue,
    showLabel = props.showLabel,
    upperCase = props.upperCase,
    _props$deleteValue = props.deleteValue,
    deleteValue = _props$deleteValue === void 0 ? false : _props$deleteValue,
    onDeleteValue = props.onDeleteValue,
    inputClass = props.inputClass,
    _props$modifiedExtern = props.modifiedExternal,
    modifiedExternal = _props$modifiedExtern === void 0 ? false : _props$modifiedExtern,
    rest = _objectWithoutProperties(props, _excluded);
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var error = meta.error,
    touched = meta.touched;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasContent = _useState2[0],
    setHasContent = _useState2[1];
  var setValue = helpers.setValue,
    setTouched = helpers.setTouched;
  (0, _react.useEffect)(function () {
    setHasContent(field && field.value && field.value !== '');
  }, [field.value]);
  var handleInputFocus = (0, _react.useCallback)(function (e) {
    if (props.onFocus) {
      props.onFocus(e);
    }
  }, [props.onFocus]);
  var handleInputBlur = (0, _react.useCallback)(function (e) {
    var value = e.target.value;
    setTouched(true);
    setHasContent(value && value !== '');
    if (props.onBlur) {
      props.onBlur(e);
    }
  }, [setTouched, props.onBlur]);
  var handleChange = (0, _react.useCallback)(function (e) {
    var value = e.target.value;
    var formattedValue = value.replace(/\s{2,}/, ' ');
    setValue(upperCase ? formattedValue.toUpperCase() : formattedValue);
    setHasContent(value && value !== '');
    if (onChange) {
      onChange(e);
    }
  }, [setValue, onChange]);
  var handleDeleteValue = (0, _react.useCallback)(function () {
    if (onDeleteValue) {
      onDeleteValue(field);
    }
    setValue('');
  }, [setValue, onDeleteValue, field]);
  var hasValue = field.value && field.value !== '' || customValue;
  var hasError = touched && error;
  var withContent = hasContent || hasValue || modifiedExternal;
  var icn = (0, _react.useMemo)(function () {
    var inputClassName = (0, _classnames["default"])('form-control', inputClass && 'formtopPosition', withContent && 'form-control--with-content', hasError && 'is-invalid', right && 'input-group-br-no', left && 'input-group-bl-no');
    return inputClassName;
  }, [withContent, hasError, right, left]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group ".concat(className || '', " ")
  }, label && !customLabelContent && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-label d-flex justify-content-between', hasError && error && 'text-danger'),
    htmlFor: id
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      visibility: "".concat(withContent || hasError || showLabel ? 'visible' : 'hidden')
    }
  }, label), link && /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      textTransform: 'capitalize'
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    rel: "noopener norefer",
    target: "__blank",
    href: link
  }, linkText))), customLabelContent && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id
  }, customLabelContent), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-input-group"
  }, left && /*#__PURE__*/_react["default"].createElement("span", {
    className: "left-content"
  }, left), /*#__PURE__*/_react["default"].createElement(_reactInputMask["default"], _extends({
    ref: ref,
    mask: mask,
    maskPlaceholder: maskPlaceholder,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onChange: handleChange,
    placeholder: placeholder,
    className: icn,
    value: field.value,
    name: name
  }, rest)), right && !deleteValue && /*#__PURE__*/_react["default"].createElement("span", {
    className: "right-content"
  }, right), deleteValue && field.value && /*#__PURE__*/_react["default"].createElement("span", {
    className: "right-content",
    onClick: handleDeleteValue,
    onKeyPress: handleDeleteValue,
    role: "button",
    tabIndex: "0"
  }, /*#__PURE__*/_react["default"].createElement(Icons.IcoDeleteGray, {
    width: "1.5rem",
    height: "1.5rem"
  }))), infoText && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-info-text mt-1 d-block'),
    htmlFor: id
  }, infoText), hasError && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-error', hasError && error && 'text-danger', classNameError),
    htmlFor: id
  }, hasError));
});
MaskedInput.propTypes = {
  error: _propTypes["default"].string,
  upperCase: _propTypes["default"].bool,
  showLabel: _propTypes["default"].bool,
  inputClass: _propTypes["default"].string,
  onDeleteValue: _propTypes["default"].func,
  modifiedExternal: _propTypes["default"].bool
};
MaskedInput.defaultProps = {
  error: '',
  showLabel: false,
  upperCase: false
};
var _default = MaskedInput;
exports["default"] = _default;