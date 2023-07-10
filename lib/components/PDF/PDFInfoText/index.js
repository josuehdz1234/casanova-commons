"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _renderer = require("@react-pdf/renderer");
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PDFInfoText = function PDFInfoText(_ref) {
  var label = _ref.label,
    info = _ref.info;
  return /*#__PURE__*/_react["default"].createElement(_renderer.View, {
    style: _styles["default"].infoTextContainer
  }, /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: _styles["default"].infoTextLabel
  }, label), /*#__PURE__*/_react["default"].createElement(_renderer.Text, {
    style: _styles["default"].infoTextValue
  }, info));
};
PDFInfoText.propTypes = {
  label: _propTypes["default"].string.isRequired,
  info: _propTypes["default"].string.isRequired
};
var _default = PDFInfoText;
exports["default"] = _default;