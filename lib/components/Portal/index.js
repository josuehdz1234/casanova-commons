"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Portal;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _htmlRoots = require("../../utils/htmlRoots");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Portal(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children), _htmlRoots.portalRoot));
}