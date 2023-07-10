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
function SvgIcoBigGrayUser(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 58 72",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "07-Panel-de-administraci\\xF3n",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Nuevo-usuario-",
    transform: "translate(-691 -945)",
    stroke: "#9EA3B1"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-2",
    transform: "translate(135 878)"
  }, /*#__PURE__*/React.createElement("g", {
    strokeWidth: 4,
    fillRule: "nonzero",
    transform: "translate(558 69)",
    id: "Ic_user_gris_grande"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M27.492 31.536c8.676 0 15.708-7.059 15.708-15.768S36.168 0 27.492 0s-15.71 7.06-15.71 15.768c.01 8.704 7.037 15.759 15.71 15.768h0z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36.725 34.746a12.168 12.168 0 01-9.723 4.828c-3.833.001-7.44-1.787-9.727-4.822a3.153 3.153 0 00-2.559-1.244C6.662 33.508 0 39.9 0 47.848v17.157C0 66.737 1.534 68 3.288 68H50.71c1.754 0 3.29-1.263 3.29-2.995V47.848c0-7.948-6.665-14.34-14.716-14.34a3.154 3.154 0 00-2.56 1.238z",
    id: "Path"
  }))))));
}
var _default = SvgIcoBigGrayUser;
exports["default"] = _default;