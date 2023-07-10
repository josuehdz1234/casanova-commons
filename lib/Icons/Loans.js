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
function SvgLoans(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "#fff",
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M7.233 12h.805a1.436 1.436 0 001.43-1.437v-.438h7.22v.438c0 .791.665 1.437 1.456 1.437h.804a1.445 1.445 0 001.443-1.437V6.167a1.928 1.928 0 00-.605-1.394l-.255-.24-.006-.012-1.08-2.514a1.456 1.456 0 00-1.338-.882h-7.84a1.455 1.455 0 00-1.338.882L6.866 4.484l-.384.331a1.907 1.907 0 00-.67 1.462v4.286A1.426 1.426 0 007.233 12zm1.298-1.437a.497.497 0 01-.494.5h-.804a.486.486 0 01-.483-.5v-.537c.153.063.317.097.483.099H8.53v.438zm10.417.5h-.805c-.273 0-.518-.226-.518-.5v-.438h1.323c.173-.002.344-.036.505-.1v.538a.507.507 0 01-.505.5zM8.791 2.367a.51.51 0 01.477-.305h7.838a.51.51 0 01.477.305l.799 1.85h-.302c-.216-.984-1.123-1.786-2.206-1.786-1.082 0-1.989.802-2.205 1.787H7.992l.799-1.85zm8.314 1.85h-2.462c.19-.468.67-.848 1.231-.848.562 0 1.042.38 1.231.849zM6.75 6.279a.99.99 0 01.339-.757l.412-.365h11.34l.301.29a1.009 1.009 0 01.311.72V8.68a.514.514 0 01-.505.508H7.233a.494.494 0 01-.483-.508V6.277z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.453 6.563a.469.469 0 00-.469-.47H7.688a.469.469 0 00-.47.47v1.593a.469.469 0 00.47.469h2.296a.469.469 0 00.47-.469V6.562zm-2.297.468h1.36v.61h-1.36v-.61zM18.984 6.563a.469.469 0 00-.468-.47h-2.297a.469.469 0 00-.469.47v1.593a.469.469 0 00.469.469h2.297a.469.469 0 00.468-.469V6.562zm-2.297.468h1.36v.61h-1.36v-.61zM11.618 8.531h2.945a.469.469 0 000-.937h-2.945a.469.469 0 000 .937zM11.618 7.313h2.945a.469.469 0 000-.938h-2.945a.469.469 0 000 .938zM21.13 12.68c-.332-.32-.78-.5-1.245-.496a1.77 1.77 0 00-1.237.515c-1.168 1.17-3.17 3.161-3.677 3.666l-3.646.524-.572-.75 2.659-.804a1.71 1.71 0 001.18-2.017 1.69 1.69 0 00-.723-1.035 1.734 1.734 0 00-1.248-.257l-5.751.897c-.407.06-.79.228-1.106.489L0 18.93 4.327 24 7.2 20.867l7.831-.262a2.101 2.101 0 001.395-.6l4.777-4.9.006-.006a1.694 1.694 0 00-.038-2.373l-.04-.045zm-.663 1.736l-4.759 4.882a1.08 1.08 0 01-.712.306l-8.26.276-2.381 2.597-2.969-3.478 5.043-4.83c.169-.135.371-.223.586-.255l5.768-.9.009-.001a.717.717 0 01.509.105c.15.097.257.247.299.42a.7.7 0 01-.075.512.718.718 0 01-.408.326L9.07 15.601l1.804 2.364 4.579-.658.12-.119c.024-.024 2.458-2.444 3.8-3.788a.756.756 0 011.03-.018l.037.04a.698.698 0 01.026.993z"
  }));
}
var _default = SvgLoans;
exports["default"] = _default;