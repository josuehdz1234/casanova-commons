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
function SvgFilePdf(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 27",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "01-Vehiculos",
    stroke: "none",
    strokeWidth: 1,
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "04.03-Archivos-cargados",
    transform: "translate(-754 -611)",
    fill: "fill",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "card",
    transform: "translate(96 148)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "File-PDF",
    transform: "translate(634 411)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "textarea",
    transform: "translate(2 39)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M45.863 20.307l-6.489-7.148a.477.477 0 00-.353-.159h-9.67c-1.083 0-1.963.933-1.963 2.08v7.266h-3.92c-.81 0-1.468.698-1.468 1.557v7.79c0 .859.659 1.557 1.469 1.557h3.919v4.674c0 1.145.88 2.076 1.963 2.076h14.686C45.12 40 46 39.07 46 37.925V20.667a.536.536 0 00-.137-.36zm-6.72-5.905l5.327 5.867h-5.327v-5.867zm-15.674 17.81c-.27 0-.49-.233-.49-.518v-7.791c0-.286.22-.518.49-.518h13.226c.27 0 .489.232.489.518v7.79c0 .286-.22.519-.49.519H23.47zm21.551 5.713c0 .571-.44 1.037-.983 1.037H29.351c-.543 0-.984-.466-.984-1.038V33.25h8.328c.81 0 1.468-.698 1.468-1.556v-7.791c0-.859-.658-1.557-1.468-1.557h-8.328V15.08c0-.574.441-1.042.984-1.042h8.812v6.75c0 .287.22.52.49.52h6.367v16.617zM27.856 26.178c.162.224.244.514.244.869 0 .273-.047.504-.141.69a1.205 1.205 0 01-.798.651c-.203.043-.496.064-.881.064h-.554v1.683h-.85v-4.46h1.364c.516 0 .853.022 1.01.066.241.067.443.213.606.437zm-.728 1.228a.626.626 0 00.096-.347.579.579 0 00-.476-.6 3.851 3.851 0 00-.612-.03h-.41v1.266h.465c.335 0 .559-.024.672-.07a.564.564 0 00.265-.22zm5.055-.513c.092.285.138.636.138 1.054 0 .367-.043.684-.129.95a1.99 1.99 0 01-.45.787c-.148.152-.347.271-.598.356-.187.063-.438.095-.751.095h-1.599v-4.46h1.553c.35 0 .617.028.8.085.247.077.459.214.635.41.176.197.31.438.401.723zm-.826 1.831c.057-.2.086-.472.086-.816 0-.345-.029-.61-.086-.794a1.034 1.034 0 00-.241-.432.793.793 0 00-.393-.21c-.119-.029-.352-.043-.698-.043h-.382v2.954h.635c.237 0 .408-.014.513-.042a.77.77 0 00.343-.186c.091-.087.165-.23.223-.43zm4.574-2.295h-2.034v1.056h1.756v.754h-1.756v1.896h-.85v-4.46h2.884v.754z",
    id: "ico_pdf"
  })))))));
}
var _default = SvgFilePdf;
exports["default"] = _default;