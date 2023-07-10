"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CellText = exports.CellStatus = exports.CellDashedContainer = exports.CellDashed = exports.Cell = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _colors = require("../../utils/colors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Cell = function Cell(props) {
  var children = props.children,
    className = props.className,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    _props$Container = props.Container,
    Container = _props$Container === void 0 ? function (containerProps) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, containerProps.children);
    } : _props$Container;
  return /*#__PURE__*/_react["default"].createElement("td", {
    className: className,
    style: style
  }, /*#__PURE__*/_react["default"].createElement(Container, props, children(props)));
};
exports.Cell = Cell;
var CellText = function CellText(props) {
  var formatedProps = (0, _react.useMemo)(function () {
    var _props$column = props.column,
      column = _props$column === void 0 ? {} : _props$column;
    var align = column.align;
    var className = (0, _classnames["default"])("text-".concat(align || 'left'));
    return _objectSpread(_objectSpread({}, props), {}, {
      className: className
    });
  }, [props]);
  return /*#__PURE__*/_react["default"].createElement(Cell, formatedProps);
};
exports.CellText = CellText;
var CellStatus = function CellStatus(props) {
  var formatedProps = (0, _react.useMemo)(function () {
    var _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      column = props.column,
      _props$statusColor = props.statusColor,
      statusColor = _props$statusColor === void 0 ? null : _props$statusColor;
    var align = column.align;
    var stringValue = typeof value === 'string';
    var textColor = (0, _classnames["default"])(
    // eslint-disable-next-line no-nested-ternary
    stringValue && (0, _colors.getTextColor)(value) ? (0, _colors.getTextColor)(value) : value ? 'success' : 'danger');
    var className = (0, _classnames["default"])("text-".concat(align || 'left'), !statusColor && "text-".concat("".concat(textColor || 'default')));

    // eslint-disable-next-line no-nested-ternary
    var valueToShow = stringValue ? value : value ? 'Activo' : 'Inactivo';
    var style = {
      color: statusColor || ''
    };
    return _objectSpread(_objectSpread({}, props), {}, {
      className: className,
      value: valueToShow,
      style: style
    });
  }, [props]);
  return /*#__PURE__*/_react["default"].createElement(Cell, formatedProps);
};
exports.CellStatus = CellStatus;
var CellDashedContainer = function CellDashedContainer(props) {
  var fixedColor = props.fixedColor,
    textClass = props.textClass,
    value = props.value;
  var cls = (0, _classnames["default"])('dash', value.toLowerCase() !== 'normal' && 'dash--error');
  var textClasses = (0, _classnames["default"])('d-flex flex-row align-items-center', textClass);
  var style = fixedColor ? {
    backgroundColor: fixedColor
  } : {};
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: textClasses
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: cls,
    style: style
  }), value);
};
exports.CellDashedContainer = CellDashedContainer;
var CellDashed = function CellDashed(props) {
  var formatedProps = (0, _react.useMemo)(function () {
    var column = props.column;
    var _column$align = column.align,
      align = _column$align === void 0 ? 'left' : _column$align;
    var className = (0, _classnames["default"])("text-".concat(align));
    return _objectSpread(_objectSpread({}, props), {}, {
      className: className
    });
  }, [props]);
  return /*#__PURE__*/_react["default"].createElement(Cell, _extends({}, formatedProps, {
    Container: CellDashedContainer
  }));
};
exports.CellDashed = CellDashed;