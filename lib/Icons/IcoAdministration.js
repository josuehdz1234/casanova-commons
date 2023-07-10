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
function SvgIcoAdministration(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 26 26",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "#FFF",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 11.556c1.105 0 2-.863 2-1.926 0-1.064-.895-1.926-2-1.926-1.104 0-2 .862-2 1.926.001 1.063.896 1.924 2 1.926zm0-3.082c.663 0 1.2.517 1.2 1.156 0 .638-.537 1.155-1.2 1.155-.663 0-1.2-.517-1.2-1.155.001-.638.538-1.155 1.2-1.156zM14.747 12.319a.449.449 0 00-.368.18 1.75 1.75 0 01-2.8 0 .452.452 0 00-.368-.18c-1.159 0-2.118.926-2.118 2.077v2.485c0 .25.221.433.474.433h6.824c.253 0 .474-.183.474-.433v-2.485c0-1.151-.96-2.077-2.118-2.077zm1.203 4.087h-5.942v-2.01A1.191 1.191 0 0111 13.233a2.674 2.674 0 003.547.36c.148-.106.285-.227.409-.36.571.098.99.587.994 1.163v2.01z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.979 5.596c-4.116 0-7.452 3.315-7.452 7.404s3.336 7.404 7.452 7.404 7.452-3.315 7.452-7.404c-.004-4.087-3.338-7.399-7.452-7.404zm0 13.9c-3.61 0-6.538-2.909-6.538-6.496 0-3.587 2.927-6.495 6.538-6.495S19.517 9.413 19.517 13c-.004 3.586-2.929 6.491-6.538 6.495z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.54 10.715l-2.408-.23a10.447 10.447 0 00-1.222-2.883l1.535-1.84a.452.452 0 00-.028-.611l-2.603-2.587a.46.46 0 00-.615-.028l-1.852 1.523a10.304 10.304 0 00-2.902-1.215L15.213.46a.448.448 0 00-.455-.403H11.2a.448.448 0 00-.454.403l-.233 2.388a10.323 10.323 0 00-2.902 1.213L5.759 2.537a.459.459 0 00-.615.028L2.541 5.15a.451.451 0 00-.029.611l1.535 1.84c-.55.896-.963 1.867-1.222 2.883l-2.407.23a.453.453 0 00-.41.453v3.666a.45.45 0 00.41.452l2.407.23a10.137 10.137 0 001.221 2.884l-1.534 1.84a.451.451 0 00.029.61l2.603 2.586a.459.459 0 00.615.029l1.853-1.525c.9.547 1.878.956 2.9 1.215l.233 2.394c.023.232.22.41.455.41h3.557a.457.457 0 00.456-.41l.232-2.394c1.022-.259 2-.668 2.9-1.215l1.854 1.525c.182.15.448.137.615-.029l2.603-2.585a.452.452 0 00.028-.611l-1.533-1.84c.554-.893.967-1.866 1.223-2.884l2.405-.23a.453.453 0 00.41-.452v-3.666a.45.45 0 00-.41-.452zm-.504 3.706l-2.319.222a.452.452 0 00-.4.356 9.275 9.275 0 01-1.352 3.184.452.452 0 00.03.54l1.48 1.777-2.014 2.001-1.788-1.471a.458.458 0 00-.542-.03 9.67 9.67 0 01-3.209 1.344.456.456 0 00-.356.4l-.224 2.306h-2.727l-.223-2.306a.457.457 0 00-.357-.4A9.657 9.657 0 017.826 21a.458.458 0 00-.542.03L5.496 22.5l-2.014-2 1.48-1.777a.45.45 0 00.03-.54 9.275 9.275 0 01-1.352-3.184.45.45 0 00-.4-.356L.922 14.42v-2.842l2.318-.222a.453.453 0 00.401-.353 9.548 9.548 0 011.353-3.19.45.45 0 00-.031-.538L3.482 5.5l2.014-2 1.789 1.47a.46.46 0 00.544.03 9.387 9.387 0 013.204-1.344.445.445 0 00.359-.392l.224-2.299h2.726l.224 2.299c.02.196.165.356.359.396A9.412 9.412 0 0118.13 5a.46.46 0 00.544-.029l1.788-1.472 2.014 2.002-1.48 1.776a.452.452 0 00-.031.539 9.55 9.55 0 011.353 3.188.452.452 0 00.4.354l2.318.221v2.842z"
  })));
}
var _default = SvgIcoAdministration;
exports["default"] = _default;