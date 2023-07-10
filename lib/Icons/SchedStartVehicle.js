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
function SvgSchedStartVehicle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 35 25",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "05-Cotizaci\\xF3n",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "01.02-Cotizar_Elegir-plan",
    transform: "translate(-206 -455)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-26",
    transform: "translate(135 446)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(71 9)",
    id: "Ico/blancomini"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-2",
    transform: "matrix(-1 0 0 1 32.001 0)",
    stroke: "#FFF",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group",
    transform: "rotate(-180 5 4.674)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.544 3.971l-7.837.068",
    id: "Path-2-Copy"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Path-3-Copy",
    d: "M4.178 8.078L0 4.038 4.178 0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M5.135 17.712h-1.92a.857.857 0 00-.842.87c0 .481.377.87.843.87h1.92c.465 0 .842-.389.842-.87 0-.48-.377-.87-.843-.87zm0-3.126H.843a.857.857 0 00-.843.87c0 .481.377.87.843.87h4.292c.466 0 .843-.389.843-.87 0-.48-.377-.87-.843-.87zm18.369 6.01c0 .481-.377.871-.843.871h-4.867c-.388 1.847-1.983 3.235-3.887 3.235-1.952 0-3.58-1.46-3.914-3.377-.675-.221-1.233-.687-1.532-1.308a2.245 2.245 0 01-.226-.982v-5.803c0-.48.378-.87.843-.87.466 0 .843.39.843.87v5.803c0 .07.017.139.05.207.028.06.07.12.126.176.492-1.69 2.014-2.927 3.81-2.927 1.904 0 3.5 1.388 3.887 3.235h4.867c.466 0 .843.39.843.87zm-7.306 0c0-1.303-1.028-2.364-2.29-2.364-1.255 0-2.278 1.047-2.291 2.34v.044c.01 1.295 1.033 2.346 2.29 2.346 1.263 0 2.29-1.061 2.29-2.365zm-3.723-7.186c0 .48.378.87.843.87h.949c.465 0 .843-.39.843-.87 0-.481-.378-.87-.843-.87h-.949a.857.857 0 00-.843.87zm16.854 6.317h-.002c-.465 0-.842.39-.842.87s.379.87.844.87c.466 0 .843-.39.843-.87s-.377-.87-.843-.87zm5.667-2.502l-.002.588c-.002.348-.004.743-.004 1.222 0 1.04-.725 1.942-1.747 2.285-.332 1.92-1.961 3.382-3.915 3.382-2.193 0-3.976-1.841-3.976-4.105 0-2.264 1.783-4.106 3.976-4.106 1.794 0 3.314 1.232 3.808 2.92a.551.551 0 00.168-.376c0-.482.002-.88.004-1.23l.002-.588c.003-.709.008-1.68-.002-2.132a11.35 11.35 0 00-.037-.805H20.302c-.302 0-1.01 0-3.179-2.212-.66-.674-1.973-2.108-2.215-2.713a.88.88 0 01.458-1.136.833.833 0 011.092.452c.115.212.8 1.08 1.794 2.101 1.251 1.285 1.916 1.701 2.097 1.767h11.974a40.315 40.315 0 00-1.066-.995c-.232-.212-.486-.445-.766-.704-.204-.189-.406-.389-.602-.582a18.906 18.906 0 00-.893-.844l-.776-.673c-3.128-2.72-3.969-3.45-6.607-3.45h-5.82a.857.857 0 01-.843-.87c0-.481.377-.87.843-.87h5.82c3.253 0 4.553 1.13 7.693 3.859l.772.67c.352.304.67.617.976.92.195.192.38.374.563.544l.758.697c2.021 1.848 2.564 2.345 2.618 4.804.01.477.007 1.421.003 2.18zm-3.377 3.363c-.005-1.3-1.03-2.356-2.291-2.356-1.263 0-2.29 1.06-2.29 2.365 0 1.304 1.027 2.365 2.29 2.365 1.263 0 2.29-1.06 2.29-2.363v-.011zm-17.71-.861h-.003c-.465 0-.842.39-.842.87s.379.87.844.87c.466 0 .843-.39.843-.87s-.377-.87-.843-.87z",
    id: "Mask",
    fill: "#FFF",
    fillRule: "nonzero",
    transform: "matrix(-1 0 0 1 35 0)"
  }))))));
}
var _default = SvgSchedStartVehicle;
exports["default"] = _default;