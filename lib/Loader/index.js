"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loader;
var _react = _interopRequireDefault(require("react"));
var _Loader = _interopRequireDefault(require("./Loader"));
require("./Loader.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Loader(_ref) {
  var show = _ref.show,
    inner = _ref.inner;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "LoaderCasanova ".concat(inner ? 'LoaderCasanova--inner' : ''),
    style: {
      display: !show ? 'none' : ''
    }
  }, /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
    loop: true,
    className: "LoaderCasanova__Content"
  }));
}