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
function SvgIconoClientes(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "kt9msmhkea",
    d: "M20.732 6.71a2.734 2.734 0 00-1.57-4.976 2.734 2.734 0 00-1.57 4.976 4.723 4.723 0 00-1.617.948 6.135 6.135 0 00-2.22-1.21 3.476 3.476 0 001.674-2.969A3.465 3.465 0 0011.962.012a3.469 3.469 0 00-1.793 6.437 6.191 6.191 0 00-2.196 1.194 4.813 4.813 0 00-1.598-.93 2.735 2.735 0 00-1.57-4.975 2.735 2.735 0 00-1.57 4.976A4.804 4.804 0 000 11.253v.313c0 .01.01.019.019.019h5.8c-.032.26-.051.531-.051.802v.322a2.521 2.521 0 002.523 2.523h7.352a2.522 2.522 0 002.523-2.523v-.322c0-.27-.019-.541-.052-.802h5.839c.01 0 .019-.01.019-.019v-.313a4.824 4.824 0 00-3.24-4.544zm-3.548-2.244c0-1.091.887-1.978 1.978-1.978s1.978.887 1.978 1.978a1.984 1.984 0 01-1.94 1.977h-.076a1.974 1.974 0 01-1.94-1.977zm-7.94-.987A2.71 2.71 0 0111.953.771a2.71 2.71 0 012.708 2.708 2.713 2.713 0 01-2.552 2.704h-.313a2.713 2.713 0 01-2.552-2.704zm-6.431.987a1.98 1.98 0 011.978-1.978 1.98 1.98 0 011.977 1.978 1.984 1.984 0 01-1.94 1.977h-.075a1.977 1.977 0 01-1.94-1.977zm3.14 6.355H.768a4.054 4.054 0 013.994-3.619h.057a4.01 4.01 0 012.585.963 6.226 6.226 0 00-1.451 2.656zm11.445 1.888c0 .972-.792 1.765-1.765 1.765H8.281a1.768 1.768 0 01-1.764-1.765v-.322a5.448 5.448 0 015.279-5.44c.052.004.11.004.161.004.052 0 .11 0 .162-.005a5.45 5.45 0 015.279 5.44v.323zm.564-1.888c-.26-1-.759-1.897-1.437-2.637a4.034 4.034 0 012.609-.982h.057a4.053 4.053 0 013.993 3.62h-5.222z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "vpb2034teb",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#kt9msmhkea"
  })), /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    fillRule: "nonzero",
    xlinkHref: "#kt9msmhkea"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#001A70",
    mask: "url(#vpb2034teb)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0-4h24v24H0z"
  }))));
}
var _default = SvgIconoClientes;
exports["default"] = _default;