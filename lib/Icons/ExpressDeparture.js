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
function SvgExpressDeparture(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 44 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4.287 38h2.429a4.39 4.39 0 003.056-1.243 4.172 4.172 0 001.264-2.985v-1.29h21.787v1.29c0 2.327 2.008 4.228 4.395 4.228h2.428a4.42 4.42 0 003.07-1.24A4.2 4.2 0 0044 33.773V20.835a5.555 5.555 0 00-.48-2.233 5.677 5.677 0 00-1.345-1.868l-.77-.704-.018-.038-3.258-7.396a4.312 4.312 0 00-1.621-1.89A4.476 4.476 0 0034.088 6h-23.66c-.86 0-1.701.246-2.42.707a4.311 4.311 0 00-1.62 1.889L3.18 15.883l-1.159.976a5.629 5.629 0 00-1.498 1.933A5.494 5.494 0 000 21.16v12.611c-.004.552.103 1.1.317 1.612.213.511.528.977.926 1.37a4.31 4.31 0 001.395.919A4.399 4.399 0 004.287 38zm3.919-4.228c.002.388-.154.76-.434 1.036a1.52 1.52 0 01-1.057.433H4.287a1.506 1.506 0 01-1.044-.437 1.402 1.402 0 01-.413-1.032v-1.581c.462.187.956.286 1.457.292h3.919v1.29zm31.44 1.47h-2.428c-.827 0-1.565-.664-1.565-1.47v-1.29h3.993a4.368 4.368 0 001.524-.291v1.581c-.005.39-.168.764-.453 1.039a1.55 1.55 0 01-1.07.43zM8.99 9.657c.122-.272.324-.502.58-.662.256-.16.555-.243.859-.237h23.66c.304-.006.603.077.859.237.256.16.458.39.58.662l2.41 5.445h-.91c-.654-2.896-3.39-5.256-6.658-5.256-3.268 0-6.004 2.36-6.657 5.256H6.579l2.41-5.445zm25.096 5.445h-7.431c.571-1.379 2.02-2.497 3.715-2.497 1.694 0 3.144 1.118 3.716 2.497zM2.83 21.161a2.85 2.85 0 01.26-1.222 2.92 2.92 0 01.762-1.003l1.245-1.074h34.227l.908.851c.294.274.529.604.69.968.161.365.246.757.248 1.154v7.397a1.492 1.492 0 01-.451 1.048 1.57 1.57 0 01-1.073.444H4.286a1.525 1.525 0 01-1.045-.451 1.45 1.45 0 01-.411-1.041V21.16z",
    fill: "#7FBDFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 22.296a1.23 1.23 0 00-.425-.916 1.54 1.54 0 00-1.024-.38H5.449a1.54 1.54 0 00-1.025.38 1.231 1.231 0 00-.424.916v4.408c0 .343.153.673.424.916.272.243.64.38 1.025.38h7.102a1.54 1.54 0 001.024-.38 1.23 1.23 0 00.425-.916v-4.408zm-7.101 1.297H11.1v1.685H6.9v-1.685zM39 22.296a1.23 1.23 0 00-.425-.916 1.54 1.54 0 00-1.024-.38h-7.102a1.54 1.54 0 00-1.025.38 1.23 1.23 0 00-.424.916v4.408c0 .343.153.673.424.916.272.243.64.38 1.025.38h7.102a1.54 1.54 0 001.024-.38 1.23 1.23 0 00.425-.916v-4.408zm-7.101 1.297H36.1v1.685H31.9v-1.685z",
    fill: "#7FBDFF"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.449 28h9.102c.384 0 .753-.158 1.025-.44.271-.28.424-.662.424-1.06s-.153-.78-.424-1.06A1.424 1.424 0 0025.55 25H16.45c-.384 0-.753.158-1.025.44A1.527 1.527 0 0015 26.5c0 .398.153.78.424 1.06.272.282.64.44 1.025.44z",
    fill: "url(#paint0_linear)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.449 24h9.102c.384 0 .753-.158 1.025-.44.271-.28.424-.662.424-1.06s-.153-.78-.424-1.06A1.424 1.424 0 0025.55 21H16.45c-.384 0-.753.158-1.025.44A1.527 1.527 0 0015 22.5c0 .398.153.78.424 1.06.272.282.64.44 1.025.44z",
    fill: "url(#paint1_linear)"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint0_linear",
    x1: 3366.14,
    y1: 61,
    x2: 3366.14,
    y2: 1491.47,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7FBDFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#00ACEA"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "paint1_linear",
    x1: 3366.14,
    y1: 57,
    x2: 3366.14,
    y2: 1487.47,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#7FBDFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#00ACEA"
  }))));
}
var _default = SvgExpressDeparture;
exports["default"] = _default;