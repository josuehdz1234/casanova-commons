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
function SvgLogoSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 72 72",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 36,
    cy: 36,
    r: 36,
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#001A70",
    d: "M49.275 43.507C46.695 47.634 42.137 50 36.764 50h-.036c-8.037-.016-14.574-6.31-14.574-14.031 0-7.563 6.788-13.953 14.822-13.953 4.973 0 9.524 2.525 12.177 6.753l.042.067h4.698l-.075-.185C51.295 22.379 44.366 18 36.968 18 26.51 18 18 26.088 18 36.029 18 45.939 26.561 54 37.084 54c7.354 0 13.8-3.973 16.824-10.367l.092-.194h-4.684l-.041.068z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F2A000",
    d: "M36 33.478h24V31.5H36zm0 7.684h21v-1.978H36zm0-3.841h30v-1.979H36z"
  })));
}
var _default = SvgLogoSmall;
exports["default"] = _default;