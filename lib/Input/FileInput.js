"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _formik = require("formik");
var _Icons = require("../Icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var getIcon = function getIcon(isLink, disabled) {
  return isLink && disabled ? _Icons.Eye : _Icons.AttachClip;
};
function FileInput(props) {
  var id = props.id,
    accept = props.accept,
    name = props.name,
    label = props.label,
    disabled = props.disabled,
    onClick = props.onClick;
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var error = meta.error,
    touched = meta.touched;
  var setValue = helpers.setValue,
    setTouched = helpers.setTouched;
  var ref = (0, _react.useRef)(null);
  var hasError = touched && error;
  var mainClassName = (0, _classnames["default"])('file-input form-group', hasError && 'invalid', props.className);
  var inputClassName = (0, _classnames["default"])('form-control', hasError && 'is-invalid');
  var handleFileChange = (0, _react.useCallback)(function (e) {
    var files = e.target.files;
    setTouched(true);
    setValue(files[0], true);
  }, [setValue, setTouched]);
  var link = (0, _get2["default"])(field, 'value');
  var isLink = typeof link === 'string' && link.length > 0;
  var value = (0, _get2["default"])(field, isLink ? 'value' : 'value.name', '');
  var Icon = getIcon(isLink, disabled);
  var handleClick = function handleClick(e) {
    if (disabled) {
      e.preventDefault();
      if (isLink && onClick) {
        onClick(value);
      }
    }
  };
  var labelClassName = (0, _classnames["default"])('col-form-label', hasError && 'text-danger', !value && 'empty');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: mainClassName
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: labelClassName,
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    tabIndex: "-1",
    name: name,
    className: inputClassName,
    value: value,
    placeholder: label,
    type: "text",
    disabled: true
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-group-text"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "input-file-icon"
  }, /*#__PURE__*/_react["default"].createElement(Icon, null))))), hasError && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-error', 'text-danger'),
    htmlFor: id
  }, error), /*#__PURE__*/_react["default"].createElement("input", {
    style: {
      width: '100%',
      height: '100%',
      opacity: 0,
      position: 'absolute',
      top: 0,
      left: 0
    },
    type: "file",
    ref: ref,
    multiple: false,
    onChange: handleFileChange,
    accept: accept,
    onClick: handleClick
  }));
}
var _default = FileInput;
exports["default"] = _default;