"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardNumber;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _capitalize2 = _interopRequireDefault(require("lodash/capitalize"));
require("./CardNumber.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CardNumber(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'primary' : _ref$type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? '' : _ref$size;
  var isSmall = (0, _react.useMemo)(function () {
    return size === 'small';
  }, [size]);
  var headerClass = (0, _react.useMemo)(function () {
    var headerClasses = size ? "CardNumber__Header".concat((0, _capitalize2["default"])(size)) : 'CardNumber__Header';
    return (0, _classnames["default"])('card-header justify-content-center', headerClasses, "CardNumber__Header--".concat(type));
  }, [type, size]);
  var bodyClass = (0, _react.useMemo)(function () {
    var bodyClasses = size ? "Card-Body".concat((0, _capitalize2["default"])(size)) : 'Card-Body';
    return (0, _classnames["default"])('card-body bg-white  d-flex justify-content-center p-0', bodyClasses);
  }, []);
  var titleClassName = (0, _react.useMemo)(function () {
    return 'text-center text-white m-0';
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card CardNumber ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: headerClass
  }, isSmall ? /*#__PURE__*/_react["default"].createElement("h6", {
    className: titleClassName
  }, title) : /*#__PURE__*/_react["default"].createElement("h5", {
    className: titleClassName
  }, title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: bodyClass
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: (0, _classnames["default"])('m-0 mt-1', isSmall && 'h4')
  }, value)));
}
CardNumber.propTypes = {
  title: _propTypes["default"].string,
  value: _propTypes["default"].string,
  className: _propTypes["default"].string,
  type: _propTypes["default"].string,
  size: _propTypes["default"].string
};