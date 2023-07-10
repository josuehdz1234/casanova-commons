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
function SvgIcoUserAlert(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 94 100",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "07-Panel-de-administraci\\xF3n",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Nuevo-usuario-MENSAJE-1",
    transform: "translate(-658 -301)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(660 303)",
    id: "ico_user_alert"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-2",
    transform: "translate(31 22)",
    fillRule: "nonzero",
    stroke: "#8E8E93",
    strokeWidth: 4
  }, /*#__PURE__*/React.createElement("path", {
    d: "M29.721 34c9.39 0 17-7.61 17-17s-7.61-17-17-17c-9.388 0-17 7.61-17 17 .011 9.384 7.615 16.99 17 17h0z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M39.55 37.718c-2.462 3.257-6.344 5.179-10.471 5.179-4.128.001-8.011-1.917-10.475-5.172a3.4 3.4 0 00-2.756-1.335C7.174 36.39 0 43.247 0 51.772v18.405c0 1.857 1.652 3.212 3.541 3.212h51.07c1.89 0 3.543-1.355 3.543-3.212V51.772c0-8.525-7.178-15.382-15.848-15.382a3.402 3.402 0 00-2.756 1.328z",
    id: "Path"
  })), /*#__PURE__*/React.createElement("g", {
    id: "ico-car-warning"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 24.828C0 11.118 11.027 0 24.622 0c13.596 0 24.623 11.119 24.623 24.828S38.218 49.655 24.622 49.655C11.027 49.655 0 38.537 0 24.828z",
    id: "Stroke-8494",
    stroke: "#8E8E93",
    strokeWidth: 4,
    fill: "#FFF",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.674 41.38c0 1.141-.919 2.068-2.052 2.068a2.061 2.061 0 01-2.051-2.069c0-1.142.919-2.069 2.051-2.069 1.133 0 2.052.927 2.052 2.07",
    id: "Fill-8500",
    fill: "#F2A000"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Stroke-8502",
    stroke: "#F2A000",
    strokeWidth: 4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M24.622 33.103V8.276"
  }))))));
}
var _default = SvgIcoUserAlert;
exports["default"] = _default;