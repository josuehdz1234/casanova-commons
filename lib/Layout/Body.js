"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Loader = _interopRequireDefault(require("../Loader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Body(_ref) {
  var showLoader = _ref.showLoader,
    className = _ref.className,
    aside = _ref.aside,
    children = _ref.children,
    centerClass = _ref.centerClass;
  var bodyClass = (0, _classnames["default"])('col', centerClass);
  var mainClassName = (0, _classnames["default"])('main-content', className);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: bodyClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: mainClassName
  }, /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
    show: showLoader
  }), children)), aside);
}
Body.propTypes = {
  showLoader: _propTypes["default"].bool,
  children: _propTypes["default"].any
};
var _default = Body;
exports["default"] = _default;