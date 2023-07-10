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
function SvgCancelBlack(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 90 90",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M45 7.5C24.262 7.5 7.5 24.262 7.5 45c0 20.737 16.762 37.5 37.5 37.5 20.737 0 37.5-16.763 37.5-37.5C82.5 24.262 65.737 7.5 45 7.5zm16.125 53.625a3.734 3.734 0 01-5.288 0L45 50.288 34.163 61.124a3.734 3.734 0 01-5.288 0 3.734 3.734 0 010-5.288L39.712 45 28.875 34.163a3.734 3.734 0 010-5.288 3.734 3.734 0 015.288 0L45 39.712l10.837-10.837a3.734 3.734 0 015.288 0 3.734 3.734 0 010 5.288L50.288 45l10.837 10.837c1.425 1.425 1.425 3.825 0 5.288z",
    fill: "#E23B4F"
  }));
}
var _default = SvgCancelBlack;
exports["default"] = _default;