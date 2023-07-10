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
function SvgAtras(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 23",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "01-Vehiculos",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "03.06-Carga-masiva-CARGAR---ERROR",
    transform: "translate(-175 -894)",
    fill: "#CF703E",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "card",
    transform: "translate(99 234)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Boton/atras",
    transform: "translate(36 644)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "icon/atras",
    transform: "translate(40 15)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.46 1.333a.968.968 0 011.461 0 1.19 1.19 0 010 1.571l-7.41 8.047h19.451c.57 0 1.038.492 1.038 1.111s-.468 1.127-1.038 1.127H3.512l7.41 8.032c.394.444.394 1.159 0 1.587a.968.968 0 01-1.462 0L.296 12.856a1.19 1.19 0 010-1.571L9.46 1.333z",
    id: "Path"
  })))))));
}
var _default = SvgAtras;
exports["default"] = _default;