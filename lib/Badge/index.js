"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Badge = function Badge(_ref) {
  var variation = _ref.variation,
    outline = _ref.outline,
    pill = _ref.pill,
    closeable = _ref.closeable,
    onClose = _ref.onClose,
    children = _ref.children;
  var cn = (0, _classnames["default"])("badge badge-".concat(variation), pill && 'badge-pill', outline && 'badge-outline');
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: cn
  }, children, ' ', closeable && /*#__PURE__*/_react["default"].createElement("span", {
    onClick: onClose,
    className: "badge-closeable"
  }, "X"));
};
Badge.propTypes = {
  outline: _propTypes["default"].bool,
  pill: _propTypes["default"].bool,
  variation: _propTypes["default"].string,
  closeable: _propTypes["default"].bool,
  onClose: _propTypes["default"].func
};
Badge.defaultProps = {
  outline: false,
  variation: 'primary',
  closeable: false,
  pill: false
};
var _default = Badge;
exports["default"] = _default;