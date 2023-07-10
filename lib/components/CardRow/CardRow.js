"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CardRow;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _formik = require("formik");
var Icons = _interopRequireWildcard(require("../../Icons"));
var _RadioGroupInput = _interopRequireDefault(require("../../Input/RadioGroupInput"));
var _ = require("./..");
require("./CardRow.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CardRow(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$withCheck = _ref.withCheck,
    withCheck = _ref$withCheck === void 0 ? false : _ref$withCheck,
    _ref$withRadio = _ref.withRadio,
    withRadio = _ref$withRadio === void 0 ? false : _ref$withRadio,
    _ref$withAdd = _ref.withAdd,
    withAdd = _ref$withAdd === void 0 ? false : _ref$withAdd,
    onChangeCheck = _ref.onChangeCheck,
    onChange = _ref.onChange,
    stockCheck = _ref.check,
    _ref$withExternalChec = _ref.withExternalCheck,
    withExternalCheck = _ref$withExternalChec === void 0 ? false : _ref$withExternalChec,
    onAdd = _ref.onAdd,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? '' : _ref$name,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$rowClassName = _ref.rowClassName,
    rowClassName = _ref$rowClassName === void 0 ? '' : _ref$rowClassName,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'right' : _ref$direction,
    _ref$RightRender = _ref.RightRender,
    RightRender = _ref$RightRender === void 0 ? null : _ref$RightRender,
    _ref$textRight = _ref.textRight,
    textRight = _ref$textRight === void 0 ? 'Agregar' : _ref$textRight;
  var _useState = (0, _react.useState)(stockCheck),
    _useState2 = _slicedToArray(_useState, 2),
    check = _useState2[0],
    setCheck = _useState2[1];
  var _useFormikContext = (0, _formik.useFormikContext)(),
    setFieldValue = _useFormikContext.setFieldValue;
  var handleChangeCheck = (0, _react.useCallback)(function () {
    setCheck(!check);
    if (onChangeCheck) {
      onChangeCheck(!check);
    }
    if (onChange) {
      onChange(!check);
    }
  }, [onChangeCheck, check, onChange]);
  (0, _react.useEffect)(function () {
    if (withRadio) {
      setFieldValue(name, stockCheck);
    }
  }, [withRadio, setFieldValue, name, stockCheck]);
  var finalCheck = withExternalCheck ? stockCheck : check;
  var helpers = {
    check: finalCheck
  };
  var checkRender = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, withCheck ? /*#__PURE__*/_react["default"].createElement("div", {
    role: "button",
    tabIndex: "0",
    onKeyPress: handleChangeCheck,
    onClick: handleChangeCheck
  }, finalCheck ? /*#__PURE__*/_react["default"].createElement(Icons.CheckAvailable, {
    width: "1.5rem",
    height: "1.5rem"
  }) : /*#__PURE__*/_react["default"].createElement(Icons.CheckUnavailable, {
    width: "1.5rem",
    height: "1.5rem"
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", withAdd && /*#__PURE__*/_react["default"].createElement(_.PlusButton, {
    textRight: textRight,
    onClick: onAdd
  })));
  var radioRender = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, withRadio && /*#__PURE__*/_react["default"].createElement("div", {
    className: "CardRow__Item"
  }, /*#__PURE__*/_react["default"].createElement(_RadioGroupInput["default"], {
    labelClass: "d-flex align-items-center",
    groupClass: "col-12 d-flex justify-content-around",
    parentClass: "vehicle-radio-input",
    label: "",
    name: name,
    value: finalCheck,
    options: [{
      label: '',
      value: true
    }],
    standardError: true,
    onChange: handleChangeCheck
  })));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "CardRow ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "CardRow__Row ".concat(rowClassName)
  }, direction === 'left' && (withRadio ? radioRender : checkRender), items.map(function (_ref2) {
    var value = _ref2.value,
      bold = _ref2.bold,
      title = _ref2.title,
      id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "CardRow__Item",
      key: id
    }, title ? /*#__PURE__*/_react["default"].createElement(_.TextField, {
      noMb: true,
      title: title,
      value: value
    }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, bold ? /*#__PURE__*/_react["default"].createElement("h6", {
      className: "m-0"
    }, value) : /*#__PURE__*/_react["default"].createElement("p", {
      className: "m-0"
    }, value)));
  }), direction === 'right' && (withRadio ? radioRender : checkRender), RightRender && /*#__PURE__*/_react["default"].createElement(RightRender, helpers)));
}
CardRow.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  withCheck: _propTypes["default"].bool,
  withRadio: _propTypes["default"].bool,
  withAdd: _propTypes["default"].bool,
  onChangeCheck: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  check: _propTypes["default"].bool,
  withExternalCheck: _propTypes["default"].bool,
  onAdd: _propTypes["default"].func,
  name: _propTypes["default"].string,
  className: _propTypes["default"].string,
  rowClassName: _propTypes["default"].string,
  direction: _propTypes["default"].string,
  textRight: _propTypes["default"].string
};