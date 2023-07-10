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
function SvgAttach(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 22 24",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    d: "M20.457 14.792l-1.805-1.775L10.53 5.03a3.875 3.875 0 00-5.405.01 3.72 3.72 0 00-.01 5.315l8.122 7.989a.861.861 0 001.203 0 .827.827 0 000-1.184L6.318 9.171a2.067 2.067 0 010-2.958 2.152 2.152 0 013.008 0l8.125 7.987 1.805 1.775a3.722 3.722 0 01-.001 5.326 3.876 3.876 0 01-5.417 0l-1.503-1.48-8.423-8.283-.602-.592a5.375 5.375 0 01.06-7.632c2.136-2.101 5.592-2.128 7.761-.06l9.025 8.876a.861.861 0 00.822.216.844.844 0 00.601-.592.828.828 0 00-.22-.808l-9.024-8.874C9.508-.695 4.938-.69 2.118 2.083a7.028 7.028 0 00-.011 10.047l9.024 8.874 1.506 1.48c2.172 2.051 5.614 2.017 7.743-.078a5.375 5.375 0 00.077-7.614z",
    id: "path-1"
  })), /*#__PURE__*/React.createElement("g", {
    id: "01-Vehiculos",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "calendar-acarga",
    transform: "translate(-585 -2038)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "icono/placeholder",
    transform: "translate(585 2038)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Mask",
    fill: "#007AFF",
    fillRule: "nonzero",
    transform: "matrix(-1 0 0 1 22 0)",
    xlinkHref: "#path-1"
  })))));
}
var _default = SvgAttach;
exports["default"] = _default;