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
function SvgPayments(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9.188 2.813a.469.469 0 100 .937.469.469 0 000-.938zM12 6.563a.47.47 0 010-.938c.166 0 .341.085.507.245a.469.469 0 00.652-.674 1.81 1.81 0 00-.69-.431v-.546a.469.469 0 00-.938 0v.55a1.408 1.408 0 00-.937 1.325c0 .775.63 1.406 1.406 1.406a.47.47 0 010 .938c-.2 0-.416-.126-.609-.355a.469.469 0 00-.717.603c.25.298.545.506.857.61v.548a.469.469 0 00.938 0v-.55c.545-.193.937-.714.937-1.325 0-.776-.63-1.407-1.406-1.407zM22.125 6.844a1.877 1.877 0 00-1.875 1.875v3.34a1.875 1.875 0 00-1.794.49l-3.144 3.144a2.327 2.327 0 00-.687 1.658v2.758h-.469a.469.469 0 00-.469.47v2.952c0 .26.21.469.47.469h6.562c.259 0 .468-.21.468-.469v-2.953a.469.469 0 00-.468-.469h-.469v-.22c0-.124.05-.245.137-.332l2.926-2.926A2.329 2.329 0 0024 14.973V8.72a1.877 1.877 0 00-1.875-1.875zM20.25 23.062h-5.625v-2.015h5.625v2.015zm2.813-8.089c0 .376-.147.73-.413.995l-2.925 2.926a1.416 1.416 0 00-.413.994v.221h-3.75v-2.758c0-.376.147-.73.413-.995l3.144-3.144a.936.936 0 011.286-.036l.008.007.031.03a.93.93 0 01.275.662.93.93 0 01-.275.663l-2.33 2.329a.469.469 0 00.664.663l2.329-2.33c.354-.353.55-.824.55-1.325a1.86 1.86 0 00-.47-1.24V8.72a.939.939 0 011.875 0v6.254zM9.844 20.11h-.469v-2.76c0-.626-.244-1.215-.687-1.657L5.544 12.55a1.874 1.874 0 00-1.794-.49V8.72a1.877 1.877 0 00-1.875-1.875A1.877 1.877 0 000 8.719v6.254c0 .626.244 1.215.687 1.658l2.926 2.926a.472.472 0 01.137.331v.221h-.469a.469.469 0 00-.469.47v2.952c0 .26.21.469.47.469h6.562c.259 0 .469-.21.469-.469v-2.953a.469.469 0 00-.47-.469zM1.35 15.967a1.398 1.398 0 01-.413-.995V8.72a.939.939 0 011.875 0v3.917a1.86 1.86 0 00-.468 1.239c0 .501.195.972.55 1.326l2.343 2.343a.469.469 0 10.663-.663l-2.344-2.343a.93.93 0 01-.275-.663.93.93 0 01.306-.692l.008-.007a.936.936 0 011.286.036l3.145 3.144c.265.266.411.619.411.995v2.758h-3.75v-.22c0-.37-.15-.733-.411-.995L1.35 15.968zm8.025 7.095H3.75v-2.016h5.625v2.015z",
    fill: "#1C284E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 0a7.04 7.04 0 00-7.031 7.031A7.04 7.04 0 0012 14.063a7.04 7.04 0 007.031-7.032A7.04 7.04 0 0012 0zm0 13.125a6.1 6.1 0 01-6.094-6.094A6.1 6.1 0 0112 .938a6.1 6.1 0 016.094 6.093A6.1 6.1 0 0112 13.125z",
    fill: "#1C284E"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.014 2.796c-1.22-.985-2.816-1.356-4.38-1.02a.469.469 0 00.198.917c1.285-.277 2.595.026 3.593.832a4.204 4.204 0 011.57 3.285 4.224 4.224 0 01-4.218 4.219 4.224 4.224 0 01-3.72-6.21.469.469 0 00-.826-.444 5.162 5.162 0 004.546 7.591 5.162 5.162 0 005.156-5.156c0-1.566-.7-3.03-1.92-4.014z",
    fill: "#1C284E"
  }));
}
var _default = SvgPayments;
exports["default"] = _default;