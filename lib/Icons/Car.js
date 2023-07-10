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
function SvgCar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 53 38",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    className: "main-icon",
    d: "M50.973 14.119c1.29 1.144 2.016 2.719 2.027 4.367v15.147C52.989 36.048 50.87 38 48.266 38h-2.99c-2.604 0-4.722-1.952-4.733-4.367v-2.141H12.457v2.141C12.446 36.048 10.328 38 7.724 38h-2.99C2.129 38 .01 36.048 0 33.633V18.874c0-1.764.838-3.443 2.288-4.587l1.664-1.428L7.95 2.855C8.64 1.145 10.407 0 12.378 0h28.957c1.971.01 3.738 1.144 4.428 2.855l4.055 10.13 1.155 1.134zM10.079 3.569l-3.533 8.818h22.627c.498-3.139 3.16-5.606 6.545-6.068 4.247-.588 8.2 2.131 8.822 6.068h2.64l-3.534-8.818c-.363-.882-1.28-1.47-2.3-1.47H12.379c-1.02 0-1.937.578-2.299 1.47zm32.151 8.818c-.453-1.984-2.118-3.527-4.247-3.947-2.978-.578-5.9 1.186-6.523 3.947h10.77zM10.192 33.633v-2.141H4.734c-.895 0-1.79-.2-2.469-.61v2.751c.011 1.26 1.11 2.268 2.469 2.268h2.99c1.358 0 2.457-1.008 2.468-2.268zm40.543 0v-2.75c-.68.41-1.574.609-2.469.609h-5.458v2.141c.011 1.25 1.11 2.268 2.468 2.268h2.99c1.36 0 2.458-1.008 2.469-2.268zm-2.469-4.24c1.348.01 2.458-.998 2.469-2.247h-.011v-8.66c0-1.082-.487-2.12-1.337-2.866-.01-.021-.045-.032-.056-.053l-1.087-1.08H5.357l-1.54 1.343-.046.042c-.951.745-1.506 1.847-1.506 3.002v8.272c.011 1.26 1.121 2.257 2.469 2.246h43.532zM15.842 18c.637 0 1.158.5 1.158 1.111v5.778C17 25.5 16.479 26 15.842 26H7.158C6.52 26 6 25.5 6 24.889V19.11C6 18.5 6.521 18 7.158 18h8.684zm-1.158 5.778v-3.556H8.316v3.556h6.368zM46.842 18c.637 0 1.158.5 1.158 1.111v5.778C48 25.5 47.479 26 46.842 26h-8.684C37.52 26 37 25.5 37 24.889V19.11c0-.61.521-1.11 1.158-1.11h8.684zm-1.158 5.778v-3.556h-6.368v3.556h6.368zM31.885 23c.613 0 1.115.45 1.115 1s-.502 1-1.115 1h-10.77C20.502 25 20 24.55 20 24s.502-1 1.115-1h10.77zm0-3c.613 0 1.115.45 1.115 1s-.502 1-1.115 1h-10.77C20.502 22 20 21.55 20 21s.502-1 1.115-1h10.77z",
    id: "path2"
  }));
}
var _default = SvgCar;
exports["default"] = _default;