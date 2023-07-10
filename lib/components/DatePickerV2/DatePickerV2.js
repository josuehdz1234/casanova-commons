"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DatePickerV2;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _formik = require("formik");
var _classnames = _interopRequireDefault(require("classnames"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _core = require("@popperjs/core");
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _reactModernCalendarDatepicker = require("react-modern-calendar-datepicker");
require("react-modern-calendar-datepicker/lib/DatePicker.css");
var _date = require("../../utils/date");
var _dateAndTime = require("../../utils/constants/dateAndTime");
var _colors = require("../../utils/colors");
var _MaskedInput = _interopRequireDefault(require("../../Input/MaskedInput"));
var Icons = _interopRequireWildcard(require("../../Icons"));
var _OutsideAlerter = _interopRequireDefault(require("../OutsideAlerter"));
var _Portal = _interopRequireDefault(require("../Portal"));
var _config = require("./config");
require("./DatePickerV2.scss");
var _excluded = ["placeholder", "label", "disabled", "type", "name", "id", "minimumDate", "initialValue", "onChange", "onBlur", "calendarTop", "maximumDate", "autoComplete", "fromSearch", "resetDate", "placement", "dateFormat", "timeZone", "onResetDate", "formatDateValue", "initialDate"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var INITIAL_DATA = {
  daySelected: 'día',
  monthSelected: 'mes',
  yearSelected: 'año'
};
function DatePickerV2(_ref) {
  var _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? 'date-picker' : _ref$name,
    id = _ref.id,
    _ref$minimumDate = _ref.minimumDate,
    minimumDate = _ref$minimumDate === void 0 ? (0, _reactModernCalendarDatepicker.utils)().getToday() : _ref$minimumDate,
    defaultValue = _ref.initialValue,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? _noop2["default"] : _ref$onChange,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? _noop2["default"] : _ref$onBlur,
    calendarTop = _ref.calendarTop,
    _ref$maximumDate = _ref.maximumDate,
    maximumDate = _ref$maximumDate === void 0 ? (0, _date.getNextYear)() : _ref$maximumDate,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
    fromSearch = _ref.fromSearch,
    _ref$resetDate = _ref.resetDate,
    resetDate = _ref$resetDate === void 0 ? false : _ref$resetDate,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'right' : _ref$placement,
    _ref$dateFormat = _ref.dateFormat,
    dateFormat = _ref$dateFormat === void 0 ? _date.YYYY_MM_DD : _ref$dateFormat,
    _ref$timeZone = _ref.timeZone,
    timeZone = _ref$timeZone === void 0 ? _date.timeZone : _ref$timeZone,
    _ref$onResetDate = _ref.onResetDate,
    onResetDate = _ref$onResetDate === void 0 ? _noop2["default"] : _ref$onResetDate,
    _ref$formatDateValue = _ref.formatDateValue,
    formatDateValue = _ref$formatDateValue === void 0 ? false : _ref$formatDateValue,
    _ref$initialDate = _ref.initialDate,
    initialDate = _ref$initialDate === void 0 ? null : _ref$initialDate,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  var _useState3 = (0, _react.useState)(INITIAL_DATA.daySelected),
    _useState4 = _slicedToArray(_useState3, 2),
    daySelected = _useState4[0],
    setDaySelected = _useState4[1];
  var _useState5 = (0, _react.useState)(INITIAL_DATA.monthSelected),
    _useState6 = _slicedToArray(_useState5, 2),
    monthSelected = _useState6[0],
    setMonthSelected = _useState6[1];
  var _useState7 = (0, _react.useState)(INITIAL_DATA.yearSelected),
    _useState8 = _slicedToArray(_useState7, 2),
    yearSelected = _useState8[0],
    setYearSelected = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    hasContent = _useState10[0],
    setHasContent = _useState10[1];
  var _useState11 = (0, _react.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    params = _useState12[0],
    setParams = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    show = _useState14[0],
    setShow = _useState14[1];
  var _useField = (0, _formik.useField)(name),
    _useField2 = _slicedToArray(_useField, 3),
    field = _useField2[0],
    meta = _useField2[1],
    helpers = _useField2[2];
  var setValue = helpers.setValue,
    setTouched = helpers.setTouched;
  var trigger = (0, _react.useRef)();
  var popup = (0, _react.useRef)();
  var arrow = (0, _react.useRef)();
  var initialValue = (0, _react.useMemo)(function () {
    return defaultValue || meta.initialValue;
  }, [defaultValue, meta.initialValue]);
  var handleKeyDown = (0, _react.useCallback)(function (e) {
    e.preventDefault();
  }, []);
  var handleChange = (0, _react.useCallback)(function (evt) {
    var disabledOnChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setShow(false);
    setSelectedDate(evt);
    if (fromSearch && !disabledOnChange) {
      var realMonth = evt.month >= 10 ? evt.month : "0".concat(evt.month);
      var realDay = evt.day >= 10 ? evt.day : "0".concat(evt.day);
      var value = "".concat(evt.year, "-").concat(realMonth, "-").concat(realDay);
      var formattedValue = formatDateValue ? (0, _momentTimezone["default"])(value).tz(timeZone).format(dateFormat) : value;
      var event = {
        target: {
          value: formattedValue
        }
      };
      onChange(event);
      field.onBlur(event);
    }
  }, [formatDateValue, timeZone, dateFormat]);
  var handleBlur = (0, _react.useCallback)(function (e) {
    field.onBlur(e);
    if (!disabled) onBlur(e);
  }, [onBlur, disabled, field.onBlur]);
  var handleResetDate = (0, _react.useCallback)(function () {
    setSelectedDate(null);
    setDaySelected('día');
    setMonthSelected('mes');
    setYearSelected('año');
    setHasContent(false);
    onResetDate();
  }, [onResetDate]);
  var handleClickOutsideAlerter = (0, _react.useCallback)(function () {
    setShow(false);
    setTouched(true);
  }, [setTouched]);
  var changeShow = (0, _react.useCallback)(function () {
    if (!disabled) {
      setTouched(meta.touched);
      setShow(!show);
    }
  }, [show, disabled, setTouched, meta.touched]);
  (0, _react.useEffect)(function () {
    if (initialValue) {
      var propsDate = (0, _momentTimezone["default"])(initialValue, dateFormat).tz(timeZone).toDate();
      setDaySelected(propsDate.getDate());
      setMonthSelected(propsDate.getMonth());
      setYearSelected(propsDate.getFullYear());
    } else {
      setDaySelected('día');
      setMonthSelected('mes');
      setYearSelected('año');
    }
  }, [initialValue]);
  (0, _react.useEffect)(function () {
    if (!selectedDate) return;
    var day = selectedDate.day,
      month = selectedDate.month,
      year = selectedDate.year;
    setDaySelected(day);
    setMonthSelected(month - 1);
    setYearSelected(year);
    var validDate = Boolean(day || month || year);
    var allValidDates = Boolean(day && month && year);
    setHasContent(validDate);
    if (allValidDates || initialValue) {
      var date = "".concat(year, "-").concat(month, "-").concat(day);
      var formattedDate = formatDateValue ? (0, _momentTimezone["default"])(date).tz(timeZone).format(dateFormat) : date;
      var event = {
        target: {
          value: formattedDate
        }
      };
      setValue(formattedDate);
      setTimeout(function () {
        if (trigger.current) {
          var _trigger$current;
          trigger === null || trigger === void 0 || (_trigger$current = trigger.current) === null || _trigger$current === void 0 ? void 0 : _trigger$current.blur(event);
        }
        setTouched(true);
      }, 1);
    }
  }, [selectedDate, initialValue, formatDateValue, timeZone, dateFormat]);
  (0, _react.useEffect)(function () {
    if (!fromSearch) onChange(field.value);
  }, [field.value]);
  (0, _react.useEffect)(function () {
    if (field.value && fromSearch) {
      var currentDate = (0, _date.date2CalendarDate)(field.value);
      if (currentDate) handleChange(currentDate, true);
    }
  }, [field.value, fromSearch]);
  (0, _react.useEffect)(function () {
    var instance = null;
    if (trigger.current && popup.current && arrow.current) {
      instance = (0, _core.createPopper)(trigger.current, popup.current, (0, _config.getPopperConfig)({
        placement: placement,
        element: arrow.current,
        onFirstUpdate: setParams
      }));
    }
    return function () {
      var _instance;
      return (_instance = instance) === null || _instance === void 0 ? void 0 : _instance.destroy();
    };
  }, [trigger.current, popup.current, arrow.current, placement]);
  var currentDateData = (0, _react.useMemo)(function () {
    return {
      daySelected: daySelected,
      monthSelected: monthSelected,
      yearSelected: yearSelected
    };
  }, [daySelected, monthSelected, yearSelected]);
  var noDateValues = (0, _react.useMemo)(function () {
    return (0, _isEqual2["default"])(currentDateData, INITIAL_DATA);
  }, [currentDateData]);
  (0, _react.useEffect)(function () {
    if (!field.value && !noDateValues) {
      handleResetDate();
    }
  }, [field.value, noDateValues]);
  var iconCn = (0, _classnames["default"])("svg-icon svg-icon-calendar");
  var dayFormatted = daySelected === 'día' || daySelected >= 10 ? daySelected : "0".concat(daySelected);
  var monthFormatted = _dateAndTime.months[monthSelected] || 'mes';
  var finalValue = noDateValues ? '' : "".concat(dayFormatted, " / ").concat(monthFormatted, " / ").concat(yearSelected);
  var datePicker = /*#__PURE__*/_react["default"].createElement(_reactModernCalendarDatepicker.Calendar, _extends({
    value: selectedDate || initialDate,
    onChange: handleChange,
    inputPlaceholder: placeholder,
    shouldHighlightWeekends: true,
    colorPrimary: _colors.COLORS.SECONDARY,
    calendarClassName: "custom-calendar",
    wrapperClassName: "custom-calendar-wrapper",
    calendarTodayClassName: "custom-today-day",
    minimumDate: minimumDate,
    maximumDate: maximumDate,
    locale: _date.spanishLocale
  }, restProps));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-0 p-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row m-0 p-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(!disabled && 'pointer', 'p-0', "col-".concat(resetDate && selectedDate ? '10' : '12')),
    onClick: changeShow,
    onKeyPress: changeShow,
    role: "button",
    tabIndex: "0"
  }, /*#__PURE__*/_react["default"].createElement(_MaskedInput["default"], _extends({
    ref: trigger,
    label: label,
    type: type,
    placeholder: placeholder,
    modifiedExternal: hasContent,
    disabled: disabled,
    id: id,
    right: /*#__PURE__*/_react["default"].createElement("div", {
      tabIndex: "-1",
      role: "button",
      onClick: changeShow,
      onKeyPress: changeShow,
      className: iconCn,
      "aria-label": id
    }),
    inputClass: calendarTop,
    onKeyDown: handleKeyDown
  }, field, {
    onBlur: handleBlur,
    value: finalValue,
    autoComplete: autoComplete,
    maskPlaceholder: ""
  }))), resetDate && field.value && /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-2 p-0 d-flex"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn p-0 align-self-center DatePicker__ResetDate",
    onClick: handleResetDate
  }, /*#__PURE__*/_react["default"].createElement(Icons.IcoDeleteGray, {
    width: "1.5rem",
    height: "1.5rem"
  })))), /*#__PURE__*/_react["default"].createElement(_Portal["default"], null, show && /*#__PURE__*/_react["default"].createElement(_OutsideAlerter["default"], {
    className: "pointer DatePickerV2",
    onClick: handleClickOutsideAlerter
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: popup,
    className: "DatePickerV2__Container DatePickerV2__Container--animation-in show bs-tooltip-".concat(params.placement)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "arrow",
    ref: arrow
  }), datePicker))));
}
DatePickerV2.propTypes = {
  label: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  id: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  type: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  autoComplete: _propTypes["default"].string,
  resetDate: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  timeZone: _propTypes["default"].string,
  formatDateValue: _propTypes["default"].bool
};