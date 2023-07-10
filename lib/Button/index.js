"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./Button.scss");
var _excluded = ["children", "onClick", "primary", "secondary", "muted", "block", "outline", "className", "rounded", "color", "variant"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Button = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    primary = _ref.primary,
    secondary = _ref.secondary,
    muted = _ref.muted,
    block = _ref.block,
    outline = _ref.outline,
    className = _ref.className,
    rounded = _ref.rounded,
    color = _ref.color,
    variant = _ref.variant,
    rest = _objectWithoutProperties(_ref, _excluded);
  var formattedClassName = (0, _react.useMemo)(function () {
    var base =
    // eslint-disable-next-line no-nested-ternary
    color || muted ? 'light' : secondary ? 'secondary' : 'primary';
    var buttonClass = "btn-".concat(outline ? 'outline-' : '').concat(base);
    return (0, _classnames["default"])('btn ButtonV2', buttonClass, block && 'btn-block', muted && 'ButtonV2__Muted', rounded && 'ButtonV2__Rounded', className, "ButtonV2__".concat(variant));
  }, [primary, secondary, block, muted, className, rounded, muted, color, variant]);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    _react["default"].createElement("button", _extends({
      ref: ref,
      className: formattedClassName,
      onClick: onClick
    }, rest), children)
  );
});
Button.propTypes = {
  primary: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  muted: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  outline: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  rounded: _propTypes["default"].bool,
  color: _propTypes["default"].string,
  variant: _propTypes["default"].string
};
Button.defaultProps = {
  primary: true,
  secondary: false,
  muted: false,
  block: false,
  outline: false,
  className: '',
  rounded: false,
  color: null,
  variant: ''
};
var _default = Button;
exports["default"] = _default;