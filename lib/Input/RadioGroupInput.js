"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _formik = require("formik");
var _classnames = _interopRequireDefault(require("classnames"));
var _RadioInput = _interopRequireDefault(require("./RadioInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var withValue = function withValue(value, option) {
  return Array.isArray(value) ? value.concat([option.value]) : [option.value];
};
var withOutValue = function withOutValue(value, option) {
  return Array.isArray(value) ? value.filter(function (a) {
    return a !== option.value;
  }) : [];
};
var getNewValue = function getNewValue(val, value, option) {
  return val ? withValue(value, option) : withOutValue(value, option);
};
function RadioGroupInput(props) {
  var id = props.id,
    label = props.label,
    multiple = props.multiple,
    type = props.type,
    parentClass = props.parentClass,
    options = props.options,
    name = props.name,
    labelClass = props.labelClass,
    groupClass = props.groupClass,
    _props$inputContainer = props.inputContainerClass,
    inputContainerClass = _props$inputContainer === void 0 ? '' : _props$inputContainer,
    disabled = props.disabled,
    statusKey = props.statusKey,
    _onChange = props.onChange;
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var value = field.value;
  var error = meta.error,
    touched = meta.touched;
  var hasError = touched && error;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group ".concat(parentClass)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])("".concat(hasError && 'col-form-error text-danger font-weight-normal padding__error_stand', " col-md-6 m-0"), labelClass),
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: groupClass
  }, options.map(function (option, k) {
    var lastPosition = options.length - 1;
    var label = option.label;
    var bgCheck = 'custom-control-label-1';
    if (statusKey) {
      if (option.value === value) {
        if (statusKey.Extraviada === option.value) {
          bgCheck = 'custom-control-label-2';
        }
        if (statusKey.Préstamo === option.value) {
          bgCheck = 'custom-control-label-3';
        }
        if (statusKey.Siniestro === option.value) {
          bgCheck = 'custom-control-label-4';
        }
      }
    }
    return /*#__PURE__*/_react["default"].createElement(_RadioInput["default"], {
      bgCheck: bgCheck,
      typeCheck: props.typeCheck,
      disabled: statusKey ? k !== lastPosition ? disabled : true : disabled,
      key: label,
      name: name,
      label: label,
      type: type,
      inputContainerClassName: inputContainerClass,
      checked: multiple ? Array.isArray(value) && value.find(function (val) {
        return option.value === val;
      }) || false : option.value === value,
      onChange: function onChange(val) {
        if (multiple) {
          var newValue = getNewValue(val, value, option);
          helpers.setValue(newValue);
        } else {
          helpers.setValue(option.value);
        }
        if (_onChange) {
          _onChange(option);
        }
      }
    });
  })), hasError && /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _classnames["default"])('col-form-error font-weight-normal text-danger padding__error_stand'),
    htmlFor: id
  }, error))));
}
RadioGroupInput.propTypes = {
  multiple: _propTypes["default"].bool,
  type: _propTypes["default"].string,
  labelClass: _propTypes["default"].string
};
RadioGroupInput.defaultProps = {
  multiple: false
};
var _default = RadioGroupInput;
exports["default"] = _default;