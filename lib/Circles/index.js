"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Circles;
var _react = _interopRequireDefault(require("react"));
require("./Circles.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Circles(_ref) {
  var _ref$primary = _ref.primary,
    primary = _ref$primary === void 0 ? false : _ref$primary,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var shapeClassName = "Circle__Shape Circle__Shape--".concat(primary ? 'primary' : 'secondary');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Circle ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: shapeClassName
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: shapeClassName
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: shapeClassName
  }));
}