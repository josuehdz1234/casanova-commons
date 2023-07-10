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
function SvgQuote(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 87 103",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "05-Cotizaci\\xF3n",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-2-Copy",
    transform: "translate(-242 -69)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "ico/cotizar",
    transform: "translate(242 71)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group",
    transform: "translate(0 31)",
    fill: "#8E8E93",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M81.722 23.916L75.03 5.108C73.922 2.03 71.1-.005 67.95 0h-5.708C58.725 0 49.152 7.756 43.5 7.756 36.786 7.756 26.1 0 26.1 0h-5.868c-3.15-.004-5.972 2.032-7.08 5.108l-6.61 18.595-2.813 2.673C1.379 28.448.016 31.49 0 34.7V68.23c.042.977.804 1.751 1.74 1.77h16.744c.914-.029 1.637-.816 1.624-1.77V58.012h46.784V68.23c-.013.954.71 1.741 1.624 1.77H85.26c.936-.019 1.698-.793 1.74-1.77V33.994c-.023-3.002-1.216-5.864-3.304-7.93l-1.974-2.148zM16.23 6.275c.63-1.73 2.227-2.868 4.002-2.85h8.343c7.235 0 4.05 4.331 14.925 4.331 8.7 0 9.284-4.33 14.272-4.33H67.95c1.775-.019 3.371 1.119 4.002 2.849l5.927 16.63H10.304l5.926-16.63zm.595 60.3H3.283v-8.563h13.542v8.563zm53.35 0v-8.563h13.542v8.563H70.175zm13.542-11.988H3.283V34.7c.017-2.22.967-4.32 2.6-5.746l.08-.074L8.59 26.33h70.841l1.851 2.087c.023.025.096.062.121.085 1.456 1.426 2.292 3.41 2.313 5.492v20.593z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.705 35h-1.41C11.82 35 9 37.91 9 41.5s2.819 6.5 6.295 6.5h1.41C20.18 48 23 45.09 23 41.5S20.181 35 16.705 35zm0 9.698h-1.41c-1.71 0-3.097-1.432-3.097-3.198s1.387-3.198 3.097-3.198h1.41c1.71 0 3.097 1.432 3.097 3.198s-1.387 3.198-3.097 3.198zM72.705 35h-1.41C67.82 35 65 37.91 65 41.5s2.819 6.5 6.295 6.5h1.41C76.18 48 79 45.09 79 41.5S76.181 35 72.705 35zm0 9.698h-1.41c-1.71 0-3.097-1.432-3.097-3.198s1.387-3.198 3.097-3.198h1.41c1.71 0 3.097 1.432 3.097 3.198s-1.387 3.198-3.097 3.198zM58 36.677c0-.926-.742-1.677-1.657-1.677H30.657c-.915 0-1.657.751-1.657 1.677v9.646c0 .926.742 1.677 1.657 1.677h25.686c.915 0 1.657-.751 1.657-1.677v-9.646zm-3.314 7.968H32.314v-6.29h22.372v6.29z",
    id: "Shape"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M18 24.828C18 11.118 29.027 0 42.622 0c13.596 0 24.623 11.119 24.623 24.828S56.218 49.655 42.622 49.655C29.027 49.655 18 38.537 18 24.828z",
    id: "Stroke-8494",
    stroke: "#8E8E93",
    strokeWidth: 4,
    fill: "#FAFAFA",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44.674 41.38c0 1.141-.919 2.068-2.052 2.068a2.061 2.061 0 01-2.051-2.069c0-1.142.919-2.069 2.051-2.069 1.133 0 2.052.927 2.052 2.07",
    id: "Fill-8500",
    fill: "#F2A000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.622 33.103V8.276",
    id: "Stroke-8502",
    stroke: "#F2A000",
    strokeWidth: 4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}
var _default = SvgQuote;
exports["default"] = _default;