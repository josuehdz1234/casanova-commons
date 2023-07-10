"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["type", "name", "id", "label", "onChange", "disabled", "size", "typeCheck", "bgCheck", "inputContainerClassName"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function RadioInput(props) {
  var type = props.type,
    name = props.name,
    id = props.id,
    label = props.label,
    onChange = props.onChange,
    disabled = props.disabled,
    size = props.size,
    typeCheck = props.typeCheck,
    bgCheck = props.bgCheck,
    _props$inputContainer = props.inputContainerClassName,
    inputContainerClassName = _props$inputContainer === void 0 ? '' : _props$inputContainer,
    rest = _objectWithoutProperties(props, _excluded);
  var handleChange = (0, _react.useCallback)(function (e) {
    onChange(e.target.checked);
  });
  var handleClick = (0, _react.useCallback)(function (e) {
    onChange(!props.checked);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-control custom-".concat(type, " custom-radio-").concat(size, " ").concat(inputContainerClassName),
    onClick: disabled ? undefined : handleClick
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    disabled: disabled,
    type: type,
    id: id,
    name: name,
    className: "custom-control-input",
    onChange: handleChange
  }, rest)), /*#__PURE__*/_react["default"].createElement("label", {
    className: "custom-control-label custom-radio-label ".concat(typeCheck && bgCheck),
    htmlFor: id
  }, label));
}
RadioInput.propTypes = {
  type: _propTypes["default"].string,
  size: _propTypes["default"].string
};
RadioInput.defaultProps = {
  type: 'radio',
  size: 'md'
};
var _default = RadioInput;
exports["default"] = _default;