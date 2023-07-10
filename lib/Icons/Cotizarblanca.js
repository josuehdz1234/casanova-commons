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
function SvgCotizarblanca(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 20 28",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "05-Cotizaci\\xF3n",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero",
    transform: "translate(0 1)",
    id: "ico/cotizarblanca",
    fill: "#FFF"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.787 15.694l-1.539-4.3a1.74 1.74 0 00-1.627-1.167h-1.313C13.5 10.227 11.3 12 10 12c-1.544 0-4-1.773-4-1.773H4.65a1.74 1.74 0 00-1.626 1.168l-1.52 4.25-.647.611A2.547 2.547 0 000 18.158v7.665c.01.223.185.4.4.404h3.85a.393.393 0 00.373-.404v-2.336h10.754v2.336a.393.393 0 00.374.404H19.6a.416.416 0 00.4-.404v-7.826a2.572 2.572 0 00-.76-1.812l-.453-.491zM3.73 11.66a.975.975 0 01.92-.651h1.918c1.663 0 .931.99 3.431.99 2 0 2.134-.99 3.281-.99h2.34a.975.975 0 01.92.651l1.362 3.802H2.369L3.73 11.66zm.137 13.783H.755v-1.957h3.113v1.957zm12.264 0v-1.957h3.113v1.957h-3.113zm3.113-2.74H.755v-4.546c.004-.507.222-.987.597-1.313l.019-.017.604-.583H18.26l.426.477c.005.006.022.015.028.02.334.326.526.779.531 1.255v4.707z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.835 18.154h-.333c-.82 0-1.486.69-1.486 1.541s.665 1.541 1.486 1.541h.333c.82 0 1.485-.69 1.485-1.541s-.665-1.541-1.485-1.541zm0 2.3h-.333a.745.745 0 01-.731-.759c0-.419.327-.758.731-.758h.333c.403 0 .73.34.73.758a.745.745 0 01-.73.758zM16.498 18.154h-.333c-.82 0-1.485.69-1.485 1.541s.665 1.541 1.485 1.541h.333c.82 0 1.486-.69 1.486-1.541s-.665-1.541-1.486-1.541zm0 2.3h-.333a.745.745 0 01-.73-.759c0-.419.327-.758.73-.758h.333c.404 0 .731.34.731.758a.745.745 0 01-.731.758zM13.302 18.545a.385.385 0 00-.377-.391h-5.85a.385.385 0 00-.377.391v2.25c0 .217.17.392.377.392h5.85a.385.385 0 00.377-.391v-2.25zm-.755 1.86H7.453v-1.468h5.094v1.467z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12.4A6.4 6.4 0 1110-.4a6.4 6.4 0 010 12.8zm0-.8A5.6 5.6 0 1010 .4a5.6 5.6 0 000 11.2z",
    id: "Oval"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.284c0 .433-.15.791-.45 1.073-.301.283-.721.46-1.26.534V10h-.57V8.934c-.33 0-.65-.028-.96-.084A2.843 2.843 0 018 8.618v-.746c.245.118.527.214.846.29.32.074.611.112.873.112V6.17c-.604-.207-1.027-.448-1.27-.722-.243-.274-.365-.628-.365-1.062 0-.417.15-.76.449-1.028.299-.268.694-.43 1.186-.488V2h.57v.86a4.196 4.196 0 011.57.355l-.23.626a4.206 4.206 0 00-1.34-.335v2.076c.463.159.81.314 1.04.466.229.151.398.325.507.521.11.196.164.434.164.715zm-.751.062a.788.788 0 00-.197-.557c-.131-.142-.385-.283-.762-.423v1.86c.639-.096.959-.389.959-.88zM8.83 4.376c0 .243.066.437.199.584.132.147.362.285.69.416v-1.85c-.292.05-.513.15-.664.298a.745.745 0 00-.225.553z",
    id: "$"
  }))));
}
var _default = SvgCotizarblanca;
exports["default"] = _default;