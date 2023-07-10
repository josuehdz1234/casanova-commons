"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TableBottom;
var _react = _interopRequireDefault(require("react"));
var _TableNavigation = _interopRequireDefault(require("../../TableNavigation"));
var _Button = _interopRequireDefault(require("../../Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TableBottom(_ref) {
  var search = _ref.search,
    onChange = _ref.onChange,
    onClick = _ref.onClick,
    _ref$textButton = _ref.textButton,
    textButton = _ref$textButton === void 0 ? '' : _ref$textButton,
    _ref$showButton = _ref.showButton,
    showButton = _ref$showButton === void 0 ? true : _ref$showButton,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "row ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12 col-xl-7 table-paginator text-right d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/_react["default"].createElement(_TableNavigation["default"], {
    search: search,
    onChange: onChange
  })), showButton && /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "offset-6 col-3"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    block: true,
    onClick: onClick
  }, textButton)))));
}