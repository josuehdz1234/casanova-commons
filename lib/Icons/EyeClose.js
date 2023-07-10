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
function SvgEyeClose(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "a",
    d: "M21.337.243a.795.795 0 010 1.17L3.902 17.758A.91.91 0 013.28 18a.91.91 0 01-.622-.243.795.795 0 010-1.171L5.415 14C3.623 12.953 1.87 11.452.195 9.523a.793.793 0 01-.025-1.01c.073-.096 1.86-2.36 4.804-4.16 3.953-2.42 8.096-2.824 11.98-1.171l3.134-2.94a.924.924 0 011.25 0zM9.818 9.873l3.115-2.921c-.862-.345-1.905-.189-2.61.473A2.142 2.142 0 009.627 9c0 .307.064.601.191.872zm4.418-4.138l1.376-1.29c-3.164-1.135-6.411-.703-9.673 1.29-1.885 1.152-3.262 2.535-3.913 3.25 1.523 1.668 3.09 2.944 4.682 3.808l1.817-1.704a3.68 3.68 0 01-.656-2.094c0-1.033.426-2.007 1.21-2.741 1.395-1.309 3.555-1.484 5.157-.52zm9.57 2.741c.25.294.26.707.024 1.01-.063.079-1.538 1.947-4.006 3.642-1.464 1.001-2.978 1.736-4.501 2.181-1.16.34-2.326.51-3.482.51-.77 0-1.533-.074-2.292-.225-.475-.092-.784-.533-.681-.978.098-.446.568-.735 1.043-.639 2.914.579 5.887-.147 8.83-2.153a18.88 18.88 0 003.233-2.815c-.98-1.075-1.988-1.993-2.997-2.732a.797.797 0 01-.152-1.162.933.933 0 011.244-.142c1.273.932 2.527 2.107 3.737 3.503z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 3)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#a"
  })), /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    fillRule: "nonzero",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#007AFF",
    mask: "url(#b)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0-3h24v24H0z"
  }))));
}
var _default = SvgEyeClose;
exports["default"] = _default;