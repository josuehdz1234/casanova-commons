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
function SvgSettings(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    height: "100%"
  }, props), /*#__PURE__*/React.createElement("path", {
    className: "main-icon",
    d: "M14.032 0c.337 0 .63.235.7.565l.402 1.844c.49.16.97.36 1.431.594l1.589-1.021a.715.715 0 01.894.096l2.874 2.874c.239.238.279.61.096.894l-1.02 1.589c.234.461.432.94.593 1.431l1.844.401c.33.072.565.364.565.701v4.064a.716.716 0 01-.565.7l-1.844.402c-.16.49-.36.97-.594 1.431l1.021 1.589a.715.715 0 01-.096.894l-2.874 2.874a.714.714 0 01-.894.096l-1.589-1.02c-.461.234-.94.432-1.431.593l-.401 1.844a.718.718 0 01-.701.565H9.968a.715.715 0 01-.7-.565l-.402-1.844c-.49-.16-.97-.36-1.431-.594l-1.589 1.021a.715.715 0 01-.894-.096l-2.874-2.874a.714.714 0 01-.096-.894l1.02-1.589c-.234-.461-.432-.94-.593-1.431l-1.844-.401A.719.719 0 010 14.032V9.968c0-.337.235-.629.565-.7l1.844-.402c.16-.49.36-.97.594-1.431L1.982 5.846a.715.715 0 01.096-.894l2.874-2.874a.714.714 0 01.894-.096l1.589 1.02c.461-.234.94-.432 1.431-.593L9.267.565A.719.719 0 019.968 0zm-.578 1.434h-2.908l-.368 1.692a.715.715 0 01-.508.538 8.596 8.596 0 00-1.916.795.718.718 0 01-.74-.022l-1.457-.936L3.5 5.557l.936 1.457a.718.718 0 01.022.74 8.596 8.596 0 00-.795 1.916.716.716 0 01-.538.508l-1.692.368v2.908l1.692.368c.26.056.467.252.538.508.186.666.453 1.311.795 1.916a.718.718 0 01-.022.74L3.5 18.443l2.056 2.056 1.457-.936a.718.718 0 01.74-.022c.605.342 1.25.609 1.916.795a.716.716 0 01.508.538l.368 1.692h2.908l.368-1.692a.715.715 0 01.508-.538 8.596 8.596 0 001.916-.795.718.718 0 01.74.022l1.457.936 2.056-2.056-.936-1.457a.718.718 0 01-.022-.74c.342-.605.609-1.25.795-1.916a.716.716 0 01.538-.508l1.692-.368v-2.908l-1.692-.368a.715.715 0 01-.538-.508 8.596 8.596 0 00-.795-1.916.718.718 0 01.022-.74l.936-1.457-2.056-2.056-1.457.936a.718.718 0 01-.74.022 8.596 8.596 0 00-1.916-.795.716.716 0 01-.508-.538l-.368-1.692zM12 6.263A5.744 5.744 0 0117.737 12 5.744 5.744 0 0112 17.737 5.744 5.744 0 016.263 12 5.744 5.744 0 0112 6.263zm0 1.434A4.308 4.308 0 007.697 12 4.308 4.308 0 0012 16.303 4.308 4.308 0 0016.303 12 4.308 4.308 0 0012 7.697z"
  }));
}
var _default = SvgSettings;
exports["default"] = _default;