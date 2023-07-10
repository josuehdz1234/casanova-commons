"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SmallCheckbox;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _formik = require("formik");
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _classnames = _interopRequireDefault(require("classnames"));
var _SmallBoxCheckOn = _interopRequireDefault(require("../../Icons/SmallBoxCheckOn"));
var _SmallBoxCheckOff = _interopRequireDefault(require("../../Icons/SmallBoxCheckOff"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function SmallCheckbox(_ref) {
  var name = _ref.name,
    label = _ref.label,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? _noop2["default"] : _ref$onChange;
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var value = field.value;
  var error = meta.error,
    touched = meta.touched;
  var setValue = helpers.setValue,
    setTouched = helpers.setTouched;
  var handleChange = (0, _react.useCallback)(function () {
    setValue(!value);
    setTouched(true);
    onChange(!value);
  }, [value, onChange, setValue, setTouched]);
  var hasChecked = value === true;
  var hasError = touched && error;
  var CheckIcon = hasChecked ? _SmallBoxCheckOn["default"] : _SmallBoxCheckOff["default"];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex justify-content-between align-items-center pointer",
    role: "button",
    tabIndex: 0,
    onClick: handleChange,
    onKeyDown: handleChange
  }, /*#__PURE__*/_react["default"].createElement(CheckIcon, {
    width: "1.125rem",
    height: "1.125rem",
    className: "mr-2"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: (0, _classnames["default"])('m-0', hasChecked ? 'text-secondary' : 'text-muted')
  }, label)), hasError && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-error pt-2', hasError && 'text-danger'),
    htmlFor: name
  }, error));
}
SmallCheckbox.propTypes = {
  name: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func
};