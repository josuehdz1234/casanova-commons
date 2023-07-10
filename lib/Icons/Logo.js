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
function SvgLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 120 120",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 60,
    cy: 60,
    r: 60,
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001A70",
    d: "M82.124 72.512c-4.3 6.879-11.896 10.82-20.851 10.82h-.06c-13.394-.027-24.29-10.518-24.29-23.385 0-12.605 11.314-23.255 24.704-23.255 8.288 0 15.874 4.208 20.295 11.255l.07.112h7.83l-.125-.31C85.491 37.3 73.943 30 61.614 30 44.182 30 30 43.48 30 60.048 30 76.564 44.269 90 61.807 90c12.256 0 23-6.622 28.04-17.28L90 72.4h-7.806l-.07.113z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F2A000",
    d: "M60 55.797h40V52.5H60zm0 12.807h35v-3.297H60zm0-6.403h50v-3.298H60z"
  })));
}
var _default = SvgLogo;
exports["default"] = _default;