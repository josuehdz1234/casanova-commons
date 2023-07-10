"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./CardSection.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CardSection = function CardSection(_ref) {
  var children = _ref.children,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    noStatus = _ref.noStatus,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? 'success' : _ref$status,
    padding = _ref.padding,
    noTitle = _ref.noTitle,
    className = _ref.className,
    _ref$borderDirection = _ref.borderDirection,
    borderDirection = _ref$borderDirection === void 0 ? 'top' : _ref$borderDirection,
    onClick = _ref.onClick,
    _ref$titleClassName = _ref.titleClassName,
    titleClassName = _ref$titleClassName === void 0 ? '' : _ref$titleClassName,
    _ref$upperCase = _ref.upperCase,
    upperCase = _ref$upperCase === void 0 ? false : _ref$upperCase;
  var cls = (0, _classnames["default"])("CardSection", noStatus && 'CardSection--without-status', !noStatus && status && "CardSection__".concat(borderDirection, "--").concat(status), padding, className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: cls,
    tabIndex: 0,
    onClick: onClick,
    onKeyPress: onClick
  }, !noTitle && /*#__PURE__*/_react["default"].createElement("h6", {
    className: (0, _classnames["default"])('CardSection__title', titleClassName, upperCase && 'text-uppercase')
  }, title), children);
};
CardSection.propTypes = {
  children: _propTypes["default"].node,
  title: _propTypes["default"].string,
  noStatus: _propTypes["default"].bool,
  padding: _propTypes["default"].string,
  noTitle: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  borderDirection: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  titleClassName: _propTypes["default"].bool,
  status: _propTypes["default"].string,
  upperCase: _propTypes["default"].bool
};
var _default = CardSection;
exports["default"] = _default;