"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("./Input"));
var _Icons = require("../Icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SearchInput(props) {
  var left = /*#__PURE__*/_react["default"].createElement(_Icons.Search, {
    style: {
      padding: '0.5rem'
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
    className: "d-md-inline-block"
  }, props, {
    left: left,
    type: "text"
  }));
}
var _default = SearchInput;
exports["default"] = _default;