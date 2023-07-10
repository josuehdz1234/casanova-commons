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
function SvgList(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    className: "main-icon",
    d: "M15.414 0L21 5.834V24H3V0zm-.542.8H3.766v22.4h16.468V6.4h-5.362zm-5.6 15.288a.37.37 0 01.537.062.411.411 0 01-.06.562l-1.914 1.6a.366.366 0 01-.24.088.375.375 0 01-.27-.117l-.766-.8a.412.412 0 010-.566.372.372 0 01.542 0l.523.547zm7.515 1.112c.212 0 .383.179.383.4 0 .221-.171.4-.383.4H10.66a.391.391 0 01-.383-.4c0-.221.171-.4.383-.4zm-7.516-5.512a.372.372 0 01.538.062.411.411 0 01-.06.562l-1.914 1.6a.366.366 0 01-.24.088.375.375 0 01-.27-.117l-.766-.8a.412.412 0 010-.566.372.372 0 01.542 0l.523.547zm7.516 1.112c.212 0 .383.179.383.4 0 .221-.171.4-.383.4H10.66a.391.391 0 01-.383-.4c0-.221.171-.4.383-.4zM9.271 7.288a.372.372 0 01.538.062.411.411 0 01-.06.562l-1.914 1.6a.366.366 0 01-.24.088.375.375 0 01-.27-.117l-.766-.8a.412.412 0 010-.566.372.372 0 01.542 0l.523.547zM16.787 8.4c.212 0 .383.179.383.4 0 .221-.171.4-.383.4H10.66a.391.391 0 01-.383-.4c0-.221.171-.4.383-.4zm-1.149-7.034V5.6h4.055z"
  }));
}
var _default = SvgList;
exports["default"] = _default;