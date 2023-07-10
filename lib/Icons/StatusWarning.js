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
function SvgStatusWarning(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 124 100",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#8E8E93",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 4,
    d: "M86.828 33.034l-6.207 18.621h28.965zM76.483 82.69c0-7.999 6.484-14.483 14.483-14.483 7.998 0 14.482 6.484 14.482 14.483 0 7.998-6.484 14.482-14.482 14.482-8 0-14.483-6.484-14.483-14.482zm-57.931 0c0-7.999 6.484-14.483 14.482-14.483 8 0 14.483 6.484 14.483 14.483 0 7.998-6.484 14.482-14.483 14.482-7.998 0-14.482-6.484-14.482-14.482zm28.755 2.069H76.695M2 26.828C2 13.118 13.119 2 26.828 2s24.827 11.119 24.827 24.828-11.118 24.827-24.827 24.827C13.118 51.655 2 40.537 2 26.828z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#8E8E93",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 4,
    d: "M13.036 47.47l-.604 1.08-9.095 18.042A12.416 12.416 0 002 72.207c0 6.931 5.669 12.55 12.666 12.55h4.097m86.475.002h3.104a5.232 5.232 0 004.675-2.88l5.07-10.051a36.447 36.447 0 003.914-16.382 14.633 14.633 0 00-5.3-11.276L94.805 26.087a14.848 14.848 0 00-9.447-3.397H51.284"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F2A000",
    d: "M28.897 43.38a2.07 2.07 0 11-4.14-.004 2.07 2.07 0 014.14.004"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#F2A000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 4,
    d: "M26.828 35.103V10.276"
  })));
}
var _default = SvgStatusWarning;
exports["default"] = _default;