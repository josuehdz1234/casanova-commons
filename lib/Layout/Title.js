"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Title(props) {
  var label = props.label,
    right = props.right;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col title flex-wrap justify-content-between"
  }, /*#__PURE__*/_react["default"].createElement("h1", null, label), right));
}
Title.propTypes = {
  label: _propTypes["default"].any,
  right: _propTypes["default"].any
};
var _default = Title;
exports["default"] = _default;