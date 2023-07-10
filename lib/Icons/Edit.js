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
function SvgEdit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    className: "main-icon",
    d: "M22.151 15.061a.6.6 0 01.598.601v5.334A3 3 0 0119.76 24H2.99A3 3 0 010 20.996V5.341a3 3 0 012.989-3.003h5.307c.33 0 .597.269.597.6a.599.599 0 01-.597.601H2.989a1.801 1.801 0 00-1.794 1.802v15.655a1.8 1.8 0 001.794 1.802H19.76c.99 0 1.792-.807 1.793-1.802v-5.334c0-.332.268-.6.598-.6zm.361-14.27l.701.706a2.714 2.714 0 010 3.823L12.55 16.038a.606.606 0 01-.263.154l-5.063 1.41a.602.602 0 01-.735-.74l1.402-5.088a.6.6 0 01.153-.265L18.708.792a2.68 2.68 0 013.804 0zM9.347 11.9l2.814 2.829 8.728-8.772-2.815-2.829L9.347 11.9zm-.563 1.134l-.861 3.126 3.11-.866-2.249-2.26zM22.368 4.47a1.508 1.508 0 000-2.124l-.701-.705a1.49 1.49 0 00-2.114 0l-.634.637 2.815 2.83.634-.638z"
  }));
}
var _default = SvgEdit;
exports["default"] = _default;