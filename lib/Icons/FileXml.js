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
function SvgFileXml(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 27",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("g", {
    id: "01-Vehiculos",
    stroke: "none",
    strokeWidth: 1,
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "04.03-Archivos-cargados",
    transform: "translate(-168 -760)",
    fill: "fill",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "card",
    transform: "translate(96 148)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "File-XML",
    transform: "translate(48 411)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "textarea",
    transform: "translate(2 39)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M45.863 169.307l-6.489-7.148a.477.477 0 00-.353-.159h-9.67c-1.083 0-1.963.933-1.963 2.08v7.266h-3.92c-.81 0-1.468.698-1.468 1.557v7.79c0 .859.659 1.557 1.469 1.557h3.919v4.674c0 1.145.88 2.076 1.963 2.076h14.686c1.082 0 1.963-.93 1.963-2.075v-17.258a.536.536 0 00-.137-.36zm-6.72-5.905l5.327 5.867h-5.327v-5.867zm-15.674 17.81c-.27 0-.49-.233-.49-.518v-7.791c0-.286.22-.518.49-.518h13.226c.27 0 .489.232.489.518v7.79c0 .286-.22.519-.49.519H23.47zm21.551 5.713c0 .571-.44 1.037-.983 1.037H29.351c-.543 0-.984-.466-.984-1.038v-4.674h8.328c.81 0 1.468-.698 1.468-1.556v-7.791c0-.859-.659-1.557-1.468-1.557h-8.328v-7.266c0-.574.441-1.042.984-1.042h8.812v6.75c0 .287.22.52.49.52h6.367v16.617zm-9.093-10.751a.498.498 0 01.265.422.498.498 0 01-.265.423l-4.42 2.596a.726.726 0 01-.367.097.682.682 0 01-.515-.218c-.202-.233-.137-.557.147-.724l3.702-2.174-3.702-2.173c-.284-.167-.35-.491-.147-.725.203-.233.597-.287.881-.12l4.421 2.596zm-6.096 2.596c.283.167.35.49.146.724a.682.682 0 01-.514.218.726.726 0 01-.367-.097l-4.42-2.596a.498.498 0 01-.265-.423c0-.168.098-.325.264-.422l4.421-2.597c.284-.166.679-.112.881.121.203.234.137.558-.146.725l-3.702 2.173 3.702 2.174z",
    id: "ico_xml"
  })))))));
}
var _default = SvgFileXml;
exports["default"] = _default;