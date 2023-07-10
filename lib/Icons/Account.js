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
function SvgAccount(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M20.88 6.495L15.203.14a.42.42 0 00-.31-.14h-8.46c-.947 0-1.718.83-1.718 1.849v6.459h-3.43C.576 8.308 0 8.928 0 9.69v6.926C0 17.379.576 18 1.285 18h3.43v4.154c0 1.018.77 1.846 1.717 1.846h12.85C20.23 24 21 23.173 21 22.155V6.815a.479.479 0 00-.12-.32zM15 1.246l4.66 5.216H15V1.246zM1.285 17.076c-.236 0-.428-.206-.428-.46V9.692c0-.254.192-.46.428-.46h11.573c.236 0 .428.206.428.46v6.926c0 .253-.192.46-.428.46H1.285zm18.858 5.08c0 .508-.386.92-.86.92H6.431c-.475 0-.86-.413-.86-.922V18h7.286c.708 0 1.285-.62 1.285-1.383V9.69c0-.763-.577-1.383-1.285-1.383H5.57v-6.46c0-.51.386-.925.86-.925h7.712v6c0 .255.192.462.428.462h5.572v14.77z",
    fill: "#8E8E93",
    fillRule: "nonzero"
  }));
}
var _default = SvgAccount;
exports["default"] = _default;