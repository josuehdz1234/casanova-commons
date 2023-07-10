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
function SvgGoldenShield(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 20 24",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "05-Cotizaci\\xF3n",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "01.03-Cotizar_Detalle_Descuento-dinero",
    transform: "translate(-207 -585)",
    fill: "#F2A000",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "proteger",
    transform: "translate(207 585)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.684 3.056c-2.266-.408-4.352-1.65-5.394-2.353a4.077 4.077 0 00-4.58 0c-1.042.704-3.129 1.945-5.394 2.353A2.812 2.812 0 000 5.826v5.658c0 1.87.521 3.692 1.549 5.416.804 1.35 1.918 2.639 3.311 3.833 2.343 2.007 4.662 3.054 4.76 3.097L10 24l.38-.17c.098-.043 2.417-1.09 4.76-3.097 1.393-1.194 2.507-2.484 3.311-3.833C19.479 15.176 20 13.354 20 11.484V5.826a2.812 2.812 0 00-2.316-2.77zm.447 8.428c0 2.787-1.403 5.408-4.17 7.792A20.73 20.73 0 0110 21.931c-1.654-.843-8.13-4.525-8.13-10.447V5.826a.94.94 0 01.776-.924C5.248 4.434 7.59 3.045 8.754 2.26a2.22 2.22 0 012.492 0c1.164.786 3.506 2.175 6.108 2.643.45.081.777.47.777.924v5.658z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Path",
    d: "M8.51 14.167l-3.221-3.17L4 12.443 8.632 17 16 8.319 14.593 7z"
  })))));
}
var _default = SvgGoldenShield;
exports["default"] = _default;