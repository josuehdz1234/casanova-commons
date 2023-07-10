"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PDFPage;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _renderer = require("@react-pdf/renderer");
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PDFPage(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? [841.89, 1190.55] : _ref$size,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_renderer.Document, null, /*#__PURE__*/_react["default"].createElement(_renderer.Page, {
    size: size,
    style: _styles["default"].page
  }, children));
}
PDFPage.propTypes = {
  size: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].object])),
  children: _propTypes["default"].node.isRequired
};