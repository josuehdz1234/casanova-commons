"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useStateWithCallback3 = require("use-state-with-callback");
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _formik = require("formik");
var _Icons = require("../Icons");
var _excluded = ["className", "id", "name", "label", "right", "left", "placeholder", "displayText", "onChange", "mask", "maskPlaceholder", "url", "download", "showIcon"];
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
var getDownloadIconClass = function getDownloadIconClass(download) {
  return download ? 'download' : 'eye';
};
var existsDisplayText = function existsDisplayText(displayText, placeholder) {
  return displayText || placeholder;
};
var getBoxText = function getBoxText(field, displayText, placeholder) {
  return field.value && field.value.name ? field.value.name : existsDisplayText(displayText, placeholder);
};
var InputFile = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var className = props.className,
    id = props.id,
    name = props.name,
    label = props.label,
    right = props.right,
    left = props.left,
    placeholder = props.placeholder,
    displayText = props.displayText,
    onChange = props.onChange,
    mask = props.mask,
    maskPlaceholder = props.maskPlaceholder,
    url = props.url,
    download = props.download,
    _props$showIcon = props.showIcon,
    showIcon = _props$showIcon === void 0 ? true : _props$showIcon,
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
    focused = _useState2[0],
    setFocused = _useState2[1];
  var _useStateWithCallback = (0, _useStateWithCallback3.useStateWithCallbackLazy)(false),
    _useStateWithCallback2 = _slicedToArray(_useStateWithCallback, 2),
    hasContent = _useStateWithCallback2[0],
    setHasContent = _useStateWithCallback2[1];
  var setValue = helpers.setValue,
    setTouched = helpers.setTouched;
  var innerRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      click: function click() {
        innerRef.current.click();
      }
    };
  });
  (0, _react.useEffect)(function () {
    setHasContent(field && Boolean(field.value));
  }, [field.value]);
  var handleInputFocus = function handleInputFocus(e) {
    var value = e.target.value;
    setFocused(false);
    setHasContent(!(0, _isEmpty2["default"])(value));
    if (props.onFocus) {
      props.onFocus(e);
    }
  };
  var handleClickInput = (0, _react.useCallback)(function () {
    if (innerRef.current) {
      innerRef.current.click();
    }
  }, [innerRef.current]);
  var handleInputBlur = function handleInputBlur(e) {
    var value = e.target.value;
    setFocused(false);
    setHasContent(!(0, _isEmpty2["default"])(value));
    if (props.onBlur) {
      props.onBlur(e);
    }
  };
  var handleChange = function handleChange(e) {
    var value = e.target.value;
    setValue(e.currentTarget.files[0]);
    if (onChange) {
      onChange(e);
    }
    setHasContent(Boolean(value), function () {
      setTouched(true);
    });
  };
  var hasError = touched && error;
  var icn = (0, _classnames["default"])('FileInputContainer form-control', focused && 'FileInputContainer--focused', (hasContent || displayText) && 'FileInputContainer--with-content', rest.disabled && 'FileInputContainer--disabled', hasError && 'is-invalid', right && 'input-group-br-no', left && 'input-group-bl-no');
  var visibility = hasError || hasContent || url;
  var boxText = getBoxText(field, displayText, placeholder);
  var iconCn = (0, _classnames["default"])("svg-icon svg-icon-".concat(url ? getDownloadIconClass(download) : 'attach-clip'));
  var getRightIcon = function getRightIcon() {
    return showIcon ? /*#__PURE__*/_react["default"].createElement("a", {
      href: url,
      style: {
        height: '100%'
      },
      download: download,
      target: "blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: iconCn
    })) : null;
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group ".concat(className || '', " ")
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      visibility: "".concat(visibility ? 'visible' : 'hidden')
    },
    className: (0, _classnames["default"])('col-form-label', hasError && error && 'text-danger'),
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-input-group"
  }, left && /*#__PURE__*/_react["default"].createElement("span", {
    className: "left-content"
  }, left), /*#__PURE__*/_react["default"].createElement("span", {
    tabIndex: "0",
    role: "button",
    onKeyPress: handleClickInput,
    onClick: handleClickInput
  }, url && rest.disabled && /*#__PURE__*/_react["default"].createElement("a", {
    href: url,
    download: download,
    target: "blank",
    rel: "noopener noreferrer",
    className: "".concat(icn, " FileInputContainer--with-content")
  }, displayText), (!url || !rest.disabled) && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name,
    className: icn
  }, boxText), /*#__PURE__*/_react["default"].createElement("input", _extends({
    onFocus: handleInputFocus,
    name: name,
    onBlur: handleInputBlur,
    onChange: handleChange,
    ref: innerRef,
    placeholder: placeholder
  }, rest))), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: name,
    className: "right-content"
  }, !url || !field.value ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "input-file-icon"
  }, /*#__PURE__*/_react["default"].createElement(_Icons.AttachClip, null), ' ') : getRightIcon())), hasError && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-error', hasError && error && 'text-danger'),
    htmlFor: name
  }, hasError));
});
InputFile.propTypes = {
  error: _propTypes["default"].string,
  displayText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
};
InputFile.defaultProps = {
  error: '',
  displayText: ''
};
var _default = InputFile;
exports["default"] = _default;