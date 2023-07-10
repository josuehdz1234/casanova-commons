"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Download = _interopRequireDefault(require("../Icons/Download"));

var _stylesModule = _interopRequireDefault(require("./styles.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DownloadButton = function DownloadButton(props) {
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: _stylesModule["default"].root,
    type: "button"
  }, props), /*#__PURE__*/_react["default"].createElement(_Download["default"], {
    width: "1.1rem",
    fill: "#007AFF"
  }));
};

var _default = DownloadButton;
exports["default"] = _default;