"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _RadioInput = _interopRequireDefault(require("../Input/RadioInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function RadioGroup(props) {
  var multiple = props.multiple,
    type = props.type,
    _onChange = props.onChange,
    options = props.options,
    name = props.name,
    value = props.value,
    size = props.size;
  return options.map(function (option) {
    var label = option.label;
    return /*#__PURE__*/_react["default"].createElement(_RadioInput["default"], {
      key: label,
      name: name,
      label: label,
      type: type,
      size: size,
      checked: multiple ? Array.isArray(value) && value.find(function (val) {
        return option.value === val;
      }) || false : option.value === value,
      onChange: function onChange(val) {
        if (multiple) {
          var newValue = val ? Array.isArray(value) ? value.concat([option.value]) : [option.value] : Array.isArray(value) ? value.filter(function (a) {
            return a !== option.value;
          }) : [];
          _onChange({
            name: name,
            value: newValue,
            label: label
          });
        } else {
          _onChange({
            name: name,
            value: option.value,
            label: label
          });
        }
      }
    });
  });
}
RadioGroup.propTypes = {
  multiple: _propTypes["default"].bool,
  type: _propTypes["default"].string
};
RadioGroup.defaultProps = {
  multiple: false
};
var _default = RadioGroup;
exports["default"] = _default;