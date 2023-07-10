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
function SvgBulkLoad(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.116.61A2.07 2.07 0 0012.643 0H2.083A2.086 2.086 0 000 2.083v20.834A2.086 2.086 0 002.083 25h15.834A2.086 2.086 0 0020 22.917V7.357a2.07 2.07 0 00-.61-1.473L14.116.61zm5.05 22.307c0 .69-.56 1.249-1.25 1.25H2.084a1.252 1.252 0 01-1.25-1.25V2.083c.001-.69.56-1.249 1.25-1.25h10.56c.092 0 .184.01.274.03V5A2.086 2.086 0 0015 7.083h2.5V6.25H15c-.69 0-1.25-.56-1.25-1.25V1.423l5.05 5.05c.236.234.368.552.367.884v15.56zM9.49 3.646H3.163v.833h6.326v-.833zM3.163 5.208h6.326v.834H3.163v-.834zM3.333 10c0-.23.187-.417.417-.417h12.5c.23 0 .417.187.417.417v11.667c0 .23-.187.416-.417.416H3.75a.417.417 0 01-.417-.416V10zm9.167 2.083h3.333v-1.666H12.5v1.666zm-.833 0H8.333v-1.666h3.334v1.666zm-4.167 0v-1.666H4.167v1.666H7.5zm-3.333.834H7.5v8.333H4.167v-8.333zm7.5 0H8.333v8.333h3.334v-8.333zm.833 8.333v-8.333h3.333v8.333H12.5z",
    fill: "#1C284E"
  }));
}
var _default = SvgBulkLoad;
exports["default"] = _default;