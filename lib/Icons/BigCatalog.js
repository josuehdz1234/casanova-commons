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
function SvgBigCatalog(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 62 62",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "07-Panel-de-administraci\\xF3n",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Panel-reportes",
    transform: "translate(-689 -548)",
    fill: "#7FBDFF"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-4",
    transform: "translate(620 500)"
  }, /*#__PURE__*/React.createElement("g", {
    fillRule: "nonzero",
    transform: "translate(69 48)",
    id: "Ico_catalogo_grande"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M59.996 12H28.004A2.002 2.002 0 0126 10c0-1.105.897-2 2.004-2h31.992C61.103 8 62 8.895 62 10s-.897 2-2.004 2zM10.02 12H1.98A1.99 1.99 0 010 10c0-1.105.886-2 1.98-2h8.04A1.99 1.99 0 0112 10c0 1.105-.886 2-1.98 2zM60.004 54H27.996A1.998 1.998 0 0126 52c0-1.105.894-2 1.996-2h32.008c1.102 0 1.996.895 1.996 2s-.894 2-1.996 2zM10.02 54H1.98A1.99 1.99 0 010 52c0-1.105.886-2 1.98-2h8.04A1.99 1.99 0 0112 52c0 1.105-.886 2-1.98 2zM60.045 33h-8.09C50.875 33 50 32.105 50 31s.875-2 1.955-2h8.09c1.08 0 1.955.895 1.955 2s-.875 2-1.955 2zM34.004 33H1.996A1.998 1.998 0 010 31c0-1.105.894-2 1.996-2h32.008c1.102 0 1.996.895 1.996 2s-.894 2-1.996 2z",
    id: "Path"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.92 21H10.08A2.08 2.08 0 018 18.92V2.08C8 .93 8.93 0 10.08 0h16.84C28.07 0 29 .93 29 2.08v16.84A2.08 2.08 0 0126.92 21zm-14.762-4.158h12.684V4.158H12.158v12.684zM26.92 62H10.08A2.08 2.08 0 018 59.92V43.08c0-1.15.93-2.08 2.08-2.08h16.84c1.15 0 2.08.93 2.08 2.08v16.84A2.08 2.08 0 0126.92 62zm-14.762-4.158h12.684V45.158H12.158v12.684zM51.92 41H35.08A2.08 2.08 0 0133 38.92V22.08c0-1.15.93-2.08 2.08-2.08h16.84c1.15 0 2.08.93 2.08 2.08v16.84A2.08 2.08 0 0151.92 41zm-14.762-4.158h12.684V24.158H37.158v12.684z",
    id: "Shape"
  }))))));
}
var _default = SvgBigCatalog;
exports["default"] = _default;