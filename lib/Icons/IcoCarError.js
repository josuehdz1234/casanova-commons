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
function SvgIcoCarError(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 123 100",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 4
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "#8E8E93",
    d: "M86.127 33.034l-6.156 18.621h28.726zM75.867 82.69c0-7.999 6.43-14.483 14.363-14.483s14.363 6.484 14.363 14.483c0 7.998-6.43 14.482-14.363 14.482-7.932 0-14.363-6.484-14.363-14.482zm-57.452 0c0-7.999 6.43-14.483 14.363-14.483S47.141 74.69 47.141 82.69c0 7.998-6.43 14.482-14.363 14.482S18.415 90.688 18.415 82.69zm28.518 2.069h29.144M2 26.828C2 13.118 13.027 2 26.622 2c13.596 0 24.623 11.119 24.623 24.828S40.218 51.655 26.622 51.655C13.027 51.655 2 40.537 2 26.828z"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#8E8E93",
    d: "M12.945 47.47l-.6 1.08-9.02 18.042A12.521 12.521 0 002 72.207c0 6.931 5.622 12.55 12.562 12.55h4.062m85.761.002h3.078a5.185 5.185 0 004.637-2.88l5.027-10.051a36.693 36.693 0 003.882-16.382 14.68 14.68 0 00-5.257-11.276L94.04 26.087a14.65 14.65 0 00-9.368-3.397H50.876"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#E23B4F",
    d: "M18.415 18.552L34.83 35.103m-16.415 0L34.83 18.552"
  })));
}
var _default = SvgIcoCarError;
exports["default"] = _default;