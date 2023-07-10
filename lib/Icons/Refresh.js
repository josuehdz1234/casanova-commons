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
function SvgRefresh(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 32 32",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    className: "main-icon",
    d: "M22.045 27.362c1.745-.62 2.93-1.387 4.365-2.823 2.137-2.139 3.089-4.046 3.493-6.999.723-5.28-2.674-10.768-7.762-12.537C14.787 2.445 7.05 7.315 6.334 14.95l-.119 1.273-1.326-1.079c-1.458-1.187-1.876-1.3-2.504-.671-.778.778-.572 1.076 2.468 3.563C6.74 19.58 7.426 20.05 7.795 20.05c.411 0 .712-.276 2.039-1.87 3.014-3.622 3.148-3.878 2.396-4.584-.765-.718-1.425-.332-2.992 1.75-.291.387-.591.706-.666.71-.209.007.05-1.784.419-2.904 1.002-3.044 3.747-5.591 6.799-6.31 1.371-.324 3.473-.324 4.711-.002 2.248.586 4.735 2.42 5.827 4.297 1.26 2.167 1.71 4.894 1.178 7.149-.64 2.716-2.696 5.318-5.125 6.486-.683.328-1.368.597-1.522.597-.394 0-1.097.746-1.097 1.163 0 .432.712 1.168 1.114 1.152.164-.008.69-.152 1.17-.322z"
  }));
}
var _default = SvgRefresh;
exports["default"] = _default;