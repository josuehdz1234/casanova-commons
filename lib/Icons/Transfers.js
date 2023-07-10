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
function SvgTransfers(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16.629 5.993a.5.5 0 001 0h-1zm4.466 11.619a.5.5 0 000-.707l-3.181-3.183a.5.5 0 00-.708.708l2.829 2.828-2.829 2.829a.5.5 0 10.707.707l3.183-3.182zM17.63 5.992V3h-1v2.993h1zM15.129.5H3v1h12.129v-1zM.5 3v12.258h1V3h-1zM3 17.758h17.742v-1H3v1zm-2.5-2.5a2.5 2.5 0 002.5 2.5v-1a1.5 1.5 0 01-1.5-1.5h-1zM3 .5A2.5 2.5 0 00.5 3h1A1.5 1.5 0 013 1.5v-1zM17.629 3a2.5 2.5 0 00-2.5-2.5v1a1.5 1.5 0 011.5 1.5h1zM9.371 20.007a.5.5 0 10-1 0h1zM4.905 8.388a.5.5 0 000 .707l3.181 3.182a.5.5 0 00.708-.707L5.965 8.742l2.829-2.828a.5.5 0 00-.708-.708L4.905 8.388zm3.466 11.62V23h1v-2.993h-1zm2.5 5.492H23v-1H10.871v1zM25.5 23V10.742h-1V23h1zM23 8.242H5.258v1H23v-1zm2.5 2.5a2.5 2.5 0 00-2.5-2.5v1a1.5 1.5 0 011.5 1.5h1zM23 25.5a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1zM8.371 23a2.5 2.5 0 002.5 2.5v-1a1.5 1.5 0 01-1.5-1.5h-1z",
    fill: "#fff"
  }));
}
var _default = SvgTransfers;
exports["default"] = _default;