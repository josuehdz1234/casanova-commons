"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Icons = require("../Icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function getIcon(show, isNew) {
  if (show) {
    return _Icons.ChevronDown;
  }
  if (!isNew) {
    return _Icons.ChevronRight;
  }
  return _Icons.CirclePlus;
}
function Collapse(props) {
  var children = props.children,
    className = props.className,
    disabled = props.disabled,
    name = props.name,
    _onClick = props.onClick,
    show = props.show,
    Title = props.title,
    titleProps = props.titleProps,
    isNew = props.isNew;
  var Icon = getIcon(show, isNew);
  var headerClassName = (0, _classnames["default"])(show && 'show', isNew && 'disabled');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      if (!disabled) {
        _onClick(name);
      }
    },
    className: "card-header ".concat(headerClassName)
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "mb-0"
  }, typeof Title === 'string' ? Title : /*#__PURE__*/_react["default"].createElement(Title, titleProps)), /*#__PURE__*/_react["default"].createElement("span", {
    className: "card-header-icon"
  }, disabled ? '' : /*#__PURE__*/_react["default"].createElement(Icon, null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "collapse ".concat(show ? 'show' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-body"
  }, children)));
}
Collapse.propTypes = {
  show: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
Collapse.defaultProps = {
  show: false,
  disabled: false,
  className: ''
};
var _default = Collapse;
exports["default"] = _default;