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
function SvgEmail(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 113 78",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    strokeWidth: 3,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#F2A000",
    d: "M92.6 40.658h0v25.248c0 5.523-4.477 10-10 10H12c-5.523 0-10-4.477-10-10v-37c0-5.523 4.477-10 10-10h62.903"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#F2A000",
    d: "M4.772 22.906l41.744 26.855 29.453-19.599M38.276 42.906l-31.225 31M56.113 42.906l31.226 31"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#44D7B6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M102.756 37.58c-8.769 5.48-20.319 2.813-25.798-5.955-4.414-7.064-2.86-14.85 1.507-21.954M82.914 4.825c8.769-5.479 20.32-2.812 25.798 5.956 4.415 7.065 2.86 14.851-1.507 21.954"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#44D7B6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M86.114 20.976l4.666 4.5 9.334-9"
  })));
}
var _default = SvgEmail;
exports["default"] = _default;