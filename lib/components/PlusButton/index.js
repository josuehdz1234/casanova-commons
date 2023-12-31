"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlusButton;
var _react = _interopRequireDefault(require("react"));
require("./PlusButton.scss");
var _excluded = ["onClick", "className", "textLeft", "textRight", "color"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function PlusButton(_ref) {
  var onClick = _ref.onClick,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    textLeft = _ref.textLeft,
    textRight = _ref.textRight,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'secondary' : _ref$color,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "PlusButton"
  }, textLeft && /*#__PURE__*/_react["default"].createElement("span", {
    className: "PlusButton__Left PlusButton__Left--".concat(color)
  }, textLeft), /*#__PURE__*/_react["default"].createElement("button", _extends({
    onClick: onClick,
    type: "button"
  }, rest, {
    className: "PlusButton__Button btn btn-outline btn-plus-minus ".concat(className)
  }), /*#__PURE__*/_react["default"].createElement("div", null, "+")), textRight && /*#__PURE__*/_react["default"].createElement("span", {
    className: "PlusButton__Right PlusButton__Right--".concat(color)
  }, textRight));
}