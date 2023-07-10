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
function SvgCalendar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "prefix__calendar",
    d: "M22 2.25a2 2 0 012 2V22a2 2 0 01-2 2H2a2 2 0 01-2-2V4.25a2 2 0 012-2h3.25V.75a.75.75 0 111.5 0v1.5h4.5V.75a.75.75 0 111.5 0v1.5h4.5V.75a.749.749 0 111.5 0v1.5H22zM22.5 22V4.25a.5.5 0 00-.5-.5h-3.25v1.5a.749.749 0 11-1.5 0v-1.5h-4.5v1.5a.75.75 0 11-1.5 0v-1.5h-4.5v1.5a.75.75 0 11-1.5 0v-1.5H2a.5.5 0 00-.5.5V22a.5.5 0 00.5.5h20a.5.5 0 00.5-.5zM5.25 9h3v2.25h-3V9zm0 3.75h3V15h-3v-2.25zm0 3.75h3v2.25h-3V16.5zm5.25 0h3v2.25h-3V16.5zm0-3.75h3V15h-3v-2.25zm0-3.75h3v2.25h-3V9zm5.25 7.5h3v2.25h-3V16.5zm0-3.75h3V15h-3v-2.25zm0-3.75h3v2.25h-3V9z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "prefix__bcalendar",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#prefix__calendar"
  })), /*#__PURE__*/React.createElement("use", {
    fill: "#010002",
    fillRule: "nonzero",
    xlinkHref: "#prefix__calendar"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#007AFF",
    mask: "url(#prefix__bcalendar)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
}
var _default = SvgCalendar;
exports["default"] = _default;