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
function SvgArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 13.5a.965.965 0 01-.676-.273L1.03 6.095a.92.92 0 010-1.32.97.97 0 011.351 0L9 11.244l6.619-6.47a.97.97 0 011.351 0 .92.92 0 010 1.32l-7.294 7.132A.964.964 0 019 13.5z",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("mask", {
    id: "mask0_2422_3559",
    style: {
      maskType: 'alpha'
    },
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 4,
    width: 18,
    height: 10
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 13.5a.965.965 0 01-.676-.273L1.03 6.095a.92.92 0 010-1.32.97.97 0 011.351 0L9 11.244l6.619-6.47a.97.97 0 011.351 0 .92.92 0 010 1.32l-7.294 7.132A.964.964 0 019 13.5z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_2422_3559)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#007AFF",
    d: "M0 0h18v18H0z"
  })));
}
var _default = SvgArrow;
exports["default"] = _default;