"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormSection = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FormSection = function FormSection(_ref) {
  var title = _ref.title,
    right = _ref.right,
    children = _ref.children,
    upperCase = _ref.upperCase,
    className = _ref.className,
    _ref$topBar = _ref.topBar,
    topBar = _ref$topBar === void 0 ? true : _ref$topBar;
  var componentCls = (0, _classnames["default"])('form_container', className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: componentCls
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section"
  }, /*#__PURE__*/_react["default"].createElement("legend", {
    className: "section__title"
  }, ' ', upperCase ? title.toUpperCase() : title, ' '), /*#__PURE__*/_react["default"].createElement("div", {
    className: "section__right"
  }, right)), topBar && /*#__PURE__*/_react["default"].createElement("hr", {
    style: {
      marginTop: '0'
    },
    width: "100%"
  }), children);
};
exports.FormSection = FormSection;
FormSection.propTypes = {
  title: _propTypes["default"].string,
  right: _propTypes["default"].node,
  upperCase: _propTypes["default"].bool,
  topBar: _propTypes["default"].bool
};
FormSection.defaultProps = {
  title: '',
  upperCase: false
};
var _default = FormSection;
exports["default"] = _default;