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
function SvgIcoCarOk(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 99",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 4
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#8E8E93",
    d: "M86.214 33L80 52h29zM76 82.5C76 74.492 82.492 68 90.5 68S105 74.492 105 82.5 98.508 97 90.5 97 76 90.508 76 82.5zm-58 0C18 74.492 24.492 68 32.5 68S47 74.492 47 82.5 40.508 97 32.5 97 18 90.508 18 82.5zM47 85h29M2 27C2 13.196 13.196 2 27 2s25 11.196 25 25-11.196 25-25 25S2 40.804 2 27z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#8E8E93",
    d: "M13.192 47l-.613 1.072-9.224 17.902A12.124 12.124 0 002 71.546C2 78.424 7.75 84 14.845 84H19m86.17 1h3.116a5.259 5.259 0 004.695-2.877l5.089-10.04A36.242 36.242 0 00122 55.719a14.587 14.587 0 00-5.322-11.263L94.697 26.393A14.958 14.958 0 0085.212 23H51"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#27CB8A",
    d: "M14 26.5l8.333 8.5L39 18"
  })));
}
var _default = SvgIcoCarOk;
exports["default"] = _default;