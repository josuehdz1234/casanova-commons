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
function SvgVisa(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 50 50",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "qbgcm357ta",
    d: "M.116-.01h11.562v14.593H.116z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "rvh9pzlsuc",
    d: "M0 .238h9.36v7.688H0z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#00529B",
    d: "M19.177 18.996l-2.408 14.14h3.85l2.413-14.14z"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(22.917 18.76)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "ybh259mxjb",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#qbgcm357ta"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#00529B",
    d: "M11.678.584C10.918.296 9.722-.01 8.226-.01c-3.806 0-6.487 1.92-6.512 4.665C1.693 6.688 3.628 7.82 5.09 8.499c1.5.691 2.002 1.133 1.998 1.752-.013.948-1.198 1.379-2.309 1.379-1.541 0-2.358-.213-3.625-.742l-.498-.223-.541 3.165c.902.396 2.566.735 4.295.754 4.048 0 6.682-1.896 6.709-4.831.014-1.607-1.013-2.832-3.234-3.84-1.35-.654-2.172-1.092-2.162-1.752 0-.59.698-1.217 2.204-1.217a7.074 7.074 0 012.883.542l.346.163.521-3.065",
    mask: "url(#ybh259mxjb)"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#00529B",
    d: "M39.726 28.123l1.533-3.952c-.019.037.319-.82.515-1.35l.258 1.218s.742 3.375.894 4.084h-3.2zm4.752-9.113h-2.975c-.925 0-1.615.25-2.019 1.169l-5.723 12.958h4.046s.66-1.743.813-2.123l4.933.007c.114.495.47 2.116.47 2.116h3.574l-3.12-14.127zm-30.942-.004l-3.773 9.642-.402-1.96c-.702-2.259-2.892-4.705-5.336-5.93l3.45 12.363 4.077-.004 6.068-14.11h-4.083"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 18.76)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "y6v2jdqeid",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#rvh9pzlsuc"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#F3AA00",
    d: "M6.264.238H.05L0 .534c4.833 1.167 8.035 3.998 9.36 7.392L8.01 1.432C7.777.536 7.1.269 6.264.238",
    mask: "url(#y6v2jdqeid)"
  }))));
}
var _default = SvgVisa;
exports["default"] = _default;