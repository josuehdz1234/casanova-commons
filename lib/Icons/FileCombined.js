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
function SvgFileCombined(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 38 48",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "01-Vehiculos",
    stroke: "none",
    strokeWidth: 1,
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "04.03-Archivos-cargados",
    transform: "translate(-555 -463)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "card",
    transform: "translate(96 148)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "File-XLS",
    transform: "translate(48 252)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "textarea",
    transform: "translate(411 63)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M26.82 1.172l10.02 10.125A3.996 3.996 0 0138 14.126V44c-.003 2.208-1.773 3.997-3.958 4H3.958C1.773 47.997.002 46.208 0 44V4C.002 1.792 1.773.003 3.958 0h20.064a3.912 3.912 0 012.799 1.172zM36.418 44V14.126a2.397 2.397 0 00-.696-1.698l-9.596-9.697V9.6c.001 1.325 1.064 2.399 2.375 2.4h4.75v1.6H28.5c-2.185-.003-3.956-1.792-3.958-4V1.658a2.37 2.37 0 00-.52-.058H3.958c-1.31.002-2.373 1.075-2.375 2.4v40c.002 1.325 1.064 2.398 2.375 2.4h30.084c1.31-.002 2.373-1.075 2.375-2.4zM14.25 5.6h7.125v1.6H14.25V5.6zm-5.542 0h3.167v1.6H8.708V5.6zm7.917 4.8h4.75V12h-4.75v-1.6zm-11.083 0h8.708V12H5.542v-1.6zm25.333 8c.437 0 .792.358.792.8v22.4c0 .442-.355.8-.792.8H7.125a.796.796 0 01-.792-.8V19.2c0-.442.355-.8.792-.8h23.75zm-.792 4.8V20H23.75v3.2h6.333zm-7.916 0V20h-6.334v3.2h6.334zM14.25 20H7.917v3.2h6.333V20zm-6.333 4.8v16h6.333v-16H7.917zm7.916 0v16h6.334v-16h-6.334zm7.917 16h6.333v-16H23.75v16z",
    id: "Combined-Shape"
  })))))));
}
var _default = SvgFileCombined;
exports["default"] = _default;