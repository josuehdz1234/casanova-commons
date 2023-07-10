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
function SvgVehicleKey(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    className: "main-icon",
    d: "M15.96 8.227c.74 0 1.402.457 1.662 1.15l1.572 4.234.464.484c.49.465.77 1.11.776 1.785v7.708a.417.417 0 01-.409.398h-3.933a.393.393 0 01-.381-.398v-2.3H4.723v2.3a.393.393 0 01-.382.398H.41a.416.416 0 01-.409-.398v-7.55a2.471 2.471 0 01.876-1.873l.66-.602L3.09 9.377c.26-.692.923-1.15 1.663-1.15zM3.951 21.287H.772v1.928h3.18v-1.928zm15.71 0h-3.18v1.928h3.18v-1.928zm-1.006-7.132H2.018l-.618.574-.018.016a1.7 1.7 0 00-.61 1.294v4.477h18.89V15.88a1.712 1.712 0 00-.543-1.236c-.005-.005-.023-.014-.028-.02l-.435-.47zm-14.738 1.88a1.518 1.518 0 110 3.035h-.34a1.518 1.518 0 010-3.036zm12.938 0a1.518 1.518 0 110 3.035h-.34a1.518 1.518 0 010-3.036zm-3.651 0c.213 0 .385.172.385.385v2.217a.385.385 0 01-.385.385H7.229a.385.385 0 01-.386-.385V16.42c0-.213.173-.386.386-.386zm-9.287.77h-.34a.747.747 0 000 1.494h.34a.747.747 0 000-1.494zm12.938 0h-.34a.747.747 0 000 1.494h.34a.747.747 0 000-1.494zm-4.037 0H7.614v1.446h5.205v-1.446zm3.14-7.807H4.752a.995.995 0 00-.94.642L2.42 13.384h15.871L16.9 9.64a.995.995 0 00-.94-.642zM14.58 0a3.513 3.513 0 012.433 6 3.52 3.52 0 01-5.698-1.05H3.517a.395.395 0 01-.314-.17l-.738-1.04a.391.391 0 01.026-.485L3.943 1.63a.385.385 0 01.542-.032l.749.657.705-.65a.381.381 0 01.293-.1.381.381 0 01.271.147l.581.743h.478l.51-.252a.375.375 0 01.172-.037h3.07A3.514 3.514 0 0114.579 0zm1.888 1.573a2.745 2.745 0 00-3.879 0 2.726 2.726 0 000 3.88 2.745 2.745 0 003.879 0 2.746 2.746 0 000-3.88zM13.85 2.766a1.344 1.344 0 112.238 1.492 1.344 1.344 0 01-2.238-1.492zM4.264 2.43L3.27 3.549l.444.63h7.36c-.08-.43-.08-.871 0-1.301h-2.74l-.51.251a.376.376 0 01-.172.038h-.757a.392.392 0 01-.303-.151l-.438-.562-.654.604a.385.385 0 01-.515.006l-.722-.634zm10.926.552a.575.575 0 10-.439 1.061.575.575 0 00.439-1.06z"
  }));
}
var _default = SvgVehicleKey;
exports["default"] = _default;