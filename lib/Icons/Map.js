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
function SvgMap(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    className: "main-icon",
    d: "M12.07 0a7.4 7.4 0 015.32 2.247c2.63 2.68 2.957 7.724.699 10.793l-1.196 1.76h2.81L24 24H0l4.297-9.2h2.948l-1.204-1.772c-2.249-3.056-1.922-8.1.708-10.781A7.401 7.401 0 0112.069 0zM7.787 15.6H4.793l-3.55 7.6h21.514l-3.55-7.6H16.35l-4.28 6.303L7.787 15.6zM12.07.8c-1.8 0-3.493.714-4.766 2.012-2.374 2.42-2.666 6.975-.626 9.748L8.2 14.8l3.87 5.697 5.383-7.925c2.049-2.785 1.756-7.34-.618-9.76A6.629 6.629 0 0012.07.8zm.069 4c1.514 0 2.746 1.256 2.746 2.8 0 1.543-1.232 2.8-2.746 2.8-1.515 0-2.747-1.257-2.747-2.8 0-1.544 1.233-2.8 2.747-2.8zm0 .8c-1.082 0-1.962.897-1.962 2s.88 2 1.962 2c1.082 0 1.962-.897 1.962-2s-.88-2-1.962-2z"
  }));
}
var _default = SvgMap;
exports["default"] = _default;