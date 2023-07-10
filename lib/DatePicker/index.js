"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _classnames = _interopRequireDefault(require("classnames"));
var _formik = require("formik");
require("./DatePicker.scss");
var _Input = _interopRequireDefault(require("../Input/Input"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var YYYY_MM_DD = 'YYYY-MM-DD';
var timeZone = 'America/Mexico_City';
var DatePicker = function DatePicker(props) {
  var initialValue = props.initialValue,
    disabled = props.disabled,
    name = props.name,
    onChange = props.onChange,
    calendarTop = props.calendarTop,
    _props$initialYear = props.initialYear,
    initialYear = _props$initialYear === void 0 ? new Date().getFullYear() : _props$initialYear,
    _props$numberYears = props.numberYears,
    numberYears = _props$numberYears === void 0 ? 12 : _props$numberYears;
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var calendarRef = (0, _react.useRef)(null);
  var setValue = helpers.setValue;
  var days = (0, _react.useMemo)(function () {
    return Array.from({
      length: 31
    }, function (_, i) {
      return i + 1;
    });
  });
  var months = (0, _react.useMemo)(function () {
    return ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  });
  var years = (0, _react.useMemo)(function () {
    return Array.from({
      length: numberYears
    }, function (_, i) {
      return initialYear + 1 - i;
    });
  });
  var _useState = (0, _react.useState)('day'),
    _useState2 = _slicedToArray(_useState, 2),
    activeSelection = _useState2[0],
    setActiveSelection = _useState2[1];
  var _useState3 = (0, _react.useState)('día'),
    _useState4 = _slicedToArray(_useState3, 2),
    daySelected = _useState4[0],
    setDaySelected = _useState4[1];
  var _useState5 = (0, _react.useState)('mes'),
    _useState6 = _slicedToArray(_useState5, 2),
    monthSelected = _useState6[0],
    setMonthSelected = _useState6[1];
  var _useState7 = (0, _react.useState)('año'),
    _useState8 = _slicedToArray(_useState7, 2),
    yearSelected = _useState8[0],
    setYearSelected = _useState8[1];
  var _useState9 = (0, _react.useState)(days),
    _useState10 = _slicedToArray(_useState9, 2),
    calendarElements = _useState10[0],
    setCalendarElements = _useState10[1];
  var _useState11 = (0, _react.useState)('día'),
    _useState12 = _slicedToArray(_useState11, 2),
    currentTitle = _useState12[0],
    setCurrentTitle = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    open = _useState14[0],
    setOpen = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    hasContent = _useState16[0],
    setHasContent = _useState16[1];
  var handleSelection = (0, _react.useCallback)(function (value) {
    if (activeSelection === 'day') {
      setDaySelected(value);
      setActiveSelection('month');
      setCalendarElements(months);
      setCurrentTitle('mes');
    } else if (activeSelection === 'month') {
      setMonthSelected(months.indexOf(value));
      setActiveSelection('year');
      setCalendarElements(years);
      setCurrentTitle('año');
    } else {
      setYearSelected(value);
      setActiveSelection('day');
      setCalendarElements(days);
      setCurrentTitle('día');
      setOpen(false);
    }
  }, [activeSelection, years, days, months]);
  (0, _react.useEffect)(function () {
    if (daySelected !== 'día' || monthSelected !== 'mes' || yearSelected !== 'año') {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
    if (daySelected !== 'día' && monthSelected !== 'mes' && yearSelected !== 'año') {
      var realMonth = monthSelected + 1;
      var month = realMonth >= 10 ? realMonth : "0".concat(realMonth);
      var day = daySelected >= 10 ? daySelected : "0".concat(daySelected);
      setValue("".concat(yearSelected, "-").concat(month, "-").concat(day));
    }
  }, [yearSelected, daySelected, monthSelected]);
  var toogleOpen = (0, _react.useCallback)(function () {
    setOpen(!open);
  }, [open]);
  var handleCalendarClick = (0, _react.useCallback)(function () {
    if (!disabled) {
      toogleOpen();
    }
  });
  var handleOpen = (0, _react.useCallback)(function () {
    setOpen(true);
  }, []);
  (0, _react.useEffect)(function () {
    if (initialValue) {
      var propsDate = (0, _momentTimezone["default"])(initialValue, YYYY_MM_DD).tz(timeZone).toDate();
      setDaySelected(propsDate.getDate());
      setMonthSelected(propsDate.getMonth());
      setYearSelected(propsDate.getFullYear());
    } else {
      setDaySelected('día');
      setMonthSelected('mes');
      setYearSelected('año');
    }
  }, [initialValue]);
  var handleBlur = (0, _react.useCallback)(function (e) {
    setTimeout(function () {
      var target = document.activeElement;
      var focusedElement = target ? target.id || target || target.tagName : '';
      var isFocusedCalendar = focusedElement.className.indexOf('DatePickerV1__calendar--open') !== -1;
      setOpen(isFocusedCalendar);
      if (props.onBlur) {
        props.onBlur(e);
      }
    }, 1);
  });
  var handleKeyDown = (0, _react.useCallback)(function (event) {
    event.preventDefault();
  }, []);
  (0, _react.useEffect)(function () {
    if (onChange) {
      onChange(field.value);
    }
  }, [field.value]);

  // Starts classNames block
  var containerCN = (0, _classnames["default"])('DatePickerV1__input', {
    'DatePickerV1__input--open': open
  });
  var calendarCN = (0, _classnames["default"])(calendarTop && 'DatePickerV1__calendarTop', "DatePickerV1__calendar", {
    'DatePickerV1__calendar--open': open
  });
  var iconCn = (0, _classnames["default"])("svg-icon svg-icon-calendar");
  var noValues = daySelected === 'día' && monthSelected === 'mes' && yearSelected === 'año';
  var dayFormatted = daySelected === 'día' || daySelected >= 10 ? daySelected : "0".concat(daySelected);
  var monthFormatted = months[monthSelected] ? months[monthSelected] : 'mes';
  var finalValue = noValues ? '' : "".concat(dayFormatted, " / ").concat(monthFormatted, " / ").concat(yearSelected);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "DatePickerV1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: containerCN
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
    label: props.label
  }, field, {
    type: "text",
    value: finalValue,
    placeholder: props.placeholder,
    modifiedExternal: hasContent,
    name: props.name,
    id: props.id,
    disabled: disabled,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    right: /*#__PURE__*/_react["default"].createElement("div", {
      onBlur: handleBlur,
      onClick: handleCalendarClick,
      tabIndex: "-1",
      className: iconCn
    }),
    onFocus: handleOpen,
    inputClass: calendarTop
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    tabIndex: -1,
    ref: calendarRef,
    onBlur: function onBlur(e) {
      setOpen(false);
      if (props.onBlur) {
        props.onBlur(_objectSpread(_objectSpread({}, e), {}, {
          dateValue: field.value
        }));
      }
    },
    className: calendarCN
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "col-form-label"
  }, "Selecciona un ", currentTitle), /*#__PURE__*/_react["default"].createElement("div", {
    className: "DatePickerV1__calendar__".concat(activeSelection, "s-grid")
  }, calendarElements && calendarElements.map(function (element) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: "".concat(activeSelection, "-").concat(element),
      onClick: function onClick() {
        return handleSelection(element);
      },
      className: (0, _classnames["default"])('DatePickerV1__calendar__element', {
        'DatePickerV1__calendar__element--selected': element === daySelected || element === months[monthSelected] || element === yearSelected
      })
    }, activeSelection === 'day' ? element >= 10 ? element : "0".concat(element) : element);
  }))));
};
DatePicker.propTypes = {
  label: _propTypes["default"].string,
  name: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
};
DatePicker.defaultProps = {};
var _default = DatePicker;
exports["default"] = _default;