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
function SvgAttachClip(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 22 24",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    className: "main-icon",
    d: "M1.543 14.792l1.805-1.775L11.47 5.03a3.875 3.875 0 015.405.01 3.72 3.72 0 01.01 5.315l-8.122 7.989a.861.861 0 01-1.203 0 .827.827 0 010-1.184l8.122-7.989c.83-.817.83-2.14 0-2.958a2.152 2.152 0 00-3.008 0L4.549 14.2l-1.805 1.775a3.722 3.722 0 00.001 5.326 3.876 3.876 0 005.417 0l1.503-1.48 8.423-8.283.602-.592a5.375 5.375 0 00-.06-7.632c-2.136-2.101-5.592-2.128-7.761-.06L1.844 12.13a.861.861 0 01-.822.216.844.844 0 01-.601-.592.828.828 0 01.22-.808l9.024-8.874c2.827-2.767 7.397-2.762 10.217.011a7.028 7.028 0 01.011 10.047l-9.024 8.874-1.506 1.48C7.19 24.535 3.749 24.5 1.62 22.406a5.375 5.375 0 01-.077-7.614z",
    id: "attach-clip"
  }));
}
var _default = SvgAttachClip;
exports["default"] = _default;