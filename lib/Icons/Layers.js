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
function SvgLayers(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    className: "main-icon",
    d: "M23.953 10.658c0-.507-.281-.962-.734-1.189l-1.783-.891 1.783-.892c.453-.227.734-.682.734-1.188a1.32 1.32 0 00-.734-1.188L13.15.275a2.64 2.64 0 00-2.347 0L.734 5.31A1.32 1.32 0 000 6.498c0 .506.281.961.734 1.188l1.784.892-1.784.892C.281 9.696 0 10.15 0 10.658c0 .506.281.961.734 1.188l1.784.892-1.784.891A1.321 1.321 0 000 14.817c0 .506.281.962.734 1.189l10.069 5.034a2.638 2.638 0 002.348 0l10.068-5.034c.453-.227.734-.683.734-1.19 0-.505-.281-.96-.734-1.187l-1.783-.891 1.783-.892c.453-.227.734-.682.734-1.188zM1.227 6.7a.217.217 0 01-.126-.203c0-.053.017-.149.126-.203L11.295 1.26a1.522 1.522 0 011.363 0l10.068 5.034c.11.054.126.15.126.203a.218.218 0 01-.126.203l-10.068 5.034a1.534 1.534 0 01-1.363 0L1.227 6.701zm21.5 7.913c.109.055.125.15.125.203 0 .053-.016.15-.125.204l-10.069 5.034a1.534 1.534 0 01-1.363 0L1.227 15.02a.218.218 0 01-.126-.204c0-.052.016-.148.126-.203l2.522-1.26 7.054 3.526c.367.184.77.275 1.174.275.403 0 .806-.091 1.174-.275l7.053-3.527 2.523 1.261zm0-3.753l-10.069 5.034a1.534 1.534 0 01-1.363 0L1.227 10.861a.217.217 0 01-.126-.203c0-.053.016-.149.126-.204l2.522-1.26 7.054 3.526a2.626 2.626 0 002.348 0l7.053-3.527 2.522 1.261c.11.055.126.151.126.204a.218.218 0 01-.126.203z"
  }));
}
var _default = SvgLayers;
exports["default"] = _default;