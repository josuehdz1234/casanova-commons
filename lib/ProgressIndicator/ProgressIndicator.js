"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProgressIndicator;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var labelClass = (0, _classnames["default"])(['component-progress-indicator-label', 'd-flex', 'justify-content-center', 'align-items-center', 'font-weight-bold']);
function ProgressIndicator(_ref) {
  var size = _ref.size,
    stroke = _ref.stroke,
    strokeWidth = _ref.strokeWidth,
    progress = _ref.progress,
    label = _ref.label;
  var position = Math.round(+size / 2);
  var radio = position - 15;
  var _stroke = _slicedToArray(stroke, 2),
    baseStroke = _stroke[0],
    progressStroke = _stroke[1];
  var circunference = 2 * Math.PI * radio;
  var progressSize = circunference * (progress / 100);
  var progressDiff = circunference - progressSize;
  var offset = circunference / 4;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size)
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: position,
    cy: position,
    r: radio,
    fill: "none",
    stroke: baseStroke,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: position,
    cy: position,
    r: position - 15,
    fill: "none",
    stroke: progressStroke,
    strokeWidth: strokeWidth,
    strokeDasharray: "".concat(progressSize, " ").concat(progressDiff),
    strokeDashoffset: offset,
    strokeLinecap: "square"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: labelClass,
    style: {
      width: size,
      height: size
    }
  }, label));
}
ProgressIndicator.propTypes = {
  size: _propTypes["default"].number.isRequired,
  stroke: _propTypes["default"].array.isRequired,
  strokeWidth: _propTypes["default"].number.isRequired,
  progress: _propTypes["default"].number.isRequired,
  label: _propTypes["default"].string.isRequired
};