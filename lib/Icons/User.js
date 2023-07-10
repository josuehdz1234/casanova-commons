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
function SvgUser(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 59 73",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Ico_user_grande",
    transform: "translate(2 2)",
    fillRule: "nonzero",
    stroke: "#7FBDFF",
    strokeWidth: 4
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28 32c8.837 0 16-7.163 16-16S36.837 0 28 0c-8.836 0-16 7.163-16 16 .01 8.832 7.167 15.99 16 16h0z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37.405 35.257c-2.329 3.081-6 4.899-9.903 4.899-3.904.001-7.577-1.813-9.907-4.893A3.216 3.216 0 0014.99 34C6.785 34 0 40.487 0 48.551v17.41C0 67.718 1.562 69 3.349 69h48.3C53.436 69 55 67.718 55 65.961v-17.41c0-8.064-6.788-14.55-14.989-14.55a3.217 3.217 0 00-2.606 1.256z",
    id: "Path"
  })))));
}
var _default = SvgUser;
exports["default"] = _default;