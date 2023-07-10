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
function SvgCamera(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 86 86",
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
    transform: "translate(-677 -866)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "camara",
    transform: "translate(677 866)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "continue",
    fill: "#CF703E"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "Oval",
    cx: 43,
    cy: 43,
    r: 43
  })), /*#__PURE__*/React.createElement("g", {
    id: "toma-de-fotografias",
    transform: "translate(19 25)",
    fill: "#FFF",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.56 11C19.39 11 16 14.391 16 18.56a1.44 1.44 0 002.88 0 4.684 4.684 0 014.68-4.68 1.44 1.44 0 000-2.88z",
    id: "Path"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M46.542 7.02H38.17L30.246.343A1.46 1.46 0 0029.305 0h-10.61a1.46 1.46 0 00-.94.343L9.83 7.02H1.458C.653 7.02 0 7.671 0 8.474v25.072C0 34.35.653 35 1.458 35h45.084c.805 0 1.458-.65 1.458-1.454V8.474c0-.803-.653-1.454-1.458-1.454zm-1.457 25.073H2.915v-15.93h8.383c-.12.706-.185 1.43-.185 2.17 0 7.086 5.781 12.852 12.887 12.852 7.106 0 12.887-5.766 12.887-12.853 0-.74-.064-1.463-.185-2.169h8.383v15.93zM24 28.278c-5.498 0-9.971-4.462-9.971-9.946S18.502 8.387 24 8.387c5.499 0 9.972 4.461 9.972 9.945S29.498 28.278 24 28.278zM2.915 9.928h7.449c.344 0 .677-.122.94-.344l7.924-6.677h9.543l7.925 6.677c.263.222.596.344.94.344h7.449v3.328h-9.247C33.86 8.686 29.298 5.479 24 5.479c-5.301 0-9.864 3.21-11.84 7.781-.028-.001-.056-.004-.085-.004h-9.16V9.928z",
    id: "Shape"
  }))))));
}
var _default = SvgCamera;
exports["default"] = _default;