"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SvgEye(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "a",
    d: "M23.802 6.465a.83.83 0 01.025 1.037c-.049.066-1.264 1.65-3.326 3.237-1.22.938-2.488 1.687-3.766 2.229-1.626.683-3.272 1.032-4.898 1.032C7.732 14 3.814 11.828.194 7.535A.83.83 0 01.17 6.498c.049-.066 1.263-1.65 3.326-3.237 1.22-.938 2.488-1.687 3.766-2.229C8.888.349 10.534 0 12.16 0c4.105 0 8.018 2.177 11.642 6.465zM19.36 9.443a18.763 18.763 0 002.616-2.431c-3.135-3.525-6.436-5.31-9.82-5.31-3.136 0-5.82 1.554-7.524 2.86a19.055 19.055 0 00-2.616 2.43c3.135 3.526 6.436 5.312 9.82 5.312 3.135 0 5.82-1.555 7.524-2.86zm-4.114-3.289c.485 0 .881.382.881.848 0 2.192-1.851 3.977-4.134 3.977-2.282 0-4.133-1.785-4.133-3.977 0-2.19 1.851-3.977 4.133-3.977.485 0 .882.382.882.848 0 .467-.397.849-.882.849-1.307 0-2.37 1.022-2.37 2.28 0 1.259 1.063 2.281 2.37 2.281 1.308 0 2.371-1.022 2.371-2.28 0-.467.397-.849.882-.849z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 5)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#a"
  })), /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    fillRule: "nonzero",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#007AFF",
    mask: "url(#b)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0-5h24v24H0z"
  }))));
}
var _default = SvgEye;
exports["default"] = _default;