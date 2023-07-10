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
function SvgMoreImages(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 70 70",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "05-Cotizaci\\xF3n",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "09.02.02-Elegir-tomar-m\\xE1s-fotos",
    transform: "translate(-135 -874)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "M\\xE1sfotos",
    transform: "translate(135 874)"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    stroke: "#FBFBFB",
    strokeWidth: 2,
    x: 1,
    y: 9,
    width: 60,
    height: 60,
    rx: 4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M66 0a4 4 0 014 4v54a4 4 0 01-4 4H12a4 4 0 01-4-4V4a4 4 0 014-4h54zM39.033 16.533h-.066a1 1 0 00-1 1v12.433H25.532a1 1 0 00-1 1v.067a1 1 0 001 1h12.433v12.434a1 1 0 001 1h.067a1 1 0 001-1V32.033h12.434a1 1 0 001-1v-.066a1 1 0 00-1-1H40.032l.001-12.434a1 1 0 00-1-1z",
    id: "Combined-Shape",
    fill: "#FBFBFB"
  })))));
}
var _default = SvgMoreImages;
exports["default"] = _default;