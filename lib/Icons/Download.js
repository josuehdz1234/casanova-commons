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
function SvgDownload(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "prefix__a",
    d: "M23.312 11.7c.382 0 .688.336.688.742v6.75C24 21.84 22.003 24 19.543 24H4.457C2.002 24 0 21.846 0 19.191v-6.859c0-.412.306-.741.688-.741.382 0 .687.33.687.741v6.86c0 1.83 1.38 3.324 3.082 3.324h15.086c1.696 0 3.082-1.49 3.082-3.325v-6.749c0-.412.305-.742.687-.742zm-7.426.643a.655.655 0 01.968 0c.27.292.27.759 0 1.05l-4.37 4.716a.645.645 0 01-.484.22.673.673 0 01-.484-.22l-4.37-4.716a.782.782 0 010-1.05.641.641 0 01.484-.22c.173 0 .351.078.484.22l3.198 3.452V.742C11.312.33 11.618 0 12 0c.382 0 .688.33.688.742v15.053l3.198-3.452z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "prefix__b",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#prefix__a"
  })), /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    fillRule: "nonzero",
    xlinkHref: "#prefix__a"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#007AFF",
    mask: "url(#prefix__b)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));
}
var _default = SvgDownload;
exports["default"] = _default;