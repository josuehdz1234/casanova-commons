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
function SvgDepartureAndReturn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 44 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 4a4 4 0 014-4h22.444a4 4 0 014 4v5.932a1.333 1.333 0 11-2.666 0V4c0-.736-.597-1.333-1.334-1.333H4c-.736 0-1.333.597-1.333 1.333v22.667C2.667 27.403 3.264 28 4 28h28.114l-6.209-6.21a1.333 1.333 0 011.886-1.885l8.485 8.485c.52.521.52 1.365 0 1.886l-8.485 8.485a1.333 1.333 0 01-1.886-1.885l6.21-6.21H4a4 4 0 01-4-4V4z",
    fill: "#7FBDFF"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M44 40a4 4 0 01-4 4H17.556a4 4 0 01-4-4v-5.932a1.333 1.333 0 012.666 0V40c0 .736.597 1.333 1.334 1.333H40c.736 0 1.333-.597 1.333-1.333V17.333c0-.736-.597-1.333-1.333-1.333H11.886l6.209 6.21a1.333 1.333 0 01-1.886 1.885L7.724 15.61a1.333 1.333 0 010-1.886l8.485-8.485a1.333 1.333 0 011.886 1.885l-6.21 6.21H40a4 4 0 014 4V40z",
    fill: "#7FBDFF"
  }));
}
var _default = SvgDepartureAndReturn;
exports["default"] = _default;